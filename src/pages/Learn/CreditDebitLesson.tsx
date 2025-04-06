
import React from "react";
import { ArrowLeft, Bell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";
import LessonContent from "@/components/learn/LessonContent";

const whyGetCreditCardLesson = {
  title: "Why Get a Credit Card Early?",
  description: "Understanding the benefits of early credit",
  content: (
    <div className="space-y-4">
      <p>Starting your credit journey early can set you up for financial success. Here's why:</p>
      
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Build Credit History</strong> - Lenders look at credit history length when determining rates</li>
        <li><strong>Develop Good Habits</strong> - Learn responsible credit management early</li>
        <li><strong>Emergency Access</strong> - Have a financial safety net when unexpected expenses arise</li>
        <li><strong>Better Financial Offers Later</strong> - Good credit history leads to better loan terms</li>
        <li><strong>Myth Buster:</strong> Credit cards aren't evil if used wisely</li>
      </ul>
    </div>
  ),
  quiz: [
    {
      question: "What's one reason to get a credit card early?",
      options: [
        { text: "To go on shopping sprees", isCorrect: false },
        { text: "To build a credit history", isCorrect: true },
        { text: "To take out loans", isCorrect: false },
        { text: "To avoid saving money", isCorrect: false }
      ]
    },
    {
      question: "What is a benefit of having good credit history?",
      options: [
        { text: "Higher interest rates", isCorrect: false },
        { text: "Better loan terms and lower rates", isCorrect: true },
        { text: "More credit card debt", isCorrect: false },
        { text: "Fewer financial options", isCorrect: false }
      ]
    },
    {
      question: "Why is it helpful to develop credit habits early?",
      options: [
        { text: "To maximize debt potential", isCorrect: false },
        { text: "To impress friends with purchases", isCorrect: false },
        { text: "To learn responsible credit management", isCorrect: true },
        { text: "To qualify for unlimited credit", isCorrect: false }
      ]
    }
  ]
};

const whenToUseLesson = {
  title: "When to Use Your Credit Card",
  description: "Making smart choices with credit",
  content: (
    <div className="space-y-4">
      <p>Credit cards provide benefits when used in specific situations:</p>
      
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Online Purchases</strong> - Better fraud protection than debit cards</li>
        <li><strong>Travel Expenses</strong> - Insurance benefits, rewards, and no foreign transaction fees (with some cards)</li>
        <li><strong>Large Purchases</strong> - When you need extended warranty protection</li>
        <li><strong>Subscription Services</strong> - For consistent monthly charges you can budget for</li>
        <li><strong>Emergency Expenses</strong> - When you have no other options (but have a repayment plan)</li>
      </ul>
    </div>
  ),
  quiz: [
    {
      question: "When is using a credit card better than a debit card for online shopping?",
      options: [
        { text: "It allows you to spend more than you have", isCorrect: false },
        { text: "It provides better fraud protection", isCorrect: true },
        { text: "It always offers free shipping", isCorrect: false },
        { text: "It prevents you from making impulsive purchases", isCorrect: false }
      ]
    },
    {
      question: "What benefit might a credit card provide for large purchases?",
      options: [
        { text: "It lets you buy things you can't afford", isCorrect: false },
        { text: "It automatically negotiates a lower price", isCorrect: false },
        { text: "It may provide extended warranty protection", isCorrect: true },
        { text: "It increases the value of your purchase", isCorrect: false }
      ]
    },
    {
      question: "When should you use a credit card for emergency expenses?",
      options: [
        { text: "Whenever you want something urgently", isCorrect: false },
        { text: "Only when you have no other options and have a repayment plan", isCorrect: true },
        { text: "For all emergencies, regardless of cost", isCorrect: false },
        { text: "Never, emergencies should only be paid with cash", isCorrect: false }
      ]
    }
  ]
};

const whenNotToUseLesson = {
  title: "When NOT to Use Your Credit Card",
  description: "Avoiding common credit pitfalls",
  content: (
    <div className="space-y-4">
      <p>Using credit cards in these situations can lead to financial trouble:</p>
      
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Impulse Purchases</strong> - If you didn't plan to buy it, use cash instead</li>
        <li><strong>To Impress Others</strong> - Never spend to show off</li>
        <li><strong>When You Can't Pay Off the Balance</strong> - High interest debt accumulates quickly</li>
        <li><strong>Cash Advances</strong> - Extremely high fees and interest rates begin immediately</li>
        <li><strong>Everyday Small Purchases</strong> - These can add up without you noticing</li>
      </ul>
    </div>
  ),
  quiz: [
    {
      question: "Why should you avoid using credit cards for impulse purchases?",
      options: [
        { text: "Credit cards don't work for small purchases", isCorrect: false },
        { text: "Impulse purchases are never worth buying", isCorrect: false },
        { text: "You might spend money you haven't budgeted", isCorrect: true },
        { text: "Credit cards are too slow for quick purchases", isCorrect: false }
      ]
    },
    {
      question: "What makes credit card cash advances problematic?",
      options: [
        { text: "They have extremely high fees and immediate interest", isCorrect: true },
        { text: "They take too long to process", isCorrect: false },
        { text: "They require a PIN number", isCorrect: false },
        { text: "They are limited to small amounts", isCorrect: false }
      ]
    },
    {
      question: "When should you absolutely avoid using a credit card?",
      options: [
        { text: "For all online purchases", isCorrect: false },
        { text: "When traveling internationally", isCorrect: false },
        { text: "When you can't pay off the balance", isCorrect: true },
        { text: "For subscription services", isCorrect: false }
      ]
    }
  ]
};

const lessons = [whyGetCreditCardLesson, whenToUseLesson, whenNotToUseLesson];

const CreditDebitLesson: React.FC = () => {
  const navigate = useNavigate();
  const [currentLessonIndex, setCurrentLessonIndex] = React.useState(0);
  const currentLesson = lessons[currentLessonIndex];

  const handleLessonComplete = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(prevIndex => prevIndex + 1);
      window.scrollTo(0, 0);
    } else {
      navigate("/learn"); // Return to learn page after completing all lessons
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="flex justify-between items-center h-14 sticky z-10 bg-[#1A1A1A] px-4 py-3 border-b-[#333] border-b border-solid top-0">
        <div className="flex items-center gap-3">
          <Link to="/learn">
            <ArrowLeft className="text-white" size={24} />
          </Link>
          <h1 className="text-white text-xl font-bold">Credit vs. Debit Card</h1>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="text-white" size={22} />
          <div className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8aad140727cccf10c0ec388a4eaced5913a8c71"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-4 pt-4 pb-20 px-4">
        <LessonContent 
          {...currentLesson}
          onComplete={handleLessonComplete}
          lessonNumber={currentLessonIndex + 1}
          totalLessons={lessons.length}
        />
      </main>
      <BottomNav />
    </div>
  );
};

export default CreditDebitLesson;
