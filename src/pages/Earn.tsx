
import React from "react";
import { ArrowLeft, Bell, Trophy, LockIcon } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";
import { Progress } from "@/components/ui/progress";

const Earn: React.FC = () => {
  // Mock data for student progress
  const totalLessons = 10;
  const completedLessons = 1;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="flex justify-between items-center h-14 sticky z-10 bg-[#1A1A1A] px-4 py-3 border-b-[#333] border-b border-solid top-0">
        <div className="flex items-center gap-3">
          <Link to="/">
            <ArrowLeft className="text-white" size={24} />
          </Link>
          <div className="flex items-center gap-3">
            <svg
              width="30"
              height="24"
              viewBox="0 0 30 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="feature-icon"
            >
              <path
                d="M24 3.75C24 4.59375 23.3297 5.37188 22.2 6C20.8359 6.75469 18.8016 7.28906 16.4672 7.44844C16.2937 7.36406 16.1203 7.28437 15.9375 7.21406C14.0906 6.44062 11.6344 6 9 6C8.61094 6 8.23125 6.00937 7.85156 6.02812L7.8 6C6.67031 5.37188 6 4.59375 6 3.75C6 1.67812 10.0312 0 15 0C19.9688 0 24 1.67812 24 3.75ZM7.53281 7.55156C8.01094 7.51875 8.50312 7.5 9 7.5C11.9156 7.5 14.5031 8.07656 16.1484 8.97188C17.3109 9.60469 18 9.99219 18 11.25C18 11.4375 17.9672 11.6203 17.9016 11.7984C17.6859 12.4172 17.1047 12.9844 16.261 13.4625C16.2563 13.4672 16.2469 13.4672 16.2422 13.4719C16.2281 13.4812 16.2141 13.4859 16.2 13.4953C14.5594 14.4047 11.9437 14.9953 9 14.9953C6.20625 14.9953 3.70781 14.4656 2.05312 13.6312C1.96406 13.5891 1.87969 13.5422 1.79531 13.4953C0.670312 12.8719 0 12.0938 0 11.25C0 9.61875 2.50312 8.22656 6 8.11562C6.49219 8.04531 7.00312 7.98906 7.53281 7.55156ZM19.5 11.25C19.5 10.2234 19.0031 9.37969 18.3703 8.74688C19.6969 8.54062 20.9109 8.2125 21.9422 7.78594C22.7063 7.46719 23.4188 7.07344 24 6.59062V8.25C24 9.15469 23.2266 9.98906 22.1469 10.6359C21.4625 10.9828 20.6281 11.2781 19.6906 11.5031C19.6953 11.4188 19.5 11.3391 19.5 11.2547V11.25ZM18 15.75C18 16.5938 17.3297 17.3719 16.2 18C16.1156 18.0469 16.0312 18.0891 15.9422 18.1359C14.2922 18.9703 11.7938 19.5 9 19.5C6.05625 19.5 3.44063 19.0094 1.8 18C0.670312 17.3719 0 16.5938 0 15.75V14.0906C0.585937 14.5734 1.29375 14.9672 2.05781 15.2859C3.90937 16.0594 6.36562 16.5 9 16.5C11.6344 16.5 14.0906 16.0594 15.9422 15.2859C16.3078 15.1359 16.6594 14.9625 16.9922 14.775C17.2781 14.6156 17.5453 14.4375 17.7984 14.25C17.8687 14.1984 17.9344 14.1422 18 14.0906V14.25V15.3172V15.75ZM19.5 15.75V14.25V13.0359C20.3906 12.8391 21.2109 12.5906 21.9422 12.2859C22.7063 11.9672 23.4188 11.5734 24 11.0906V12.75C24 13.2422 23.7656 13.7344 23.3016 14.1984C22.5375 14.9625 21.1922 15.5906 19.4906 15.9984C19.4953 15.9188 19.5 15.8344 19.5 15.75ZM9 21C11.6344 21 14.0906 20.5594 15.9422 19.7859C16.7063 19.4672 17.4188 19.0734 18 18.5906V20.25C18 22.3219 13.9688 24 9 24C4.03125 24 0 22.3219 0 20.25V18.5906C0.585937 19.0734 1.29375 19.4672 2.05781 19.7859C3.90937 20.5594 6.36562 21 9 21Z"
                fill="#5DADEC"
              ></path>
            </svg>
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">Earn Rewards</h1>
            <p className="text-gray-400 text-xs">Track your earnings and redeem rewards</p>
          </div>
        </div>
        <div>
          <Bell className="text-white" size={22} />
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-4 pt-4 pb-20 px-4">
        {/* Student Progress Overview */}
        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <h2 className="text-gray-300 text-lg mb-2">Learning Progress</h2>
          <div className="flex justify-between items-center">
            <div className="text-xl text-[#5DADEC] font-medium">{completedLessons}/{totalLessons} Lessons</div>
            <span className="text-gray-300">{progressPercentage.toFixed(0)}% Complete</span>
          </div>
          <Progress className="h-2 mt-2 bg-[#333333]" value={progressPercentage} />
        </div>

        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <h2 className="text-gray-300 text-lg mb-2">Total Earnings</h2>
          <div className="flex justify-between items-center">
            <div className="text-3xl text-[#5DADEC] font-bold">$1.00</div>
          </div>
          <div className="w-full h-2 bg-[#333333] rounded-full overflow-hidden mt-4">
            <div className="h-full bg-[#5DADEC] rounded-full" style={{ width: "10%" }}></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-gray-400 text-sm">$1 earned</span>
            <span className="text-gray-400 text-sm">$10 goal</span>
          </div>
        </div>

        <h2 className="text-white text-xl font-bold mt-2">Completed Lessons</h2>
        
        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <div className="flex justify-between">
            <div className="flex items-start gap-3">
              <div className="bg-[#00C48C] p-2 rounded-lg flex items-center justify-center">
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H3C2.45 2 2 2.45 2 3V11C2 11.55 2.45 12 3 12H17C17.55 12 18 11.55 18 11V3C18 2.45 17.55 2 17 2ZM16 10H4V9H16V10ZM16 7H4V5H16V7Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="text-[#E0E0E0] text-base font-medium">Credit Card vs. Debit Card</h3>
                <div className="flex items-center gap-1 mt-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM9.5 9.95312C9.5 10.0781 9.39375 10.1875 9.26563 10.1875H4.73438C4.60625 10.1875 4.5 10.0781 4.5 9.95312V9.54688C4.5 9.42187 4.60625 9.3125 4.73438 9.3125H4.75V6.5625H4.73438C4.60625 6.5625 4.5 6.45312 4.5 6.32812V5.92188C4.5 5.79688 4.60625 5.6875 4.73438 5.6875H7.01563C7.14375 5.6875 7.25 5.79688 7.25 5.92188V9.3125H9.26563C9.39375 9.3125 9.5 9.42187 9.5 9.54688V9.95312ZM6.75 4.66406C6.75 4.88594 6.56875 5.0625 6.34375 5.0625H6.3125C6.09063 5.0625 5.90938 4.88594 5.90938 4.66406V3.98438C5.90938 3.76562 6.09063 3.58594 6.3125 3.58594H6.34375C6.56875 3.58594 6.75 3.76562 6.75 3.98438V4.66406Z" fill="#999999" />
                  </svg>
                  <span className="text-gray-400 text-xs">Completed in 15 mins</span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Trophy className="text-yellow-400" size={20} />
              <span className="text-gray-300 text-sm font-medium ml-1">Earned $1</span>
            </div>
          </div>
          <button className="w-full bg-[#0084FF] text-white font-medium py-3 rounded-lg mt-4">
            Redeem
          </button>
        </div>

        <h2 className="text-white text-xl font-bold mt-2">Learning Stats</h2>
        
        <div className="bg-[#1E1E2E] rounded-xl p-4 grid grid-cols-2 gap-4">
          <div className="bg-[#252538] p-3 rounded-lg flex flex-col items-center">
            <span className="text-gray-400 text-sm">Time Spent</span>
            <span className="text-2xl text-[#5DADEC] font-bold mt-1">15 min</span>
          </div>
          <div className="bg-[#252538] p-3 rounded-lg flex flex-col items-center">
            <span className="text-gray-400 text-sm">Lessons Done</span>
            <span className="text-2xl text-[#5DADEC] font-bold mt-1">{completedLessons}</span>
          </div>
          <div className="bg-[#252538] p-3 rounded-lg flex flex-col items-center">
            <span className="text-gray-400 text-sm">Total Earned</span>
            <span className="text-2xl text-[#5DADEC] font-bold mt-1">$1.00</span>
          </div>
          <div className="bg-[#252538] p-3 rounded-lg flex flex-col items-center">
            <span className="text-gray-400 text-sm">Quiz Score</span>
            <span className="text-2xl text-[#5DADEC] font-bold mt-1">90%</span>
          </div>
        </div>

        <h2 className="text-white text-xl font-bold mt-2">Up Next</h2>
        
        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <div className="flex justify-between">
            <div className="flex items-start gap-3">
              <div className="bg-[#181C2E] p-2 rounded-lg flex items-center justify-center">
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3828 5.88281C18.8711 5.39453 18.8711 4.60156 18.3828 4.11328C17.8945 3.625 17.1016 3.625 16.6133 4.11328L12.5 8.23047L10.2578 5.98828C9.76953 5.5 8.97656 5.5 8.48828 5.98828L4.11328 10.3633C3.625 10.8516 3.625 11.6445 4.11328 12.1328C4.60156 12.6211 5.39453 12.6211 5.88281 12.1328L9.375 8.64453L11.6172 10.8867C12.1055 11.375 12.8984 11.375 13.3867 10.8867L18.3867 5.88672L18.3828 5.88281Z" fill="#5DADEC"/>
                </svg>
              </div>
              <div>
                <h3 className="text-[#E0E0E0] text-base font-medium">Smart Investing</h3>
                <p className="text-gray-500 text-xs mt-1">Complete this lesson to earn $1</p>
              </div>
            </div>
            <div>
              <LockIcon className="text-gray-500" size={18} />
            </div>
          </div>
        </div>

        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <div className="flex justify-between">
            <div className="flex items-start gap-3">
              <div className="bg-[#181C2E] p-2 rounded-lg flex items-center justify-center">
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C12.8288 2 13.6237 2.32924 14.2097 2.91529C14.7958 3.50134 15.125 4.2962 15.125 5.125C15.125 5.9538 14.7958 6.74866 14.2097 7.33471C13.6237 7.92076 12.8288 8.25 12 8.25C11.1712 8.25 10.3763 7.92076 9.79029 7.33471C9.20424 6.74866 8.875 5.9538 8.875 5.125C8.875 4.2962 9.20424 3.50134 9.79029 2.91529C10.3763 2.32924 11.1712 2 12 2Z" fill="#5DADEC"/>
                </svg>
              </div>
              <div>
                <h3 className="text-[#E0E0E0] text-base font-medium">Retirement Accounts</h3>
                <p className="text-gray-500 text-xs mt-1">Complete this lesson to earn $1</p>
              </div>
            </div>
            <div>
              <LockIcon className="text-gray-500" size={18} />
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Earn;
