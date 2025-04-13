
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreditCardAvoidLessonProps {
  onStartQuiz: () => void;
}

const CreditCardAvoidLesson: React.FC<CreditCardAvoidLessonProps> = ({ onStartQuiz }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-[#E0E0E0] text-xl font-bold">When NOT to Use Your Credit Card</h2>
        <p className="text-[#999] text-sm mt-1">Avoiding common credit pitfalls</p>
      </div>

      <div className="text-[#E0E0E0] text-base leading-relaxed">
        <p className="mb-4">Be cautious about using credit cards in these situations:</p>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-[#FF5E3A] mr-2">•</span>
            <div>
              <span className="font-semibold">For Impulse Purchases</span> - Don't buy things you haven't planned for or don't need
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF5E3A] mr-2">•</span>
            <div>
              <span className="font-semibold">When You Can't Pay in Full</span> - Avoid carrying a balance if possible due to high interest
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF5E3A] mr-2">•</span>
            <div>
              <span className="font-semibold">For Cash Advances</span> - These often come with high fees and immediate interest charges
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF5E3A] mr-2">•</span>
            <div>
              <span className="font-semibold">To Pay Off Other Debts</span> - Unless it's a deliberate balance transfer strategy
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF5E3A] mr-2">•</span>
            <div>
              <span className="font-semibold">For Regular ATM Withdrawals</span> - High fees make this an expensive way to get cash
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

export default CreditCardAvoidLesson;
