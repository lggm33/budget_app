import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import {
  getAccount, 
  getAccounts 
} from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import {redirect} from "next/navigation";

async function Home(props: SearchParamProps) {

  const {id, page} = props.searchParams

  const currentPage = Number(page as string)

  let loggedIn = await getLoggedInUser()

  if(!loggedIn) redirect(`/`)
  
  const accounts = await getAccounts({userId: loggedIn.$id})

  if (!accounts) return <div>No accounts found</div>

  const accountsData = accounts?.data
  const appwriteItemId = (id as string) || accountsData[0].appwriteItemId
  const account = await getAccount({appwriteItemId})

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.name || "Guest"}
                  subtext="Manage your account transactions efficiantly"
                />

                <TotalBalanceBox
                  accounts={accountsData}
                  totalBanks={accounts?.totalBanks}
                  totalCurrentBalance={accounts?.totalCurrentBalance}
                />
                

            </header>

            <RecentTransactions
              accounts={accountsData}
              transactions={account?.transactions}
              appwriteItemId={appwriteItemId}
              page={currentPage}
            
            />
        </div>

        <RightSidebar
          user={loggedIn}
          transactions={accounts?.transactions}
          banks={accountsData?.slice(0,2)}
        />

    </section>
  )
}

export default Home