
import React from "react";
import { ArrowLeft, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";

const Practice: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="flex justify-between items-center h-14 sticky z-10 bg-[#1A1A1A] px-4 py-3 border-b-[#333] border-b border-solid top-0">
        <div className="flex items-center gap-3">
          <Link to="/">
            <ArrowLeft className="text-white" size={24} />
          </Link>
          <h1 className="text-white text-xl font-bold">Practice</h1>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="text-white" size={22} />
          <div className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8aad140727cccf10c0ec388a4eaced5913a8c71"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-4 pt-4 pb-20 px-4">
        <div className="text-center p-6">
          <h2 className="text-white text-xl font-bold mb-2">Practice Coming Soon!</h2>
          <p className="text-gray-400">Check back later for financial practice exercises</p>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Practice;
