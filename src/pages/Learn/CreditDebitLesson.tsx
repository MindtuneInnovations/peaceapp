
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import LessonContent from "@/components/learn/LessonContent";

const CreditDebitLesson: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="flex justify-between items-center h-14 sticky z-10 bg-[#1A1A1A] px-4 py-3 border-b-[#333] border-b border-solid top-0">
        <div className="flex items-center gap-3">
          <Link to="/learn">
            <ArrowLeft className="text-white" size={24} />
          </Link>
          <h1 className="text-white text-xl font-bold">Credit vs Debit Cards</h1>
        </div>
      </header>
      
      <LessonContent />
    </div>
  );
};

export default CreditDebitLesson;
