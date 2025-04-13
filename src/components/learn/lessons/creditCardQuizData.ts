
export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export const earlyCardQuiz = [
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
    question: "Which of the following is a benefit of starting credit early?",
    options: [
      { text: "You can spend more money than you have", isCorrect: false },
      { text: "You'll get unlimited credit limits", isCorrect: false },
      { text: "Better financial offers later in life", isCorrect: true },
      { text: "You'll never need a budget", isCorrect: false }
    ]
  },
  {
    question: "How can a credit card help in emergencies?",
    options: [
      { text: "It's a source of free money", isCorrect: false },
      { text: "It provides a financial safety net", isCorrect: true },
      { text: "It eliminates all emergency expenses", isCorrect: false },
      { text: "It automatically pays your bills", isCorrect: false }
    ]
  }
];

export const cardUseQuiz = [
  {
    question: "When is it appropriate to use a credit card?",
    options: [
      { text: "When you're low on cash", isCorrect: false },
      { text: "For any purchase, anytime", isCorrect: false },
      { text: "When you can pay the full balance by due date", isCorrect: true },
      { text: "Only for luxury items", isCorrect: false }
    ]
  },
  {
    question: "Why are credit cards better for online shopping than debit cards?",
    options: [
      { text: "They have unlimited spending", isCorrect: false },
      { text: "They offer better fraud protection", isCorrect: true },
      { text: "They're always accepted online", isCorrect: false },
      { text: "They process payments faster", isCorrect: false }
    ]
  },
  {
    question: "How can regular use of a credit card improve your credit score?",
    options: [
      { text: "By maxing out the credit limit", isCorrect: false },
      { text: "By only making minimum payments", isCorrect: false },
      { text: "By making regular small purchases and paying in full", isCorrect: true },
      { text: "By applying for multiple cards at once", isCorrect: false }
    ]
  }
];

export const cardAvoidQuiz = [
  {
    question: "When should you avoid using a credit card?",
    options: [
      { text: "For planned major purchases", isCorrect: false },
      { text: "For impulse buys you haven't budgeted for", isCorrect: true },
      { text: "For online purchases", isCorrect: false },
      { text: "For recurring subscriptions", isCorrect: false }
    ]
  },
  {
    question: "Why should you avoid cash advances on credit cards?",
    options: [
      { text: "They have low fees", isCorrect: false },
      { text: "They don't count toward your credit limit", isCorrect: false },
      { text: "They have high fees and immediate interest charges", isCorrect: true },
      { text: "They're not available at most ATMs", isCorrect: false }
    ]
  },
  {
    question: "What's a poor use of a credit card?",
    options: [
      { text: "Paying for fraud protection", isCorrect: false },
      { text: "Making regular ATM withdrawals", isCorrect: true },
      { text: "Online shopping with secure merchants", isCorrect: false },
      { text: "Earning rewards on planned purchases", isCorrect: false }
    ]
  }
];
