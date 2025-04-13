
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SmartInvestingIntroLessonProps {
  onStartQuiz: () => void;
}

const SmartInvestingIntroLesson: React.FC<SmartInvestingIntroLessonProps> = ({ onStartQuiz }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-[#E0E0E0] text-base leading-relaxed">
        <p className="mb-4">After watching the introduction video, let's explore the fundamentals of smart investing:</p>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-[#7C5CFF] mr-2">•</span>
            <div>
              <span className="font-semibold">Start Early</span> - Time in the market beats timing the market
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#7C5CFF] mr-2">•</span>
            <div>
              <span className="font-semibold">Diversification</span> - Don't put all your eggs in one basket
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#7C5CFF] mr-2">•</span>
            <div>
              <span className="font-semibold">Risk vs. Return</span> - Higher potential returns come with higher risk
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#7C5CFF] mr-2">•</span>
            <div>
              <span className="font-semibold">Dollar-Cost Averaging</span> - Invest regularly regardless of market conditions
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#7C5CFF] mr-2">•</span>
            <div>
              <span className="font-semibold">Long-term Mindset</span> - Investing is a marathon, not a sprint
            </div>
          </li>
        </ul>
      </div>
      
      <Button 
        className="w-full bg-[#7C5CFF] mt-4"
        onClick={onStartQuiz}
      >
        Start Quiz
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default SmartInvestingIntroLesson;
