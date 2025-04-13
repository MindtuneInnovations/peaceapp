
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import LessonContent from "@/components/learn/LessonContent";
import SmartInvestingIntroLesson from "@/components/learn/lessons/SmartInvestingIntroLesson";

const SmartInvestingLesson: React.FC = () => {
  const [showingVideo, setShowingVideo] = useState<boolean>(true);
  const [showingLesson, setShowingLesson] = useState<boolean>(false);
  const [videoCompleted, setVideoCompleted] = useState<boolean>(false);
  
  const handleVideoEnd = () => {
    setVideoCompleted(true);
  };
  
  const handleStartLessons = () => {
    setShowingVideo(false);
    setShowingLesson(true);
  };

  // For development purposes, this will let you skip the video
  const handleSkipVideo = () => {
    setVideoCompleted(true);
  };
  
  // This is just placeholder quiz data - you'll want to create actual quiz data
  const investingQuiz = [
    {
      question: "Which investment typically has the lowest risk?",
      options: [
        { text: "Individual stocks", isCorrect: false },
        { text: "Cryptocurrency", isCorrect: false },
        { text: "Government bonds", isCorrect: true },
        { text: "Startup investments", isCorrect: false }
      ]
    },
    {
      question: "What is dollar-cost averaging?",
      options: [
        { text: "Buying investments all at once", isCorrect: false },
        { text: "Investing the same amount at regular intervals", isCorrect: true },
        { text: "Converting foreign currency before investing", isCorrect: false },
        { text: "Calculating your returns in dollars", isCorrect: false }
      ]
    },
    {
      question: "Which of these is considered a diversification strategy?",
      options: [
        { text: "Putting all money in one high-performing stock", isCorrect: false },
        { text: "Investing only in cryptocurrency", isCorrect: false },
        { text: "Spreading investments across different asset classes", isCorrect: true },
        { text: "Only investing during market highs", isCorrect: false }
      ]
    }
  ];

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
        {showingVideo && (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-[#E0E0E0] text-xl font-bold">Investment Fundamentals</h2>
              <p className="text-[#999] text-sm mt-1">Video introduction to smart investing</p>
            </div>
            
            <div className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#333]">
              <AspectRatio ratio={16/9}>
                <div className="relative w-full h-full bg-black">
                  <iframe 
                    className="absolute w-full h-full" 
                    src="https://www.youtube.com/embed/HmiCQgq3D0Y?enablejsapi=1" 
                    title="Smart Investing Tutorial"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    onLoad={() => {
                      // Initialize YouTube iframe API
                      if (!window.YT) {
                        const tag = document.createElement('script');
                        tag.src = 'https://www.youtube.com/iframe_api';
                        const firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                      }
                    }}
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
            
            <Button 
              className={`w-full bg-[#7C5CFF] ${!videoCompleted && 'opacity-70'}`}
              onClick={handleStartLessons}
              disabled={!videoCompleted}
            >
              {videoCompleted ? "Continue to Lessons" : "Watch the video to continue"}
            </Button>
            
            {!videoCompleted && (
              <p className="text-center text-[#999] text-sm">
                Please watch the complete video to unlock lessons
              </p>
            )}
          </div>
        )}
        
        {showingLesson && !showingVideo && (
          <LessonContent
            title="Introduction to Smart Investing"
            description="Understanding investment fundamentals" 
            content={<SmartInvestingIntroLesson onStartQuiz={() => {}} />}
            quiz={investingQuiz}
            onComplete={() => {}}
            lessonNumber={1}
            totalLessons={4}
          />
        )}
      </div>
    </div>
  );
};

export default SmartInvestingLesson;
