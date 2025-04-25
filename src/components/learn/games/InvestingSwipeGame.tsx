
import React, { useState } from 'react';
import { DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { playCorrectSound, playIncorrectSound, vibrate } from "@/utils/soundEffects";
import confetti from 'canvas-confetti';

interface InvestingCard {
  statement: string;
  isCorrect: boolean;
  explanation: string;
  isFact: boolean;
}

const investingCards: InvestingCard[] = [
  {
    statement: "Investing is the same as saving money in a piggy bank.",
    isCorrect: false,
    explanation: "Nope! Investing is putting money into things like stocks or bonds to grow it—not just storing it.",
    isFact: false
  },
  {
    statement: "The earlier you start investing, the more money you can make.",
    isCorrect: true,
    explanation: "Correct! Time lets your money grow thanks to compounding.",
    isFact: true
  },
  {
    statement: "Investing always guarantees profits.",
    isCorrect: false,
    explanation: "Nope! There's always a chance of losing money—that's risk.",
    isFact: false
  },
  {
    statement: "Diversifying your investments helps reduce risk.",
    isCorrect: true,
    explanation: "Yes! Spreading your money out keeps you safer if one thing drops.",
    isFact: true
  },
  {
    statement: "You need to be rich to start investing.",
    isCorrect: false,
    explanation: "Wrong! You can start investing with just a few dollars now.",
    isFact: false
  }
];

interface Props {
  onComplete: () => void;
}

const InvestingSwipeGame: React.FC<Props> = ({ onComplete }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // Small distance to differentiate between click and drag
      },
    })
  );

  const handleAnswer = (isFact: boolean) => {
    const currentCard = investingCards[currentCardIndex];
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
      
      if (currentCardIndex < investingCards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      } else {
        setGameCompleted(true);
      }
    }, 2000);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { delta } = event;
    if (Math.abs(delta.x) < 100) return; // Minimum swipe distance

    const swipedRight = delta.x > 0;
    handleAnswer(swipedRight);
  };

  const handleClick = (isFact: boolean) => {
    if (!showExplanation) {
      handleAnswer(isFact);
    }
  };

  if (gameCompleted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 text-center p-4">
        <div className="w-20 h-20 bg-[#7C5CFF] rounded-full flex items-center justify-center">
          <Badge className="h-12 w-12 text-white" />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-[#E0E0E0] mb-2">
            🔥 Level 1 Complete!
          </h2>
          <p className="text-[#999] mb-4">
            You've earned the Investment Explorer Badge 🏅
          </p>
          <p className="text-[#E0E0E0]">
            Score: {score}/{investingCards.length}
          </p>
        </div>

        <Button 
          onClick={onComplete}
          className="w-full bg-[#7C5CFF] text-white"
        >
          Ready for Level 2: Stocks & Bonds
        </Button>
      </div>
    );
  }

  const currentCard = investingCards[currentCardIndex];

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="text-center mb-4">
          <p className="text-[#999] text-sm">
            Swipe right for ✅ Fact, left for ❌ Fiction
          </p>
          <p className="text-[#E0E0E0] text-sm mt-1">
            Card {currentCardIndex + 1} of {investingCards.length}
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
            onClick={() => handleClick(false)}
            disabled={showExplanation}
          >
            <X size={24} />
            Fiction
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center text-green-500 hover:text-green-400 hover:bg-green-500/10"
            onClick={() => handleClick(true)}
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
