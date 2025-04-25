
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CreditSwipeGame from "../games/CreditSwipeGame";

interface CreditCardEarlyLessonProps {
  onStartQuiz: () => void;
}

const CreditCardEarlyLesson: React.FC<CreditCardEarlyLessonProps> = ({ onStartQuiz }) => {
  const [showGame, setShowGame] = useState(false);

  if (showGame) {
    return <CreditSwipeGame onComplete={onStartQuiz} />;
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-[#E0E0E0] text-xl font-bold">Credit Quest – Level 1: The Early Card Advantage</h2>
        <p className="text-[#999] text-sm mt-1">Understanding the benefits of early credit</p>
      </div>

      <div className="text-[#E0E0E0] text-base leading-relaxed">
        <p className="mb-4">Ready to start your credit journey? Let's play a game to learn about the benefits of getting started early!</p>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-[#5DADEC] mr-2">•</span>
            <div>
              <span className="font-semibold">How to Play:</span>
              <ul className="mt-2 space-y-2">
                <li>• Swipe RIGHT for facts ✅</li>
                <li>• Swipe LEFT for fiction ❌</li>
                <li>• Learn from each answer</li>
                <li>• Complete all cards to win!</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      
      <Button 
        className="w-full bg-[#5DADEC] mt-4"
        onClick={() => setShowGame(true)}
      >
        Start Game
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default CreditCardEarlyLesson;
