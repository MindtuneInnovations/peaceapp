
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreditCardUseLessonProps {
  onStartQuiz: () => void;
}

const CreditCardUseLesson: React.FC<CreditCardUseLessonProps> = ({ onStartQuiz }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-[#E0E0E0] text-xl font-bold">When to Use Your Credit Card</h2>
        <p className="text-[#999] text-sm mt-1">Making smart choices with credit</p>
      </div>

      <div className="text-[#E0E0E0] text-base leading-relaxed">
        <p className="mb-4">Credit cards provide benefits when used in specific situations:</p>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-[#5DADEC] mr-2">•</span>
            <div>
              <span className="font-semibold">When You Can Pay in Full</span> - Only use credit when you can pay the full balance by due date
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#5DADEC] mr-2">•</span>
            <div>
              <span className="font-semibold">For Fraud Protection</span> - Credit cards offer better protection than debit for online purchases
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#5DADEC] mr-2">•</span>
            <div>
              <span className="font-semibold">To Earn Rewards</span> - Get cashback, points, or miles on everyday purchases
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#5DADEC] mr-2">•</span>
            <div>
              <span className="font-semibold">For Recurring Subscriptions</span> - Set it and forget it for regular bills you've budgeted for
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#5DADEC] mr-2">•</span>
            <div>
              <span className="font-semibold">To Build Credit Responsibly</span> - Regular small purchases paid off monthly improve your score
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

export default CreditCardUseLesson;
