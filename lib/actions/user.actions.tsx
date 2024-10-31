"use server"

import { createSessionClient, createAdminClient } from "../appwrite";
import { ID, Query } from "node-appwrite";
import { cookies } from "next/headers";
import { encryptId, extractCustomerIdFromUrl, parseStringify } from "../utils";
import { CountryCode, ProcessorTokenCreateRequest, ProcessorTokenCreateRequestProcessorEnum, Products } from "plaid";
import { count } from "console";
import { plaidClient } from "../plaid";
import { revalidatePath } from "next/cache";
import { addFundingSource, createDwollaCustomer } from "./dwolla.actions";
import { redirect } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID

} = process.env;

export const getUserInfo = async () => {
  try {
    const supabase = await createClient()
    const {data: { user } } = await supabase.auth.getUser()

    const response = await supabase.from('users').select(`*, cards(*), transactions(*)`).eq('id', user?.id).single()

    const {cards, transactions, ...data} = response.data

    const totalBanks = cards?.length || 0

    const totalCurrentBalance = cards?.reduce((acc: any, card: { balance: any; }) => acc + card.balance, 0) || 0

    const userInfo = {
      transactions: transactions,
      cards: cards,
      data: {...data, totalBanks, totalCurrentBalance}
    }

    console.log({transactions})

    return parseStringify(userInfo);
  } catch (error) {
    console.log(error)
  }
}
export const createLinkToken = async (user: User) => {
  try {
    const tokenParams = {
      user: {
        client_user_id: user.$id,
      },
      client_name: `${user.firstName} ${user.lastName}`,
      products: ["auth", "transactions"] as Products[],
      language: "en",
      country_codes: ["US"] as CountryCode[],

    }

    const response = await plaidClient.linkTokenCreate(tokenParams);

    return parseStringify({linkToken: response.data.link_token})

  } catch (error) {
    console.error(error)
    return null
  }
}

export const createBankAccount = async ({
  userId,
  bankId,
  accountId,
  accessToken,
  fundingSourceUrl,
  sharableId,
}: createBankAccountProps) => {
  try {
    const { database } = await createAdminClient();

    const bankAccount = await database.createDocument(
      DATABASE_ID!,
      BANK_COLLECTION_ID!,
      ID.unique(),
      {
        userId,
        bankId,
        accountId,
        accessToken,
        fundingSourceUrl,
        sharableId,
      }
    )
    return parseStringify(bankAccount);
  } catch (error) {
    console.log(error);
  }
}

export const exchangePublicToken = async ({
  publicToken,
  user,
}: exchangePublicTokenProps) => {
  try {
    // Exchange public token for access token and item ID
    const response = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });

    const accessToken = response.data.access_token;
    const itemId = response.data.item_id;
    
    // Get account information from Plaid using the access token
    const accountsResponse = await plaidClient.accountsGet({
      access_token: accessToken,
    });

    const accountData = accountsResponse.data.accounts[0];

    // Create a processor token for Dwolla using the access token and account ID
    const request: ProcessorTokenCreateRequest = {
      access_token: accessToken,
      account_id: accountData.account_id,
      processor: "dwolla" as ProcessorTokenCreateRequestProcessorEnum,
    };

    const processorTokenResponse = await plaidClient.processorTokenCreate(request);
    const processorToken = processorTokenResponse.data.processor_token;

     // Create a funding source URL for the account using the Dwolla customer ID, processor token, and bank name
     const fundingSourceUrl = await addFundingSource({
      dwollaCustomerId: user.dwollaCustomerId,
      processorToken,
      bankName: accountData.name,
    });
    
    // If the funding source URL is not created, throw an error
    if (!fundingSourceUrl) throw Error;

    // Create a bank account using the user ID, item ID, account ID, access token, funding source URL, and shareableId ID

    await createBankAccount({
      userId: user.$id,
      bankId: itemId,
      accountId: accountData.account_id,
      accessToken,
      fundingSourceUrl,
      sharableId: encryptId(accountData.account_id),
    });

    // Revalidate the path to reflect the changes
    revalidatePath("/");

    // Return a success message
    return parseStringify({
      publicTokenExchange: "complete",
    });
  } catch (error) {
    console.error("An error occurred while creating exchanging token:", error);
  }
}

export const getBanks = async ({ userId }: getBanksProps) => {
  try {
    const { database } = await createAdminClient();

    const banks = await database.listDocuments(
      DATABASE_ID!,
      BANK_COLLECTION_ID!,
      [Query.equal('userId', [userId])]
    )

    return parseStringify(banks.documents);
  } catch (error) {
    console.log(error)
  }
}

export const getBank = async ({ documentId }: getBankProps) => {
  try {
    const { database } = await createAdminClient();

    const bank = await database.listDocuments(
      DATABASE_ID!,
      BANK_COLLECTION_ID!,
      [Query.equal('$id', [documentId])]
    )

    return parseStringify(bank.documents[0]);
  } catch (error) {
    console.log(error)
  }
}

export const getBankByAccountId = async ({ accountId }: getBankByAccountIdProps) => {
  try {
    const { database } = await createAdminClient();

    const bank = await database.listDocuments(
      DATABASE_ID!,
      BANK_COLLECTION_ID!,
      [Query.equal('accountId', [accountId])]
    )

    if(bank.total !== 1) return null;

    return parseStringify(bank.documents[0]);
  } catch (error) {
    console.log(error)
  }
}

export async function loginSupabase(props: signInProps) {

  const {email, password} = props
  
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get('email') as string,
  //   password: formData.get('password') as string,
  // }

  const { error } = await supabase.auth.signInWithPassword({email, password})
  
  if (error) {
    console.error("Error in loginSupabase funtion: ", error)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signupSupabase(props: SignUpParams) {

  const { email, password } = props

  const supabase = await createClient()

  const response = await supabase.auth.signUp({email, password})
  console.log(response.data.user)
  
  if (response.error) {
    console.error("Error in signupSupabase funtion: ", response.error)
    redirect('/error')
  }

  const data = {
    id: response.data.user?.id,
    email: props.email,
    first_name: props.firstName,
    last_name: props.lastName,
    phone_number: props.phoneNumber,
    city: props.city,
    country: props.country,
    date_of_birth: props.dateOfBirth,

  }

  const createDataUser = await supabase.from('users').insert({...data}).select()
  console.log(createDataUser)

  revalidatePath('/', 'layout')
  redirect('/confirm-email')
}

export async function logoutSupabase() {
  const supabase = await createClient()
  const {error} = await supabase.auth.signOut()

  if (error) {
    console.error("Error in logoutSupabase funtion: ", error)
    redirect('/error')
  }
 redirect('/')
}

export async function isUserLoggin() {
  const supabase = await createClient()
  const {data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.redirect('/sign-in')
  return user
}