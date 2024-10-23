"use server"

import { createSessionClient, createAdminClient } from "../appwrite";
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async (props: signInProps) => {

  const { email, password } = props;
  try {

    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password)
    
    return parseStringify(session);

  } catch (error) {
    console.error("Error during sign in:", error);
  }
}

export const signUp = async (props: SignUpParams) => {

  const { email, password, firstName, lastName } = props;

  try {

    const { account } = await createAdminClient();

  const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return parseStringify(newUserAccount);
    
  } catch (error) {
    console.error("Error during sign in:", error);
    return null
  }
}


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user =  await account.get();

    return parseStringify(user);
  } catch (error) {
    console.error(error)
    return null;
  }
}

export async function logoutAccount() {
  try {
    const { account } = await createSessionClient();
    cookies().delete("appwrite-session");
    await account.deleteSession("current");
    
  } catch (error) {
    console.error(error)
    return null
  }
}
