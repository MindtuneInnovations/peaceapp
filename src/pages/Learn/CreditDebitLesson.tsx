
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
      question: "Which of the following is true?",
      options: [
        { text: "Using credit cards ruins your score", isCorrect: false },
        { text: "You can only build credit by borrowing money", isCorrect: false },
        { text: "Credit history improves by paying off the full balance on time", isCorrect: true },
        { text: "Credit cards are for emergencies only", isCorrect: false }
      ]
    },
    {
      question: "What happens when you don't pay your credit card on time?",
      options: [
        { text: "You get rewards", isCorrect: false },
        { text: "Your credit score increases", isCorrect: false },
        { text: "You avoid interest", isCorrect: false },
        { text: "You may pay interest and hurt your credit score", isCorrect: true }
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
        <li><strong>When You Can Pay in Full</strong> - Only use credit when you can pay the full balance by due date</li>
        <li><strong>For Fraud Protection</strong> - Credit cards offer better protection than debit for online purchases</li>
        <li><strong>To Earn Rewards</strong> - Get cashback, points, or miles on everyday purchases</li>
        <li><strong>For Recurring Subscriptions</strong> - Set it and forget it for regular bills you've budgeted for</li>
        <li><strong>To Build Credit Responsibly</strong> - Regular small purchases paid off monthly improve your score</li>
      </ul>
    </div>
  ),
  quiz: [
    {
      question: "Which is a good reason to use a credit card?",
      options: [
        { text: "You can't afford something", isCorrect: false },
        { text: "You want cashback or fraud protection", isCorrect: true },
        { text: "You want to avoid budgeting", isCorrect: false },
        { text: "You don't have a debit card", isCorrect: false }
      ]
    },
    {
      question: "Which of these should go on a credit card?",
      options: [
        { text: "Late rent you can't cover", isCorrect: false },
        { text: "Designer shoes you can't afford", isCorrect: false },
        { text: "Monthly Netflix subscription you budgeted for", isCorrect: true },
        { text: "Cash withdrawal at ATM", isCorrect: false }
      ]
    },
    {
      question: "What's the best way to ensure you don't forget a payment?",
      options: [
        { text: "Don't worry about it", isCorrect: false },
        { text: "Use a debit card instead", isCorrect: false },
        { text: "Set up autopay", isCorrect: true },
        { text: "Pay only when you get reminders", isCorrect: false }
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
        <li><strong>When You Can't Pay it Back</strong> - Don't charge what you can't pay by the billing cycle end</li>
        <li><strong>For Major Expenses Without a Plan</strong> - Rent or tuition should not be put on credit without a repayment plan</li>
        <li><strong>When Tempted to Overspend</strong> - Credit cards can make impulse purchases too easy</li>
        <li><strong>For Cash Advances</strong> - These come with high fees and immediate interest charges</li>
      </ul>
    </div>
  ),
  quiz: [
    {
      question: "When should you NOT use a credit card?",
      options: [
        { text: "Buying groceries within your budget", isCorrect: false },
        { text: "Paying for gas", isCorrect: false },
        { text: "Covering rent you can't afford", isCorrect: true },
        { text: "Monthly phone bill", isCorrect: false }
      ]
    },
    {
      question: "Which action can hurt your financial health?",
      options: [
        { text: "Paying the full balance on time", isCorrect: false },
        { text: "Using the card only for emergencies", isCorrect: false },
        { text: "Paying only the minimum and carrying a balance", isCorrect: true },
        { text: "Using a rewards credit card for small purchases", isCorrect: false }
      ]
    },
    {
      question: "What is a cash advance on a credit card?",
      options: [
        { text: "A free loan", isCorrect: false },
        { text: "Using your credit card to withdraw cash, usually with high fees", isCorrect: true },
        { text: "A bonus payment", isCorrect: false },
        { text: "A refund", isCorrect: false }
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
