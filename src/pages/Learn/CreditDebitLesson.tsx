
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import LessonContent from "@/components/learn/LessonContent";

const CreditDebitLesson: React.FC = () => {
  // Sample content for the lesson
  const lessonData = {
    title: "Credit vs Debit Cards",
    description: "Understanding the key differences and when to use each",
    lessonNumber: 1,
    totalLessons: 5,
    content: (
      <>
        <h3 className="text-lg font-semibold mb-3">What's the Difference?</h3>
        <p className="mb-4">
          A <strong>debit card</strong> takes money directly from your bank account when you make a purchase. It's like paying with cash, but more convenient.
        </p>
        <p className="mb-4">
          A <strong>credit card</strong> lets you borrow money up to a certain limit. You're borrowing from the card issuer with the promise to pay it back later, often with interest if you don't pay the full amount.
        </p>
        
        <h3 className="text-lg font-semibold mb-3 mt-5">When to Use Each</h3>
        <ul className="list-disc pl-5 mb-4">
          <li className="mb-2">Use <strong>debit cards</strong> for everyday expenses and to avoid debt.</li>
          <li className="mb-2">Use <strong>credit cards</strong> to build credit history, earn rewards, and for added purchase protection.</li>
        </ul>
        
        <h3 className="text-lg font-semibold mb-3 mt-5">Watch Out For</h3>
        <p className="mb-2">
          Credit cards: High interest rates, annual fees, and the temptation to spend more than you can afford to pay back.
        </p>
        <p>
          Debit cards: Fewer purchase protections and potential overdraft fees if you spend more than your balance.
        </p>
      </>
    ),
    quiz: [
      {
        question: "What is the main difference between a debit and credit card?",
        options: [
          { text: "Debit cards have higher fees", isCorrect: false },
          { text: "Credit cards always have better rewards", isCorrect: false },
          { text: "Debit cards use money from your bank account", isCorrect: true },
          { text: "Credit cards can only be used online", isCorrect: false }
        ]
      },
      {
        question: "When is it better to use a credit card?",
        options: [
          { text: "For all purchases, all the time", isCorrect: false },
          { text: "For building credit history and purchase protection", isCorrect: true },
          { text: "Only for emergency purchases", isCorrect: false },
          { text: "Only when you've run out of cash", isCorrect: false }
        ]
      },
      {
        question: "What should you watch out for with credit cards?",
        options: [
          { text: "High interest rates if you don't pay in full", isCorrect: true },
          { text: "They expire too quickly", isCorrect: false },
          { text: "Limited acceptance at stores", isCorrect: false },
          { text: "They're too heavy to carry", isCorrect: false }
        ]
      }
    ],
    onComplete: () => {
      // Navigate back to learn page 
      window.location.href = "/learn";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="flex justify-between items-center h-14 sticky z-10 bg-[#1A1A1A] px-4 py-3 border-b-[#333] border-b border-solid top-0">
        <div className="flex items-center gap-3">
          <Link to="/learn">
            <ArrowLeft className="text-white" size={24} />
          </Link>
          <h1 className="text-white text-xl font-bold">Credit vs Debit Cards</h1>
        </div>
      </header>
      
      <div className="p-4">
        <LessonContent 
          title={lessonData.title}
          description={lessonData.description}
          content={lessonData.content}
          quiz={lessonData.quiz}
          onComplete={lessonData.onComplete}
          lessonNumber={lessonData.lessonNumber}
          totalLessons={lessonData.totalLessons}
        />
      </div>
    </div>
  );
};

export default CreditDebitLesson;
