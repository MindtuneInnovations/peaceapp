
import React from "react";

interface QuizFeedbackProps {
  isCorrect: boolean;
}

const QuizFeedback: React.FC<QuizFeedbackProps> = ({ isCorrect }) => {
  return (
    <div className={`mb-4 p-4 rounded-lg ${
      isCorrect ? "bg-[#0c392d]" : "bg-[#3a1c1c]"
    }`}>
      <p className="text-[#E0E0E0] text-sm">
        {isCorrect 
          ? "🎉 Correct! Great job understanding this concept."
          : "Not quite right. Let's review this concept again."}
      </p>
    </div>
  );
};

export default QuizFeedback;
