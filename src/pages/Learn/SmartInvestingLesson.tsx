import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import InvestingSwipeGame from "@/components/learn/games/InvestingSwipeGame";
import { toast } from "@/hooks/use-toast";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const SmartInvestingLesson: React.FC = () => {
  const [showingVideo, setShowingVideo] = useState<boolean>(true);
  const [showingGame, setShowingGame] = useState<boolean>(false);
  const [videoCompleted, setVideoCompleted] = useState<boolean>(false);
  const [gameCompleted, setGameCompleted] = useState<boolean>(false);
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize YouTube iframe API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    }
  }, []);

  const lessons = [
    { name: "Investment Fundamentals", level: 1 },
    { name: "Stocks & Bonds", level: 2 },
    { name: "Smart Investment Strategies", level: 3 },
  ];

  const handleLessonSelect = (level: number) => {
    if (level === currentLevel) return;
    setCurrentLevel(level);
    setShowingVideo(true);
    setShowingGame(false);
    setVideoCompleted(false);
    setGameCompleted(false);
  };

  const handleVideoEnd = () => {
    setVideoCompleted(true);
  };

  const handleStartGame = () => {
    setShowingVideo(false);
    setShowingGame(true);
  };

  const handleGameComplete = () => {
    if (currentLevel === 1) {
      setCurrentLevel(2);
      setShowingVideo(true);
      setShowingGame(false);
      setVideoCompleted(false);
    } else {
      setGameCompleted(true);
      
      // Award the user with $10 for completing both levels
      const currentBalance = parseFloat(localStorage.getItem('practiceBalance') || '10000');
      localStorage.setItem('practiceBalance', (currentBalance + 10).toString());
      
      toast({
        title: "Lesson Completed! 🎉",
        description: "You earned $10 to invest in the Practice ETF simulator",
        duration: 5000,
      });
    }
  };

  const goToPractice = () => {
    navigate('/practice');
  };

  const handleSkipVideo = () => {
    setVideoCompleted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="flex justify-between items-center h-14 sticky z-10 bg-[#1A1A1A] px-4 py-3 border-b-[#333] border-b border-solid top-0">
        <div className="flex items-center gap-3">
          <Link to="/learn">
            <ArrowLeft className="text-white" size={24} />
          </Link>
          <h1 className="text-white text-xl font-bold">Smart Investing</h1>
        </div>
      </header>
      
      <div className="p-4">
        <NavigationMenu className="mb-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className={`${currentLevel === 1 ? 'text-[#7C5CFF]' : 'text-[#E0E0E0]'}`}
                onClick={() => handleLessonSelect(1)}
              >
                Level 1: Investment Fundamentals
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className={`${currentLevel === 2 ? 'text-[#7C5CFF]' : 'text-[#E0E0E0]'}`}
                onClick={() => handleLessonSelect(2)}
              >
                Level 2: Stocks & Bonds
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="text-[#666] cursor-not-allowed"
                disabled
              >
                Level 3: Coming Soon
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {showingVideo && (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-[#E0E0E0] text-xl font-bold">
                {currentLevel === 1 ? "Investment Fundamentals" : "Stocks & Bonds"}
              </h2>
              <p className="text-[#999] text-sm mt-1">
                {currentLevel === 1 ? "Video introduction to smart investing" : "Learn about different investment types"}
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#333]">
              <AspectRatio ratio={16/9}>
                <div className="relative w-full h-full bg-black">
                  <iframe 
                    className="absolute w-full h-full" 
                    src={`https://www.youtube.com/embed/${
                      currentLevel === 1 ? 'Epzr8azlxp8' : '9T2eY4L4UDQ'
                    }?enablejsapi=1`}
                    title="Smart Investing Tutorial"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                  
                  {/* For development purposes - remove this in production */}
                  <Button 
                    variant="outline" 
                    className="absolute bottom-4 right-4 bg-transparent border border-gray-700 text-gray-300 z-10"
                    onClick={handleSkipVideo}
                  >
                    Skip Video (Development Only)
                  </Button>
                </div>
              </AspectRatio>
            </div>
            
            <div className="text-[#999] text-xs text-center italic">
              Video credit: Easy Peasy Finance
            </div>

            <Button 
              className={`w-full bg-[#7C5CFF] ${!videoCompleted && 'opacity-70'}`}
              onClick={handleStartGame}
              disabled={!videoCompleted}
            >
              {videoCompleted ? "Continue to Game" : "Watch the video to continue"}
            </Button>
            
            {!videoCompleted && (
              <p className="text-center text-[#999] text-sm">
                Please watch the complete video to unlock the game
              </p>
            )}
          </div>
        )}
        
        {showingGame && !gameCompleted && (
          <InvestingSwipeGame onComplete={handleGameComplete} />
        )}
        
        {gameCompleted && (
          <div className="flex flex-col items-center justify-center gap-6 py-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="white" />
              </svg>
            </div>
            
            <div className="text-center">
              <h2 className="text-[#E0E0E0] text-2xl font-bold mb-2">Congratulations!</h2>
              <p className="text-[#999] text-base">
                You've completed the Smart Investing lesson and earned $10
              </p>
            </div>
            
            <div className="bg-[#1E1E2E] p-6 rounded-xl w-full max-w-md border border-[#333] text-center">
              <h3 className="text-[#E0E0E0] text-lg font-semibold mb-4">Your Reward</h3>
              <div className="flex justify-center items-center gap-3 mb-6">
                <span className="text-[#7C5CFF] text-3xl font-bold">$10</span>
                <span className="text-[#999]">has been added to your practice account</span>
              </div>
              
              <p className="text-[#999] text-sm mb-6">
                Now you can practice investing with ETFs in our simulator
              </p>
              
              <Button 
                onClick={goToPractice}
                className="w-full bg-[#7C5CFF]"
              >
                Start Investing in Practice Mode
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartInvestingLesson;
