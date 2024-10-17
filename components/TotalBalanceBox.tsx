
import AnimateCounter from './ui/AnimateCounter';
import DoughnutChart from './ui/DoughnutChart';


function TotalBalanceBox(props: TotlaBalanceBoxProps) {

  const {accounts, totalBanks, totalCurrentBalance} = props;


  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>
        <div className="flex flex-col gap-6">
          <h2 className="header-2">
            Bank Accounts: {totalBanks}
          </h2>
          <div className="flex flex-col gap-6">
          <p className="total-balance-label">
            Total Current Balance
          </p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimateCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default TotalBalanceBox