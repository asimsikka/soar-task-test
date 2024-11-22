interface CreditCardProps {
  variant?: "dark" | "light"
  balance: string
  cardHolder: string
  cardNumber: string
  validThru: string
}

export function CreditCard({ 
  variant = "dark", 
  balance, 
  cardHolder, 
  cardNumber, 
  validThru 
}: CreditCardProps) {
  const isDark = variant === "dark"

  return (
    <div 
      className={`relative rounded-[20px] p-6 overflow-hidden ${
        isDark 
          ? "bg-gradient-to-b from-[#2C3A4E] to-[#1C2631] text-white" 
          : "bg-white text-[#27364B] border border-[#E4E4E4]"
      }`}
    >
      <div className="flex justify-between items-start mb-12">
        <div>
          <div className={`text-sm ${isDark ? "text-white/60" : "text-[#2A85FF]"}`}>
            Balance
          </div>
          <div className="text-[28px] font-semibold mt-1">${balance}</div>
        </div>
        <div className="text-2xl">💳</div>
      </div>
      <div className="flex justify-between mb-8">
        <div>
          <div className={`text-xs ${isDark ? "text-white/60" : "text-[#2A85FF]"}`}>
            CARD HOLDER
          </div>
          <div className="font-medium mt-1">{cardHolder}</div>
        </div>
        <div className="text-right">
          <div className={`text-xs ${isDark ? "text-white/60" : "text-[#2A85FF]"}`}>
            VALID THRU
          </div>
          <div className="font-medium mt-1">{validThru}</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="tracking-[4px] text-lg font-medium">{cardNumber}</div>
        <div className="flex -space-x-2">
          <div className={`w-6 h-6 rounded-full ${isDark ? "bg-white/20" : "bg-[#E4E4E4]"}`} />
          <div className={`w-6 h-6 rounded-full ${isDark ? "bg-white/10" : "bg-[#F4F4F4]"}`} />
        </div>
      </div>
    </div>
  )
}

