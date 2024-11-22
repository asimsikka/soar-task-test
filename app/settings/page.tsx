"use client"

import { PenSquare } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

const formFields = [
  { label: "Your Name", name: "name", defaultValue: "Charlene Reed" },
  { label: "User Name", name: "username", defaultValue: "Charlene Reed" },
  { label: "Email", name: "email", defaultValue: "charlenereed@gmail.com" },
  { label: "Password", name: "password", defaultValue: "**********", type: "password" },
  { label: "Date of Birth", name: "dob", defaultValue: "1990-01-25", type: "select" },
  { label: "Present Address", name: "presentAddress", defaultValue: "San Jose, California, USA" },
  { label: "Permanent Address", name: "permanentAddress", defaultValue: "San Jose, California, USA" },
  { label: "City", name: "city", defaultValue: "San Jose" },
  { label: "Postal Code", name: "postalCode", defaultValue: "45962" },
  { label: "Country", name: "country", defaultValue: "USA" },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] p-4 md:p-8">
      <div className="max-w-[1120px] mx-auto bg-white rounded-xl p-4 md:p-8">
        {/* Tabs */}
        <div className="flex gap-6 md:gap-12 mb-8 md:mb-12 border-b overflow-x-auto">
          <button className="pb-4 text-[#1A1D1F] border-b-2 border-[#1A1D1F] font-medium whitespace-nowrap">
            Edit Profile
          </button>
          <button className="pb-4 text-[#6F767E] whitespace-nowrap">
            Preferences
          </button>
          <button className="pb-4 text-[#6F767E] whitespace-nowrap">
            Security
          </button>
        </div>

        {/* Profile Form */}
        <div className="max-w-[940px]">
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative">
              <Image
                src="/images/1.jpg"
                alt="Profile"
                width={100}
                height={100}
                className="rounded-full md:w-[120px] md:h-[120px] w-[100px] h-[100px]"
              />
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                <PenSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6">
            {formFields.map((field) => (
              <div key={field.name} className="col-span-1">
                <label className="block text-sm mb-2 text-[#1A1D1F]">{field.label}</label>
                {field.type === "select" ? (
                  <Select defaultValue={field.defaultValue}>
                    <SelectTrigger className="h-11 rounded-lg bg-white border-[#E8ECEF] focus:ring-1 focus:ring-[#2A85FF] text-[#1A1D1F]">
                      <SelectValue placeholder={field.defaultValue} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={field.defaultValue}>{field.defaultValue}</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <Input 
                    type={field.type || "text"}
                    defaultValue={field.defaultValue} 
                    className="h-11 rounded-lg bg-white border-[#E8ECEF] focus-visible:ring-1 focus-visible:ring-[#2A85FF] text-[#1A1D1F]" 
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 flex justify-end">
            <Button className="bg-[#1A1D1F] text-white hover:bg-[#1A1D1F]/90 rounded-xl px-8 h-11 w-full md:w-auto">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

