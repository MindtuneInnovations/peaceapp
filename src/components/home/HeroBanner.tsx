import React from "react";

const HeroBanner: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 px-4 py-6 max-sm:p-4">
      <div className="text-center">
        <h1 className="text-[#E0E0E0] text-2xl font-bold mb-3">
          Master Your Finances
        </h1>
        <p className="text-[#B3B3B3] text-sm font-normal mb-6">
          Learn financial literacy designed for STEM students
        </p>
        <button
          className="w-full h-12 text-white text-base font-semibold shadow-[0px_4px_6px_rgba(93,173,236,0.20),0px_10px_15px_rgba(93,173,236,0.20)] rounded-xl border-[none] bg-[#5DADEC] hover:bg-[#4A9AD9] transition-colors"
          onClick={() => console.log("Get Started clicked")}
        >
          Get Started
        </button>
      </div>
      <div className="w-full h-40 overflow-hidden rounded-2xl">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8aad140727cccf10c0ec388a4eaced5913a8c71"
          alt="Students learning"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
