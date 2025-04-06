
import React, { useState, useEffect } from "react";
import { ArrowLeft, Bell, TrendingUp, TrendingDown, DollarSign, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

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

const realETFs: ETF[] = [
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

const Invest: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);
  const [deposits, setDeposits] = useState<number[]>([]);
  const [showDepositModal, setShowDepositModal] = useState<boolean>(false);
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [holdings, setHoldings] = useState<{ [key: string]: { shares: number, averageCost: number } }>({});
  const [selectedETF, setSelectedETF] = useState<ETF | null>(null);
  const [shareAmount, setShareAmount] = useState<string>("");
  
  // Calculate total portfolio value
  const portfolioValue = Object.entries(holdings).reduce((total, [etfId, holding]) => {
    const etf = realETFs.find(e => e.id === etfId);
    return total + (etf ? etf.price * holding.shares : 0);
  }, balance);

  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedBalance = localStorage.getItem('realInvestBalance');
    const savedHoldings = localStorage.getItem('realInvestHoldings');
    const savedDeposits = localStorage.getItem('realInvestDeposits');
    
    if (savedBalance) setBalance(parseFloat(savedBalance));
    if (savedHoldings) setHoldings(JSON.parse(savedHoldings));
    if (savedDeposits) setDeposits(JSON.parse(savedDeposits));
  }, []);
  
  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('realInvestBalance', balance.toString());
    localStorage.setItem('realInvestHoldings', JSON.stringify(holdings));
    localStorage.setItem('realInvestDeposits', JSON.stringify(deposits));
  }, [balance, holdings, deposits]);
  
  // Function to handle deposits
  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid deposit amount",
        variant: "destructive"
      });
      return;
    }
    
    setBalance(prev => prev + amount);
    setDeposits(prev => [...prev, amount]);
    setDepositAmount("");
    setShowDepositModal(false);
    
    toast({
      title: "Deposit successful",
      description: `$${amount.toFixed(2)} has been added to your balance`,
    });
  };
  
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
  
  // Calculate total deposits
  const totalDeposits = deposits.reduce((sum, amount) => sum + amount, 0);
  
  // Calculate total return
  const totalReturn = portfolioValue - totalDeposits;
  const totalReturnPercentage = totalDeposits > 0 ? ((portfolioValue / totalDeposits) - 1) * 100 : 0;

  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="flex justify-between items-center h-14 sticky z-10 bg-[#1A1A1A] px-4 py-3 border-b-[#333] border-b border-solid top-0">
        <div className="flex items-center gap-3">
          <Link to="/">
            <ArrowLeft className="text-white" size={24} />
          </Link>
          <h1 className="text-white text-xl font-bold">Invest in ETFs</h1>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="text-white" size={22} />
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-4 pt-4 pb-20 px-4">
        <Card className="bg-[#1E1E2E] border-[#333] text-white">
          <CardHeader>
            <CardTitle className="text-center">Investment Portfolio</CardTitle>
            <CardDescription className="text-center text-gray-300">
              Invest in ETFs with real money
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
            
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Performance</h3>
              <Button 
                onClick={() => setShowDepositModal(true)}
                className="bg-[#5DADEC] hover:bg-[#4C9ED8] flex items-center gap-1"
              >
                <PlusCircle size={16} />
                Deposit
              </Button>
            </div>
            
            <div className="p-4 bg-[#252538] rounded-lg mb-4">
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <p className="text-gray-400 text-sm">Total Deposited</p>
                  <p className="text-lg font-medium">${totalDeposits.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Total Return</p>
                  <p className={`text-lg font-medium flex items-center ${totalReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    ${totalReturn.toFixed(2)}
                    <span className="text-sm ml-1">
                      ({totalReturnPercentage.toFixed(2)}%)
                    </span>
                  </p>
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
                      <TableHead className="text-gray-300 text-right">Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(holdings).map(([etfId, holding]) => {
                      const etf = realETFs.find(e => e.id === etfId)!;
                      const currentValue = etf.price * holding.shares;
                      
                      return (
                        <TableRow key={etfId} className="border-b-[#444]">
                          <TableCell className="font-medium">{etf.symbol}</TableCell>
                          <TableCell className="text-right">{holding.shares}</TableCell>
                          <TableCell className="text-right">${holding.averageCost.toFixed(2)}</TableCell>
                          <TableCell className="text-right">${etf.price.toFixed(2)}</TableCell>
                          <TableCell className="text-right">${currentValue.toFixed(2)}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center p-4 bg-[#252538] rounded-lg">
                  <p className="text-gray-400">You don't have any ETF holdings yet</p>
                  <p className="text-gray-400 text-sm mt-1">Deposit funds and start investing</p>
                </div>
              )}
            </div>
            
            {/* ETF List */}
            <h3 className="text-lg font-semibold mb-2">Available ETFs</h3>
            <div className="space-y-3">
              {realETFs.map(etf => (
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
        
        {/* Selected ETF Details and Trade Panel */}
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
                <ResponsiveContainer width="100%" height="100%">
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
                    <Tooltip 
                      formatter={(value: number) => [`$${value}`, 'Price']}
                      labelFormatter={(label) => {
                        const date = new Date(label);
                        return date.toLocaleDateString();
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#5DADEC"
                      fillOpacity={1}
                      fill="url(#colorPrice)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex gap-2 mb-2">
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
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
                  disabled={balance <= 0}
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
        
        {/* Deposit Modal */}
        {showDepositModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
            <Card className="bg-[#1E1E2E] border-[#333] text-white w-full max-w-md">
              <CardHeader>
                <CardTitle>Deposit Funds</CardTitle>
                <CardDescription className="text-gray-300">
                  Add funds to your investment account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="amount" className="text-sm text-gray-300 mb-1 block">
                      Amount to Deposit
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                      <Input
                        id="amount"
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                        placeholder="0.00"
                        className="pl-8 bg-[#252538] border-[#444] text-white focus:border-[#5DADEC]"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  onClick={() => setShowDepositModal(false)}
                  variant="outline"
                  className="border-[#444] text-white hover:bg-[#252538]"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleDeposit}
                  className="bg-[#5DADEC] hover:bg-[#4C9ED8]"
                >
                  Deposit
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
};

export default Invest;
