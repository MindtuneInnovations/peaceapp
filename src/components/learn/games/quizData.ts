
interface InvestingCard {
  statement: string;
  isCorrect: boolean;
  explanation: string;
  isFact: boolean;
}

export const level1Cards: InvestingCard[] = [
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

export const level2Cards: InvestingCard[] = [
  {
    statement: "ETFs are only for experienced investors.",
    isCorrect: false,
    explanation: "Incorrect! ETFs are suitable for beginners and offer a simple way to diversify investments.",
    isFact: false
  },
  {
    statement: "You need thousands of dollars to start investing in ETFs.",
    isCorrect: false,
    explanation: "Not true! Many platforms allow you to start investing in ETFs with as little as $1.",
    isFact: false
  },
  {
    statement: "ETFs can only be traded at the end of the trading day.",
    isCorrect: false,
    explanation: "Nope! ETFs can be bought and sold throughout the trading day, just like stocks.",
    isFact: false
  },
  {
    statement: "Investing in ETFs can help diversify your portfolio.",
    isCorrect: true,
    explanation: "Correct! ETFs often include a mix of assets, providing instant diversification.",
    isFact: true
  },
  {
    statement: "Students can invest in ETFs even with just $1.",
    isCorrect: true,
    explanation: "Absolutely! Fractional investing makes it possible to start with minimal amounts.",
    isFact: true
  }
];
