"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jul", value: 100 },
  { name: "Aug", value: 880 },
  { name: "Sep", value: 450 },
  { name: "Oct", value: 250 },
  { name: "Nov", value: 550 },
  { name: "Dec", value: 150 },
  { name: "Jan", value: 600 },
]

export function BalanceHistory() {
  return (
    <div className="w-full">
      <h2 className="text-[22px] font-semibold text-[#27364B] mb-4">Balance History</h2>
      <div className="bg-white rounded-[20px] p-8 h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="50%" stopColor="#2A85FF" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#2A85FF" stopOpacity={0.01}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3" 
              vertical={false}
              stroke="#E7EEF8"
              strokeWidth={1}
            />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#6F767E', fontSize: 13 }}
              dy={10}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#6F767E', fontSize: 13 }}
              tickCount={5}
              domain={[0, 800]}
              dx={0}
              tickFormatter={(value) => `${value} —`}
              width={60}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2A85FF"
              strokeWidth={2}
              fill="url(#colorValue)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

