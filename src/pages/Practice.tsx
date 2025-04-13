
import React, { useState, useEffect } from "react";
import { ArrowLeft, Bell, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { toast } from "@/hooks/use-toast";

type ETF = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  description: string;
  data: { date: string; price: number }[];
};

const generateMockChartData = (startPrice: number, volatility: number, days: number) => {
  const data = [];
  let price = startPrice;
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    // Random price movement based on volatility
    const change = (Math.random() - 0.5) * volatility * price;
    price = Math.max(price + change, price * 0.7);  // Prevent price from dropping too much
    
    data.push({
      date: date.toISOString().split('T')[0],
      price: Math.round(price * 100) / 100,
    });
  }
  
  return data;
};

const mockETFs: ETF[] = [
  {
    id: "spy",
    name: "S&P 500 ETF",
    symbol: "SPY",
    price: 453.72,
    change: 0.67,
    description: "Tracks the performance of the S&P 500 Index",
    data: generateMockChartData(453.72, 0.01, 30),
  },
  {
    id: "voo",
    name: "Vanguard S&P 500 ETF",
    symbol: "VOO",
    price: 416.85,
    change: 0.58,
    description: "Vanguard's fund that tracks the S&P 500 Index",
    data: generateMockChartData(416.85, 0.01, 30),
  },
  {
    id: "qqq",
    name: "NASDAQ-100 ETF",
    symbol: "QQQ",
    price: 383.21,
    change: -0.24,
    description: "Tracks the performance of the NASDAQ-100 Index",
    data: generateMockChartData(383.21, 0.015, 30),
  },
  {
    id: "blk",
    name: "BlackRock Inc",
    symbol: "BLK",
    price: 764.32,
    change: 1.05,
    description: "Investment management corporation and ETF provider",
    data: generateMockChartData(764.32, 0.02, 30),
  },
];

const Practice: React.FC = () => {
  const [balance, setBalance] = useState<number>(10000);
  const [holdings, setHoldings] = useState<{ [key: string]: { shares: number, averageCost: number } }>({});
  const [selectedETF, setSelectedETF] = useState<ETF | null>(null);
  const [shareAmount, setShareAmount] = useState<string>("");
  
  // Load data from localStorage on component mount
  useEffect(() => {
    const savedBalance = localStorage.getItem('practiceBalance');
    const savedHoldings = localStorage.getItem('practiceHoldings');
    
    if (savedBalance) {
      setBalance(parseFloat(savedBalance));
    } else {
      localStorage.setItem('practiceBalance', String(10000));
    }
    
    if (savedHoldings) {
      setHoldings(JSON.parse(savedHoldings));
    }
    
    // Check if user just completed a lesson
    const lessonCompleted = sessionStorage.getItem('lessonCompleted');
    if (lessonCompleted) {
      toast({
        title: "Practice Mode",
        description: "Use your earnings from lessons to invest in ETFs and build your portfolio!",
      });
      sessionStorage.removeItem('lessonCompleted');
    }
  }, []);
  
  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('practiceBalance', String(balance));
    localStorage.setItem('practiceHoldings', JSON.stringify(holdings));
  }, [balance, holdings]);
  
  // Calculate total portfolio value
  const portfolioValue = Object.entries(holdings).reduce((total, [etfId, holding]) => {
    const etf = mockETFs.find(e => e.id === etfId);
    return total + (etf ? etf.price * holding.shares : 0);
  }, balance);
  
  // Function to buy ETF shares
  const buyShares = (etf: ETF) => {
    const sharesToBuy = parseFloat(shareAmount);
    
    if (isNaN(sharesToBuy) || sharesToBuy <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid number of shares",
        variant: "destructive"
      });
      return;
    }
    
    const totalCost = etf.price * sharesToBuy;
    
    if (totalCost > balance) {
      toast({
        title: "Insufficient balance",
        description: "You don't have enough funds to complete this purchase",
        variant: "destructive"
      });
      return;
    }
    
    // Update holdings
    setHoldings(prevHoldings => {
      const currentHolding = prevHoldings[etf.id] || { shares: 0, averageCost: 0 };
      const totalShares = currentHolding.shares + sharesToBuy;
      const totalCostBasis = (currentHolding.shares * currentHolding.averageCost) + (sharesToBuy * etf.price);
      
      return {
        ...prevHoldings,
        [etf.id]: {
          shares: totalShares,
          averageCost: totalCostBasis / totalShares
        }
      };
    });
    
    // Deduct from balance
    setBalance(prev => prev - totalCost);
    
    toast({
      title: "Purchase successful",
      description: `Bought ${sharesToBuy} shares of ${etf.symbol} at $${etf.price.toFixed(2)}`,
    });
    
    setShareAmount("");
  };
  
  // Function to sell ETF shares
  const sellShares = (etf: ETF) => {
    const sharesToSell = parseFloat(shareAmount);
    
    if (isNaN(sharesToSell) || sharesToSell <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid number of shares",
        variant: "destructive"
      });
      return;
    }
    
    const currentHolding = holdings[etf.id];
    
    if (!currentHolding || currentHolding.shares < sharesToSell) {
      toast({
        title: "Insufficient shares",
        description: `You only have ${currentHolding?.shares || 0} shares of ${etf.symbol}`,
        variant: "destructive"
      });
      return;
    }
    
    const saleProceeds = etf.price * sharesToSell;
    
    // Update holdings
    setHoldings(prevHoldings => {
      const updatedShares = prevHoldings[etf.id].shares - sharesToSell;
      
      if (updatedShares === 0) {
        const { [etf.id]: _, ...remainingHoldings } = prevHoldings;
        return remainingHoldings;
      }
      
      return {
        ...prevHoldings,
        [etf.id]: {
          ...prevHoldings[etf.id],
          shares: updatedShares
        }
      };
    });
    
    // Add to balance
    setBalance(prev => prev + saleProceeds);
    
    toast({
      title: "Sale successful",
      description: `Sold ${sharesToSell} shares of ${etf.symbol} at $${etf.price.toFixed(2)}`,
    });
    
    setShareAmount("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="flex justify-between items-center h-14 sticky z-10 bg-[#1A1A1A] px-4 py-3 border-b-[#333] border-b border-solid top-0">
        <div className="flex items-center gap-3">
          <Link to="/">
            <ArrowLeft className="text-white" size={24} />
          </Link>
          <h1 className="text-white text-xl font-bold">Practice</h1>
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
        <Card className="bg-[#1E1E2E] border-[#333] text-white">
          <CardHeader>
            <CardTitle className="text-center">ETF Simulator</CardTitle>
            <CardDescription className="text-center text-gray-300">
              Practice investing with virtual cash
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-[#252538] rounded-lg">
                <p className="text-gray-400 mb-1 text-sm">Cash Balance</p>
                <p className="text-xl font-bold text-[#5DADEC]">${balance.toFixed(2)}</p>
              </div>
              <div className="p-4 bg-[#252538] rounded-lg">
                <p className="text-gray-400 mb-1 text-sm">Portfolio Value</p>
                <p className="text-xl font-bold text-[#5DADEC]">${portfolioValue.toFixed(2)}</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#7C5CFF20] to-[#5DADEC20] p-4 rounded-lg mb-4 border border-[#7C5CFF50]">
              <div className="flex items-start gap-3">
                <div className="bg-[#7C5CFF] p-2 rounded-lg shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" />
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Complete Lessons to Earn More</h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Complete educational modules to earn more virtual cash for investing!
                  </p>
                  <Link to="/learn" className="inline-block mt-2">
                    <Button size="sm" className="bg-[#7C5CFF]">
                      Go to Lessons
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Holdings section */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Your Holdings</h3>
              {Object.keys(holdings).length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-[#444]">
                      <TableHead className="text-gray-300">Symbol</TableHead>
                      <TableHead className="text-gray-300 text-right">Shares</TableHead>
                      <TableHead className="text-gray-300 text-right">Avg Cost</TableHead>
                      <TableHead className="text-gray-300 text-right">Current</TableHead>
                      <TableHead className="text-gray-300 text-right">Gain/Loss</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(holdings).map(([etfId, holding]) => {
                      const etf = mockETFs.find(e => e.id === etfId)!;
                      const gainLoss = (etf.price - holding.averageCost) * holding.shares;
                      const gainLossPercent = ((etf.price / holding.averageCost) - 1) * 100;
                      
                      return (
                        <TableRow key={etfId} className="border-b-[#444]">
                          <TableCell className="font-medium">{etf.symbol}</TableCell>
                          <TableCell className="text-right">{holding.shares}</TableCell>
                          <TableCell className="text-right">${holding.averageCost.toFixed(2)}</TableCell>
                          <TableCell className="text-right">${etf.price.toFixed(2)}</TableCell>
                          <TableCell className={`text-right ${gainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            ${gainLoss.toFixed(2)} ({gainLossPercent.toFixed(2)}%)
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center p-4 bg-[#252538] rounded-lg">
                  <p className="text-gray-400">You don't have any ETF holdings yet</p>
                </div>
              )}
            </div>
            
            {/* ETF List */}
            <h3 className="text-lg font-semibold mb-2">Available ETFs</h3>
            <div className="space-y-3">
              {mockETFs.map(etf => (
                <Card 
                  key={etf.id} 
                  className={`bg-[#252538] border-[#444] cursor-pointer hover:bg-[#2A2A42] transition-colors ${selectedETF?.id === etf.id ? 'ring-1 ring-[#5DADEC]' : ''}`}
                  onClick={() => setSelectedETF(etf)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{etf.symbol}</h4>
                        <p className="text-sm text-gray-400">{etf.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${etf.price.toFixed(2)}</p>
                        <p className={`text-xs ${etf.change >= 0 ? 'text-green-400' : 'text-red-400'} flex items-center justify-end`}>
                          {etf.change >= 0 ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
                          {etf.change >= 0 ? '+' : ''}{etf.change}%
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {selectedETF && (
          <Card className="bg-[#1E1E2E] border-[#333] text-white">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{selectedETF.symbol} - {selectedETF.name}</span>
                <span className="text-lg">${selectedETF.price.toFixed(2)}</span>
              </CardTitle>
              <CardDescription className="text-gray-300">
                {selectedETF.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-52 mb-4">
                <ChartContainer 
                  config={{
                    price: {
                      label: "Price",
                      theme: { dark: "#5DADEC", light: "#5DADEC" }
                    }
                  }}
                >
                  <AreaChart data={selectedETF.data}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#5DADEC" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#5DADEC" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="date" 
                      tickFormatter={(value) => {
                        const date = new Date(value);
                        return `${date.getMonth() + 1}/${date.getDate()}`;
                      }}
                      stroke="#666" 
                    />
                    <YAxis domain={['auto', 'auto']} stroke="#666" />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#5DADEC"
                      fillOpacity={1}
                      fill="url(#colorPrice)"
                    />
                    <ChartTooltip 
                      content={({ active, payload }) => (
                        <ChartTooltipContent 
                          active={active}
                          payload={payload}
                          formatter={(value) => [`$${value}`, "Price"]}
                          labelFormatter={(label) => {
                            const date = new Date(label);
                            return date.toLocaleDateString();
                          }}
                        />
                      )}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
              
              <div className="flex gap-2 mb-2">
                <input
                  type="number"
                  min="1"
                  value={shareAmount}
                  onChange={(e) => setShareAmount(e.target.value)}
                  placeholder="Enter number of shares"
                  className="flex-1 px-3 py-2 rounded-md bg-[#252538] border-[#444] border focus:border-[#5DADEC] focus:outline-none text-white"
                />
                <div className="bg-[#252538] px-3 py-2 rounded-md border border-[#444] flex items-center">
                  <DollarSign size={16} className="text-gray-400 mr-1" />
                  <span>{shareAmount ? (parseFloat(shareAmount) * selectedETF.price).toFixed(2) : "0.00"}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={() => buyShares(selectedETF)}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  Buy
                </Button>
                <Button 
                  onClick={() => sellShares(selectedETF)}
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  disabled={!holdings[selectedETF.id] || holdings[selectedETF.id].shares <= 0}
                >
                  Sell
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
      <BottomNav />
    </div>
  );
};

export default Practice;
