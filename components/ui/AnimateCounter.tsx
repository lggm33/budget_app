'use client'
import CountUp from "react-countup"

function AnimateCounter({amount} : {amount: number}) {
  return (
    <div>
      <CountUp 
        end={amount} 
        decimal="." 
        prefix="$"
        decimals={2}
        className="w-full"
      />
    </div>
  )
}

export default AnimateCounter