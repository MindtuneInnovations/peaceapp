
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import Invest from "./pages/Invest";
import Connect from "./pages/Connect";
import Earn from "./pages/Earn";
import NotFound from "./pages/NotFound";
import CreditDebitLesson from "./pages/Learn/CreditDebitLesson";
import SmartInvestingLesson from "./pages/Learn/SmartInvestingLesson";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/credit-debit" element={<CreditDebitLesson />} />
          <Route path="/learn/smart-investing" element={<SmartInvestingLesson />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
