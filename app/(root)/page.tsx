import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

async function Home() {

  const loggedIn = await getLoggedInUser()

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
                  accounts={[]}
                  totalBanks={1}
                  totalCurrentBalance={1250.90}
                />
            </header>
        </div>

        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 124.50}, {currentBalance: 124.50}]}
        />

    </section>
  )
}

export default Home