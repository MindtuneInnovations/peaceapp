
import React from "react";
import { Check, X } from "lucide-react";
import { RadioGroupItem } from "@/components/ui/radio-group";

interface QuizOptionProps {
  text: string;
  index: number;
  isSelected: boolean;
  isCorrect?: boolean;
  showFeedback: boolean;
  disabled: boolean;
  onSelect: (text: string) => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  text,
  index,
  isSelected,
  isCorrect,
  showFeedback,
  disabled,
  onSelect,
}) => {
  return (
    <div 
      className={`flex items-center space-x-2 p-3 rounded-lg border border-[#444] ${
        isSelected
          ? showFeedback
            ? isCorrect
              ? "bg-[#0c392d] border-[#00C48C]"
              : "bg-[#3a1c1c] border-[#FF5E3A]"
            : "bg-[#333]"
          : "hover:bg-[#333]"
      }`}
      onClick={() => !disabled && onSelect(text)}
    >
      <RadioGroupItem
        value={text}
        id={`option-${index}`}
        className="text-[#5DADEC]"
      />
      <label
        htmlFor={`option-${index}`}
        className="text-[#E0E0E0] text-sm font-medium flex-grow cursor-pointer"
      >
        {text}
      </label>
      {showFeedback && isSelected && (
        isCorrect ? (
          <Check className="h-5 w-5 text-[#00C48C]" />
        ) : (
          <X className="h-5 w-5 text-[#FF5E3A]" />
        )
      )}
    </div>
  );
};

export default QuizOption;
