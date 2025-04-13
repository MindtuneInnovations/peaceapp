
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreditCardEarlyLessonProps {
  onStartQuiz: () => void;
}

const CreditCardEarlyLesson: React.FC<CreditCardEarlyLessonProps> = ({ onStartQuiz }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-[#E0E0E0] text-xl font-bold">Why Get a Credit Card Early?</h2>
        <p className="text-[#999] text-sm mt-1">Understanding the benefits of early credit</p>
      </div>

      <div className="text-[#E0E0E0] text-base leading-relaxed">
        <p className="mb-4">Starting your credit journey early can set you up for financial success. Here's why:</p>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-[#5DADEC] mr-2">•</span>
            <div>
              <span className="font-semibold">Build Credit History</span> - Lenders look at credit history length when determining rates
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#5DADEC] mr-2">•</span>
            <div>
              <span className="font-semibold">Develop Good Habits</span> - Learn responsible credit management early
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#5DADEC] mr-2">•</span>
            <div>
              <span className="font-semibold">Emergency Access</span> - Have a financial safety net when unexpected expenses arise
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#5DADEC] mr-2">•</span>
            <div>
              <span className="font-semibold">Better Financial Offers Later</span> - Good credit history leads to better loan terms
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#5DADEC] mr-2">•</span>
            <div>
              <span className="font-semibold">Myth Buster:</span> Credit cards aren't evil if used wisely
            </div>
          </li>
        </ul>
      </div>
      
      <Button 
        className="w-full bg-[#5DADEC] mt-4"
        onClick={onStartQuiz}
      >
        Start Quiz
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default CreditCardEarlyLesson;
