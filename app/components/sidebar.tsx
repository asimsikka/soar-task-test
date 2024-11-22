"use client"

import Link from "next/link"
import { Home, Receipt, Users, LineChart, CreditCard, Wallet, Settings, PenToolIcon as Tool, Shield, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Receipt, label: "Transactions", href: "/transactions" },
  { icon: Users, label: "Accounts", href: "/accounts" },
  { icon: LineChart, label: "Investments", href: "/investments" },
  { icon: CreditCard, label: "Credit Cards", href: "/credit-cards" },
  { icon: Wallet, label: "Loans", href: "/loans" },
  { icon: Tool, label: "Services", href: "/services" },
  { icon: Shield, label: "My Privileges", href: "/privileges" },
  { icon: Settings, label: "Setting", href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()
  
  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden fixed top-4 left-4 z-50">
          <Button variant="ghost" size="icon">
            {/* <Menu className="h-6 w-6" /> */}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[300px] p-0">
          <SheetHeader className="p-6 border-b">
            <SheetTitle>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#1A1D1F] rounded-lg flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <span>Soar Task</span>
              </div>
            </SheetTitle>
          </SheetHeader>
          <nav className="px-6 py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 text-[15px] font-medium rounded-xl transition-colors ${
                  pathname === item.href
                    ? "text-[#2A85FF] bg-[#EFF3FF]" 
                    : "text-[#6F767E] hover:bg-[#F4F4F4] hover:text-[#1A1D1F]"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-[280px] border-r border-[#F4F4F4] bg-white p-6 flex-col fixed h-screen">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-[#1A1D1F] rounded-lg flex items-center justify-center">
            <CreditCard className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-lg text-[#1A1D1F]">Soar Task</span>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 text-[15px] font-medium rounded-xl transition-colors ${
                pathname === item.href
                  ? "text-[#2A85FF] bg-[#EFF3FF]" 
                  : "text-[#6F767E] hover:bg-[#F4F4F4] hover:text-[#1A1D1F]"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

