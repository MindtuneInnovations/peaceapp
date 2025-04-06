
import React from "react";
import { ArrowLeft, Bell, Image } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";

const Connect: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="flex justify-between items-center h-14 sticky z-10 bg-[#1A1A1A] px-4 py-3 border-b-[#333] border-b border-solid top-0">
        <div className="flex items-center gap-1">
          <h1 className="text-white text-xl font-bold">Connect & Share</h1>
        </div>
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C16.5304 8 17.0391 8.21071 17.4142 8.58579C17.7893 8.96086 18 9.46957 18 10C18 10.5304 17.7893 11.0391 17.4142 11.4142C17.0391 11.7893 16.5304 12 16 12C15.4696 12 14.9609 11.7893 14.5858 11.4142C14.2107 11.0391 14 10.5304 14 10C14 9.46957 14.2107 8.96086 14.5858 8.58579C14.9609 8.21071 15.4696 8 16 8ZM16 14C18.67 14 22 15.33 22 18V20H10V18C10 15.33 13.33 14 16 14ZM8 8C9.06087 8 10.0783 8.42143 10.8284 9.17157C11.5786 9.92172 12 10.9391 12 12C12 13.0609 11.5786 14.0783 10.8284 14.8284C10.0783 15.5786 9.06087 16 8 16C6.93913 16 5.92172 15.5786 5.17157 14.8284C4.42143 14.0783 4 13.0609 4 12C4 10.9391 4.42143 9.92172 5.17157 9.17157C5.92172 8.42143 6.93913 8 8 8ZM8 18C5.33 18 2 19.33 2 22V24H14V22C14 19.33 10.67 18 8 18Z" fill="#5DADEC"/>
          </svg>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-4 pt-4 pb-20 px-4">
        <p className="text-gray-400 text-sm ml-1">Learn from peers, share insights, and grow together!</p>
        
        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <div className="flex flex-col gap-3">
            <textarea 
              placeholder="Share your financial learning or investing" 
              className="w-full h-20 bg-[#181C2E] text-white p-4 rounded-lg resize-none border-0 focus:ring-0 focus:outline-none"
            />
            <div className="flex justify-between">
              <button className="p-2 rounded-lg bg-[#181C2E]">
                <Image className="text-gray-400" size={20} />
              </button>
              <button className="px-6 py-2 bg-[#0084FF] text-white font-medium rounded-lg">
                Post
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8aad140727cccf10c0ec388a4eaced5913a8c71"
                alt="Alex profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-medium">Alex</h3>
              <p className="text-gray-400 text-xs">@alex • 2h ago</p>
            </div>
          </div>
          
          <p className="text-white mb-3">Up 15% this month after diversifying into ETFs! 📈</p>
          
          <div className="rounded-lg overflow-hidden mb-3 bg-black">
            <img 
              src="public/lovable-uploads/89a48f51-71a4-4a31-b9d1-4b0cf42f45aa.png" 
              alt="Investment chart" 
              className="w-full h-48 object-cover"
            />
          </div>
          
          <div className="flex gap-4 text-gray-400">
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14L6.5 12.5H4C3.45 12.5 3 12.05 3 11.5V4C3 3.45 3.45 3 4 3H12C12.55 3 13 3.45 13 4V11.5C13 12.05 12.55 12.5 12 12.5H9.5L8 14Z" fill="#808080"/>
              </svg>
              <span>234</span>
            </div>
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C14 9.76142 11.7614 12 9 12L9.80825 14.6262C9.86143 14.7995 9.76382 14.9887 9.58674 15.0388C9.52247 15.0587 9.45341 15.0535 9.39348 15.0242L6 13L3.5 13C1.84315 13 0.5 11.6569 0.5 10L0.5 3.5C0.5 1.84315 1.84315 0.5 3.5 0.5L10.5 0.5C12.1569 0.5 13.5 1.84315 13.5 3.5L14 7Z" fill="#808080"/>
              </svg>
              <span>45</span>
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 2.25H9.75L9 1.5H5.25L4.5 2.25H1.5V3.75H12.75M2.25 12.75C2.25 13.1478 2.40804 13.5294 2.68934 13.8107C2.97064 14.092 3.35218 14.25 3.75 14.25H10.5C10.8978 14.25 11.2794 14.092 11.5607 13.8107C11.842 13.5294 12 13.1478 12 12.75V4.5H2.25V12.75Z" fill="#808080"/>
              </svg>
            </div>
            <div className="flex items-center gap-1">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 3.75L12.4395 4.8105L14.6895 7.0605L15.75 6M13.5 3.75L8.82 8.43C8.64 8.61 8.5395 8.844 8.5005 9.0975L8.25 11.25L10.4025 10.9995C10.656 10.9605 10.89 10.86 11.07 10.68L15.75 6M13.5 3.75L15.75 6M3.75 3.75H6.75V5.25H3.75V3.75ZM3.75 6.75H8.25V8.25H3.75V6.75ZM3.75 9.75H6.75V11.25H3.75V9.75Z" fill="#808080"/>
              </svg>
            </div>
          </div>
        </div>

      </main>
      <BottomNav />
    </div>
  );
};

export default Connect;
