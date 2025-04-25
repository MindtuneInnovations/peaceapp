
import React, { useState } from "react";
import { DndContext, DragEndEvent, useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { playCorrectSound, playIncorrectSound, vibrate } from "@/utils/soundEffects";
import { toast } from "sonner";

interface CardData {
  statement: string;
  isFactual: boolean;
  explanation: string;
}

const cards: CardData[] = [
  {
    statement: "Starting young helps build your credit history, which lenders love.",
    isFactual: true,
    explanation: "Correct! Lenders value longer credit history for better rates."
  },
  {
    statement: "You don't learn money habits with credit cards.",
    isFactual: false,
    explanation: "Oops! Fiction. Early use teaches responsible credit management."
  },
  {
    statement: "Credit cards are useless in emergencies.",
    isFactual: false,
    explanation: "Not quite! Fiction. They're a great backup when surprise expenses hit."
  },
  {
    statement: "A good credit history = better loan terms later on.",
    isFactual: true,
    explanation: "You got it! Better credit = better financial offers!"
  },
  {
    statement: "Credit cards are evil.",
    isFactual: false,
    explanation: "Wrong answer! Fiction. When used wisely, they're powerful tools."
  }
];

interface CreditSwipeGameProps {
  onComplete: () => void;
}

const CreditSwipeGame: React.FC<CreditSwipeGameProps> = ({ onComplete }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  
  const handleDragEnd = (event: DragEndEvent) => {
    const { delta } = event;
    
    // Check if the drag movement was significant enough to be a swipe
    if (Math.abs(delta.x) > 100) {
      const isSwipedRight = delta.x > 0;
      const currentCard = cards[currentCardIndex];
      const isCorrect = (isSwipedRight && currentCard.isFactual) || 
                       (!isSwipedRight && !currentCard.isFactual);

      setSwipeDirection(isSwipedRight ? 'right' : 'left');
      
      if (isCorrect) {
        setScore(prev => prev + 1);
        playCorrectSound();
        vibrate();
        toast.success("Correct! 🎉");
      } else {
        playIncorrectSound();
        toast.error("Try again! 💡");
      }
      
      setTimeout(() => {
        setSwipeDirection(null);
        setShowExplanation(true);
      }, 300);
    }
  };

  const handleNextCard = () => {
    setShowExplanation(false);
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center animate-fade-in">
        <div className="w-20 h-20 bg-[#5DADEC] rounded-full flex items-center justify-center mb-6">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 6L9 18L3 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-[#E0E0E0] text-2xl font-bold mb-4">
          🔥 Level Complete!
        </h2>
        <p className="text-[#999] text-lg mb-6">
          You've earned the Credit Starter Trophy 🏆<br />
          Score: {score}/{cards.length}
        </p>
        <Button 
          className="w-full bg-[#5DADEC] mt-4"
          onClick={onComplete}
        >
          Next Level
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
  }

  const currentCard = cards[currentCardIndex];
  
  const DroppableCard = () => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
      id: "card",
    });

    const style = transform ? {
      transform: `translateX(${transform.x}px) rotate(${transform.x * 0.05}deg)`,
      transition: transform.x ? undefined : 'transform 0.3s ease'
    } : undefined;

    return (
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="w-full max-w-md bg-[#1E1E2E] p-6 rounded-xl shadow-lg cursor-grab active:cursor-grabbing"
        style={style}
      >
        <div className="text-center">
          <p className="text-[#E0E0E0] text-lg font-medium">
            {currentCard.statement}
          </p>
        </div>
        <div className="mt-4 flex justify-between text-sm">
          <div className="text-red-400">← Fiction</div>
          <div className="text-green-400">Fact →</div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="mb-6">
        <h2 className="text-[#E0E0E0] text-xl font-bold mb-2">
          Credit Quest – Level 1: The Early Card Advantage
        </h2>
        <p className="text-[#999] text-sm">
          Swipe right for ✅ Fact, left for ❌ Fiction
        </p>
      </div>

      {!showExplanation ? (
        <DndContext onDragEnd={handleDragEnd}>
          <DroppableCard />
        </DndContext>
      ) : (
        <div className="w-full max-w-md">
          <div className="bg-[#1E1E2E] p-6 rounded-xl mb-4">
            <p className="text-[#E0E0E0] text-lg mb-4">
              {currentCard.explanation}
            </p>
          </div>
          <Button 
            className="w-full bg-[#5DADEC]"
            onClick={handleNextCard}
          >
            {currentCardIndex < cards.length - 1 ? "Next Card" : "See Results"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}

      <div className="mt-6 flex justify-between w-full max-w-md">
        <div className="text-[#999]">Card {currentCardIndex + 1}/{cards.length}</div>
        <div className="text-[#5DADEC]">Score: {score}</div>
      </div>
    </div>
  );
};

export default CreditSwipeGame;
