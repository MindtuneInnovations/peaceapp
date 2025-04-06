import React from "react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturesGrid from "@/components/home/FeaturesGrid";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <Header />
      <main className="flex-1 flex flex-col gap-6 pt-16 pb-20 px-0">
        <HeroBanner />
        <FeaturesGrid />
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;
