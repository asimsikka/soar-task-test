const transactions = [
  { 
    icon: "💳",
    bgColor: "bg-[#FFF8DD]",
    description: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    amountColor: "text-red-500"
  },
  { 
    icon: "🅿️",
    bgColor: "bg-[#EEF1FF]",
    description: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    amountColor: "text-green-500"
  },
  { 
    icon: "👤",
    bgColor: "bg-[#E8F9FF]",
    description: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    amountColor: "text-green-500"
  }
]

export function RecentTransactions() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#1A1D1F]">Recent Transaction</h2>
        {/* <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">See All</a> */}
      </div>
      <div className="bg-white rounded-[20px] p-6 border border-gray-100">
        <div className="space-y-6">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${transaction.bgColor} flex items-center justify-center text-xl`}>
                {transaction.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-[#1A1D1F] truncate">
                  {transaction.description}
                </div>
                <div className="text-sm text-[#6F767E]">{transaction.date}</div>
              </div>
              <div className={`font-medium whitespace-nowrap ${transaction.amountColor}`}>
                {transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

