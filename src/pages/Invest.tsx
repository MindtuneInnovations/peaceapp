
import React from "react";
import { ArrowLeft, Bell, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";

const Invest: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="flex justify-between items-center h-14 sticky z-10 bg-[#1A1A1A] px-4 py-3 border-b-[#333] border-b border-solid top-0">
        <div>
          <h1 className="text-white text-xl font-bold">Invest in ETFs</h1>
          <p className="text-gray-400 text-xs">Grow your earnings through smart investments</p>
        </div>
        <div>
          <Bell className="text-white" size={22} />
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-4 pt-4 pb-20 px-4">
        <div className="bg-[#1E1E2E] rounded-xl p-5">
          <h2 className="text-white text-xl font-bold mb-4 text-center">Total Investment Balance</h2>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Progress</span>
              <span className="text-gray-300">$0 of $100</span>
            </div>
            <div className="w-full h-2 bg-[#333333] rounded-full overflow-hidden">
              <div className="h-full bg-[#5DADEC] rounded-full" style={{ width: "0%" }}></div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <h2 className="text-white text-xl font-bold">Available ETFs</h2>
          <Link to="#" className="text-[#5DADEC]">See All</Link>
        </div>
        
        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[#E0E0E0] text-lg font-semibold">S&P 500 ETF</h3>
              <p className="text-gray-400 text-sm mt-1">SPY</p>
              <p className="text-gray-300 text-sm mt-3">Invest in the top 500 U.S. companies</p>
            </div>
            <TrendingUp className="text-[#5DADEC]" size={22} />
          </div>
          <button className="w-full bg-[#0084FF] text-white font-medium py-3 rounded-lg mt-4">
            Invest Now
          </button>
        </div>

        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[#E0E0E0] text-lg font-semibold">Vanguard Total Market</h3>
              <p className="text-gray-400 text-sm mt-1">VTI</p>
              <p className="text-gray-300 text-sm mt-3">Complete market coverage in one ETF</p>
            </div>
            <TrendingUp className="text-[#5DADEC]" size={22} />
          </div>
          <button className="w-full bg-[#0084FF] text-white font-medium py-3 rounded-lg mt-4">
            Invest Now
          </button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Invest;
