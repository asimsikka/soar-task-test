"use client";

import { BalanceHistory } from "./components/dashboard/balance-history";
import { CreditCard } from "./components/dashboard/credit-card";
import { ExpenseStatistics } from "./components/dashboard/expense-statistics";
import { QuickTransfer } from "./components/dashboard/quick-transfer";
import { RecentTransactions } from "./components/dashboard/recent-transactions";
import { WeeklyActivity } from "./components/dashboard/weekly-activity";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Content */}
      <div className="p-4 lg:p-8 pt-[40px] lg:pt-[40px]">
        <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#1A1D1F]">My Cards</h2>
              <a href="#" className="text-sm font-medium text-[#2A85FF]">
                See All
              </a>
            </div>
            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
              <CreditCard
                variant="dark"
                balance="5,756"
                cardHolder="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
                validThru="12/22"
              />
              <CreditCard
                variant="light"
                balance="5,756"
                cardHolder="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
                validThru="12/22"
              />
            </div>
          </div>

          <div className="lg:col-span-4">
            <RecentTransactions />
          </div>

          <div className="lg:col-span-8">
            <WeeklyActivity />
          </div>

          <div className="lg:col-span-4">
            <ExpenseStatistics />
          </div>

          <div className="lg:col-span-4">
            <QuickTransfer />
          </div>

          <div className="lg:col-span-8">
            <BalanceHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
