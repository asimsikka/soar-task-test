"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { name: "Sat", deposit: 240, withdraw: 400 },
  { name: "Sun", deposit: 120, withdraw: 300 },
  { name: "Mon", deposit: 260, withdraw: 350 },
  { name: "Tue", deposit: 350, withdraw: 450 },
  { name: "Wed", deposit: 200, withdraw: 150 },
  { name: "Thu", deposit: 250, withdraw: 400 },
  { name: "Fri", deposit: 300, withdraw: 350 },
]

export function WeeklyActivity() {
  return (
    <>
      <h2 className="text-xl font-semibold text-[#1A1D1F] mb-6">Weekly Activity</h2>
      <div className="bg-white rounded-[20px] p-6 border border-[#E4E4E4]">
        <div className="flex items-center justify-end gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#2A85FF]" />
            <span className="text-sm text-[#6F767E]">Deposit</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#1A1D1F]" />
            <span className="text-sm text-[#6F767E]">Withdraw</span>
          </div>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={12}>
              <CartesianGrid 
                strokeDasharray="4" 
                vertical={false} 
                stroke="#E4E4E4"
              />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#6F767E', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#6F767E', fontSize: 12 }}
                tickFormatter={(value) => `${value}`}
                dx={-10}
              />
              <Bar 
                dataKey="withdraw" 
                fill="#1A1D1F" 
                radius={[20, 20, 0, 0]}
                maxBarSize={20}
              />
              <Bar 
                dataKey="deposit" 
                fill="#2A85FF" 
                radius={[20, 20, 0, 0]}
                maxBarSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  )
}

