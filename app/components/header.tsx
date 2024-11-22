"use client"

import { Settings, Bell, Search, Menu } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const title = pathname === '/' ? 'Dashboard' : pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1)

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Mobile Header */}
      <div className="flex flex-col lg:hidden bg-white border-b border-[#F4F4F4]">
        <div className="flex items-center justify-between px-4 py-3">
          <Sheet>
            <SheetTrigger asChild>
              <button className="w-10 h-10 flex items-center justify-center">
                <Menu className="w-6 h-6 text-[#1A1D1F]" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
              {/* Sidebar content goes here */}
            </SheetContent>
          </Sheet>
          <h1 className="text-xl font-semibold text-[#1A1D1F]">{title}</h1>
          <Image
            src="/images/1.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#6F767E]" />
            <Input
              type="search"
              placeholder="Search for something"
              className="w-full h-11 pl-11 pr-4 rounded-xl bg-[#F4F4F4] border-0 text-[15px] placeholder:text-[#6F767E] focus-visible:ring-0"
            />
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex bg-white border-b border-[#F4F4F4] px-8 py-4">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-[32px] font-semibold text-[#1A1D1F]">{title}</h1>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#6F767E]" />
              <Input
                type="search"
                placeholder="Search for something"
                className="w-[320px] h-11 pl-11 pr-4 rounded-xl bg-[#F4F4F4] border-0 text-[15px] placeholder:text-[#6F767E] focus-visible:ring-0"
              />
            </div>
            <button className="w-11 h-11 flex items-center justify-center rounded-xl hover:bg-[#F4F4F4] transition-colors">
              <Settings className="w-[22px] h-[22px] text-[#1A1D1F]" />
            </button>
            <button className="w-11 h-11 flex items-center justify-center rounded-xl hover:bg-[#F4F4F4] transition-colors relative">
              <Bell className="w-[22px] h-[22px] text-[#1A1D1F]" />
              <span className="absolute top-2.5 right-2.5 w-[6px] h-[6px] bg-[#2A85FF] rounded-full" />
            </button>
            <Image
              src="/images/1.jpg"
              alt="Profile"
              width={44}
              height={44}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

