import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

function Home() {

  const loggedIn = {firstName: "Gabriel", lastName: "Gomez", email: "luisggm33@gmail.com"}

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.firstName || "Guest"}
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