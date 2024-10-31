import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import {getAccount, getAccounts } from '@/lib/actions/bank.actions'
import {redirect} from "next/navigation";
import { createClient } from '@/lib/supabase/server'
import SignOut from '@/components/SignOut'
import { getUserInfo } from '@/lib/actions/user.actions'

async function Home(props: SearchParamProps) {

  const userInfo = await getUserInfo()

  const {data, cards} = userInfo
  
  
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                  type="greeting"
                  title="Welcome"
                  user={data?.first_name}
                  subtext="Manage your account transactions efficiantly"
                />

                <TotalBalanceBox
                  accounts={cards}
                  totalBanks={data?.totalBanks}
                  totalCurrentBalance={data?.totalCurrentBalance}
                />
                
                <SignOut/>
            </header>

            {/* <RecentTransactions
              accounts={cards}
              transactions={account?.transactions}
              user={data}
              page={currentPage}
            
            /> */}
        </div>

        <RightSidebar
          user={data}
          transactions={[]}
          banks={cards}
        />

    </section>
  )
}

export default Home