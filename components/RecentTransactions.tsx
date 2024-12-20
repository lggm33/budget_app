import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankItems'
import BankInfo from './BankInfo'
import TransactionsTable from './TransactionsTable'


function RecentTransactions(props: RecentTransactionsProps) {

  const {accounts, transactions=[], appwriteItemId, page=1} = props

  return (
    <section className='recent-transactions'>
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">
          Recent Transactions
        </h2>
        <Link 
          href={`/transaction-history/?id=${appwriteItemId}`}
          className='view-all-btn'  
        >
          View all
        </Link>
      </header>
      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className='recent-transactions-tablist'>
          {accounts.map((account: Account) => (
            <TabsTrigger
              key={account.id}
              value={account.appwriteItemId}
            >
              <BankTabItem
                key={account.id}
                account={account}
                appwriteItemId={appwriteItemId}
              />
            </TabsTrigger>
          ))}
        </TabsList>
          {accounts.map((account: Account) => (
            <TabsContent
              key={account.id}
              value={account.appwriteItemId}
              className='space-y-4'
            > 
              <BankInfo
                account={account}
                appwriteItemId={appwriteItemId}
                type="full"
              />

              <TransactionsTable
                transactions={transactions}
              />

            </TabsContent>
          ))}
      </Tabs>

    </section>
  )
}

export default RecentTransactions