"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Entertainment", value: 30, color: "#2F3B5C" },
  { name: "Investment", value: 25, color: "#2A85FF" },
  { name: "Bill Exp..", value: 35, color: "#FF6B2C" },
  { name: "Others", value: 20, color: "#1A1D1F" }
]

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
  value
}: any) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <g>
      <text
        x={x}
        y={y - 10}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-[24px] font-bold"
      >
        {`${value}%`}
      </text>
      <text
        x={x}
        y={y + 15}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-[15px]"
      >
        {name}
      </text>
    </g>
  )
}

export function ExpenseStatistics() {
  return (
    <div className="space-y-6">
      <h2 className="text-[22px] font-bold text-[#27364B]">Expense Statistics</h2>
      <div className="bg-white rounded-[32px] p-8 border border-[#E8ECEF]">
        <div className="h-[330px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={160}
                paddingAngle={3}
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel}
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    strokeWidth={2}
                    stroke="#fff"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

