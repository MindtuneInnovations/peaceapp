
import React, { useState } from 'react';
import { DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { playCorrectSound, playIncorrectSound, vibrate } from "@/utils/soundEffects";
import confetti from 'canvas-confetti';
import { level1Cards, level2Cards } from './quizData';

interface Props {
  onComplete: () => void;
  level?: number;
}

const InvestingSwipeGame: React.FC<Props> = ({ onComplete, level = 1 }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const cards = level === 1 ? level1Cards : level2Cards;
  const currentCard = cards[currentCardIndex];
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleAnswer = (isFact: boolean) => {
    if (showExplanation) return;
    
    const isAnswerCorrect = isFact === currentCard.isFact;
    setIsCorrect(isAnswerCorrect);
    setShowExplanation(true);

    if (isAnswerCorrect) {
      setScore(score + 1);
      playCorrectSound();
      vibrate();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      playIncorrectSound();
    }

    setTimeout(() => {
      setShowExplanation(false);
      setIsCorrect(null);
      
      if (currentCardIndex < cards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      } else {
        setGameCompleted(true);
      }
    }, 2000);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { delta } = event;
    if (Math.abs(delta.x) < 100) return;

    handleAnswer(delta.x > 0);
  };

  if (gameCompleted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 text-center p-4">
        <div className="w-20 h-20 bg-[#7C5CFF] rounded-full flex items-center justify-center">
          <Badge className="h-12 w-12 text-white" />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-[#E0E0E0] mb-2">
            {level === 1 ? "🔥 Level 1 Complete!" : "🏆 Level 1 Complete!"}
          </h2>
          <p className="text-[#999] mb-4">
            {level === 1 
              ? "You've earned the Investment Explorer Badge 🏅"
              : "You've earned the 'ETF Explorer' badge"}
          </p>
          <p className="text-[#E0E0E0]">
            Score: {score}/{cards.length}
          </p>
        </div>

        <Button 
          onClick={onComplete}
          className="w-full bg-[#7C5CFF] text-white"
        >
          {level === 1 ? "Ready for Level 2: Stocks & Bonds" : "Continue Learning"}
        </Button>
      </div>
    );
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="text-center mb-4">
          <p className="text-[#999] text-sm">
            Swipe right for ✅ Fact, left for ❌ Fiction
          </p>
          <p className="text-[#E0E0E0] text-sm mt-1">
            Card {currentCardIndex + 1} of {cards.length}
          </p>
        </div>

        <div 
          className="touch-none select-none cursor-grab active:cursor-grabbing bg-[#1E1E2E] p-6 rounded-xl w-full max-w-md border border-[#333] shadow-lg transform transition-transform duration-200"
          style={{ touchAction: 'none' }}
        >
          <p className="text-[#E0E0E0] text-lg font-medium text-center">
            {currentCard.statement}
          </p>
        </div>

        {showExplanation && (
          <div className={`mt-4 p-4 rounded-lg text-center ${
            isCorrect ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
          }`}>
            <p className="text-lg mb-2">
              {isCorrect ? <Check className="inline mr-2" /> : <X className="inline mr-2" />}
              {isCorrect ? "Correct!" : "Not quite!"}
            </p>
            <p className="text-sm">{currentCard.explanation}</p>
          </div>
        )}

        <div className="flex justify-between w-full max-w-md mt-4">
          <Button
            variant="ghost"
            className="flex flex-col items-center text-red-500 hover:text-red-400 hover:bg-red-500/10"
            onClick={() => handleAnswer(false)}
            disabled={showExplanation}
          >
            <X size={24} />
            Fiction
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center text-green-500 hover:text-green-400 hover:bg-green-500/10"
            onClick={() => handleAnswer(true)}
            disabled={showExplanation}
          >
            <Check size={24} />
            Fact
          </Button>
        </div>
      </div>
    </DndContext>
  );
};

export default InvestingSwipeGame;
