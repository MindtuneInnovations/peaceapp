
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import LessonContent from "@/components/learn/LessonContent";
import CreditCardEarlyLesson from "@/components/learn/lessons/CreditCardEarlyLesson";
import CreditCardUseLesson from "@/components/learn/lessons/CreditCardUseLesson";
import CreditCardAvoidLesson from "@/components/learn/lessons/CreditCardAvoidLesson";
import { earlyCardQuiz, cardUseQuiz, cardAvoidQuiz } from "@/components/learn/lessons/creditCardQuizData";

const CreditDebitLesson: React.FC = () => {
  const [currentLesson, setCurrentLesson] = useState<number>(1);
  const [showingQuiz, setShowingQuiz] = useState<boolean>(false);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  
  const handleStartQuiz = () => {
    setShowingQuiz(true);
  };
  
  const handleQuizComplete = (score: number) => {
    setTotalScore(prev => prev + score);
    setCompletedLessons(prev => [...prev, currentLesson]);
    
    // If we're on the last lesson, don't advance
    if (currentLesson < 3) {
      setCurrentLesson(prev => prev + 1);
      setShowingQuiz(false);
    } else {
      // Show completion state
      setShowingQuiz(false);
    }
  };
  
  const navigateToLesson = (lessonNumber: number) => {
    setCurrentLesson(lessonNumber);
    setShowingQuiz(false);
  };
  
  const getCurrentLessonData = () => {
    switch (currentLesson) {
      case 1:
        return {
          title: "Why Get a Credit Card Early?",
          description: "Understanding the benefits of early credit",
          lessonNumber: 1,
          totalLessons: 3,
          quiz: earlyCardQuiz,
          content: <CreditCardEarlyLesson onStartQuiz={handleStartQuiz} />
        };
      case 2:
        return {
          title: "When to Use Your Credit Card",
          description: "Making smart choices with credit",
          lessonNumber: 2,
          totalLessons: 3,
          quiz: cardUseQuiz,
          content: <CreditCardUseLesson onStartQuiz={handleStartQuiz} />
        };
      case 3:
        return {
          title: "When NOT to Use Your Credit Card",
          description: "Avoiding common credit pitfalls",
          lessonNumber: 3,
          totalLessons: 3,
          quiz: cardAvoidQuiz,
          content: <CreditCardAvoidLesson onStartQuiz={handleStartQuiz} />
        };
      default:
        return {
          title: "Why Get a Credit Card Early?",
          description: "Understanding the benefits of early credit",
          lessonNumber: 1,
          totalLessons: 3,
          quiz: earlyCardQuiz,
          content: <CreditCardEarlyLesson onStartQuiz={handleStartQuiz} />
        };
    }
  };
  
  const lessonData = getCurrentLessonData();
  
  const allLessonsCompleted = completedLessons.length === 3;

  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="flex justify-between items-center h-14 sticky z-10 bg-[#1A1A1A] px-4 py-3 border-b-[#333] border-b border-solid top-0">
        <div className="flex items-center gap-3">
          <Link to="/learn">
            <ArrowLeft className="text-white" size={24} />
          </Link>
          <h1 className="text-white text-xl font-bold">Credit vs. Debit Card</h1>
        </div>
      </header>
      
      <div className="p-4">
        {/* Navigation pills */}
        {!allLessonsCompleted && (
          <div className="flex space-x-2 mb-4">
            <button 
              className={`px-3 py-1 rounded-full text-sm ${currentLesson === 1 ? 'bg-[#5DADEC] text-white' : 'bg-[#333] text-[#999]'}`}
              onClick={() => navigateToLesson(1)}
            >
              Lesson 1
            </button>
            <button 
              className={`px-3 py-1 rounded-full text-sm ${currentLesson === 2 ? 'bg-[#5DADEC] text-white' : 'bg-[#333] text-[#999]'}`}
              onClick={() => navigateToLesson(2)}
              disabled={!completedLessons.includes(1) && currentLesson !== 2}
            >
              Lesson 2
            </button>
            <button 
              className={`px-3 py-1 rounded-full text-sm ${currentLesson === 3 ? 'bg-[#5DADEC] text-white' : 'bg-[#333] text-[#999]'}`}
              onClick={() => navigateToLesson(3)}
              disabled={!completedLessons.includes(2) && currentLesson !== 3}
            >
              Lesson 3
            </button>
          </div>
        )}
        
        {allLessonsCompleted ? (
          <div className="mt-8 text-center">
            <div className="w-20 h-20 bg-[#5DADEC] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 6L9 18L3 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-[#E0E0E0] text-2xl font-bold mb-2">Congratulations!</h2>
            <p className="text-[#999] text-lg mb-4">
              You've completed all lessons and scored {totalScore}/9 on the quizzes.
            </p>
            
            <div className="mt-6 bg-[#232323] p-4 rounded-xl">
              <p className="text-[#E0E0E0] text-md">
                Achievement Unlocked: Credit Card Beginner ✅
              </p>
            </div>
            
            <Link to="/learn">
              <button className="w-full mt-8 bg-[#5DADEC] text-white font-medium py-3 rounded-lg">
                Back to Learning
              </button>
            </Link>
          </div>
        ) : showingQuiz ? (
          <LessonContent 
            title={lessonData.title}
            description={lessonData.description}
            content={null}
            quiz={lessonData.quiz}
            onComplete={() => handleQuizComplete(lessonData.quiz.length)}
            lessonNumber={lessonData.lessonNumber}
            totalLessons={lessonData.totalLessons}
          />
        ) : (
          lessonData.content
        )}
      </div>
    </div>
  );
};

export default CreditDebitLesson;
