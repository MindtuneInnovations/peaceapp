import React, { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { playCorrectSound, playIncorrectSound, vibrate } from "@/utils/soundEffects";

interface QuizOption {
  text: string;
  isCorrect: boolean;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

interface LessonContentProps {
  title: string;
  description: string;
  content: React.ReactNode;
  quiz: QuizQuestion[];
  onComplete: () => void;
  lessonNumber: number;
  totalLessons: number;
}

const LessonContent: React.FC<LessonContentProps> = ({
  title,
  description,
  content,
  quiz,
  onComplete,
  lessonNumber,
  totalLessons
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showLesson, setShowLesson] = useState(content !== null);

  const currentQuestion = quiz[currentQuestionIndex];

  const handleOptionSelect = (optionText: string) => {
    if (!showFeedback) {
      setSelectedOption(optionText);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption) return;

    const isAnswerCorrect = currentQuestion.options.find(
      opt => opt.text === selectedOption
    )?.isCorrect || false;

    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);

    if (isAnswerCorrect) {
      setScore(prevScore => prevScore + 1);
      playCorrectSound();
      vibrate();
    } else {
      playIncorrectSound();
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const startQuiz = () => {
    setShowLesson(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[#E0E0E0] text-xl font-bold">{title}</h2>
          <p className="text-[#999] text-sm mt-1">{description}</p>
        </div>
        <div className="bg-[#232323] px-3 py-1 rounded-full">
          <span className="text-[#5DADEC] text-sm font-medium">{lessonNumber}/{totalLessons}</span>
        </div>
      </div>

      {showLesson && content ? (
        <>
          <div className="text-[#E0E0E0] text-base leading-relaxed mt-2">
            {content}
          </div>
          
          <Button 
            className="w-full bg-[#5DADEC]"
            onClick={startQuiz}
          >
            Start Quiz
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </>
      ) : quizCompleted ? (
        <div className="mt-4 text-center">
          <div className="w-16 h-16 bg-[#5DADEC] rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="text-white h-8 w-8" />
          </div>
          <h3 className="text-[#E0E0E0] text-xl font-bold">Quiz Complete!</h3>
          <p className="text-[#999] text-base mt-2">
            You scored {score}/{quiz.length} on the quiz
          </p>
          
          <Button 
            className="w-full mt-6 bg-[#5DADEC]"
            onClick={onComplete}
          >
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="mt-2">
          <div className="mb-4">
            <h3 className="text-[#E0E0E0] text-lg font-semibold mb-4">
              Question {currentQuestionIndex + 1} of {quiz.length}
            </h3>
            <p className="text-[#E0E0E0] text-base mb-6">{currentQuestion.question}</p>
            
            <RadioGroup
              value={selectedOption || ""}
              className="space-y-3"
              disabled={showFeedback}
            >
              {currentQuestion.options.map((option, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-2 p-3 rounded-lg border border-[#444] ${
                    selectedOption === option.text
                      ? showFeedback
                        ? option.isCorrect
                          ? "bg-[#0c392d] border-[#00C48C]"
                          : "bg-[#3a1c1c] border-[#FF5E3A]"
                        : "bg-[#333]"
                      : "hover:bg-[#333]"
                  }`}
                  onClick={() => handleOptionSelect(option.text)}
                >
                  <RadioGroupItem
                    value={option.text}
                    id={`option-${index}`}
                    className="text-[#5DADEC]"
                  />
                  <label
                    htmlFor={`option-${index}`}
                    className="text-[#E0E0E0] text-sm font-medium flex-grow cursor-pointer"
                  >
                    {option.text}
                  </label>
                  {showFeedback && selectedOption === option.text && (
                    option.isCorrect ? (
                      <Check className="h-5 w-5 text-[#00C48C]" />
                    ) : (
                      <X className="h-5 w-5 text-[#FF5E3A]" />
                    )
                  )}
                </div>
              ))}
            </RadioGroup>
          </div>

          {showFeedback ? (
            <div className={`mb-4 p-4 rounded-lg ${
              isCorrect ? "bg-[#0c392d]" : "bg-[#3a1c1c]"
            }`}>
              <p className="text-[#E0E0E0] text-sm">
                {isCorrect 
                  ? "🎉 Correct! Great job understanding this concept."
                  : "Not quite right. Let's review this concept again."}
              </p>
            </div>
          ) : (
            <Button 
              className="w-full bg-[#5DADEC] mb-4"
              onClick={handleSubmitAnswer}
              disabled={!selectedOption}
            >
              Submit Answer
            </Button>
          )}

          {showFeedback && (
            <Button 
              className="w-full bg-[#5DADEC]" 
              onClick={handleNextQuestion}
            >
              {currentQuestionIndex < quiz.length - 1 ? "Next Question" : "See Results"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default LessonContent;
