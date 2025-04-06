import React from "react";
import { ArrowLeft, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";

const Learn: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="flex justify-between items-center h-14 sticky z-10 bg-[#1A1A1A] px-4 py-3 border-b-[#333] border-b border-solid top-0">
        <div className="flex items-center gap-3">
          <Link to="/">
            <ArrowLeft className="text-white" size={24} />
          </Link>
          <h1 className="text-white text-xl font-bold">Learn</h1>
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
        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-[#E0E0E0] text-lg font-bold">Your Progress</h2>
            <span className="text-[#5DADEC] text-lg font-bold">45%</span>
          </div>
          <div className="w-full h-2 bg-[#333333] rounded-full overflow-hidden">
            <div className="h-full bg-[#5DADEC] rounded-full" style={{ width: "45%" }}></div>
          </div>
        </div>

        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <div className="flex gap-4 items-center">
            <div className="bg-[#0084FF] p-2 rounded-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#0084FF" />
                <path d="M17 8H7C6.45 8 6 8.45 6 9V15C6 15.55 6.45 16 7 16H17C17.55 16 18 15.55 18 15V9C18 8.45 17.55 8 17 8ZM16 15H8V13H16V15ZM16 12H8V10H16V12Z" fill="white" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-[#E0E0E0] text-base font-semibold">Credit Card vs. Debit Card</h3>
              <p className="text-[#999] text-sm">Know the difference and when to use each</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM9.5 9.95312C9.5 10.0781 9.39375 10.1875 9.26563 10.1875H4.73438C4.60625 10.1875 4.5 10.0781 4.5 9.95312V9.54688C4.5 9.42187 4.60625 9.3125 4.73438 9.3125H4.75V6.5625H4.73438C4.60625 6.5625 4.5 6.45312 4.5 6.32812V5.92188C4.5 5.79688 4.60625 5.6875 4.73438 5.6875H7.01563C7.14375 5.6875 7.25 5.79688 7.25 5.92188V9.3125H9.26563C9.39375 9.3125 9.5 9.42187 9.5 9.54688V9.95312ZM6.75 4.66406C6.75 4.88594 6.56875 5.0625 6.34375 5.0625H6.3125C6.09063 5.0625 5.90938 4.88594 5.90938 4.66406V3.98438C5.90938 3.76562 6.09063 3.58594 6.3125 3.58594H6.34375C6.56875 3.58594 6.75 3.76562 6.75 3.98438V4.66406Z" fill="#5DADEC" />
                  </svg>
                  <span className="text-[#E0E0E0] text-xs">4 min</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3066 5.6875L9.29688 4.94375L7.5 1.3125C7.44688 1.20313 7.35938 1.11562 7.25 1.0625C6.98438 0.934375 6.65938 1.05 6.53125 1.3125L4.73438 4.94375L0.724996 5.6875C0.603121 5.70938 0.493746 5.78125 0.418746 5.87813C0.326871 5.99375 0.284371 6.14375 0.301871 6.29375C0.319371 6.44375 0.395621 6.58125 0.515621 6.6625L3.40938 9.075L2.5375 13.0625C2.51563 13.1641 2.52188 13.2703 2.55625 13.3672C2.59063 13.4641 2.65156 13.5469 2.73125 13.6078C2.81094 13.6687 2.90625 13.7047 3.00625 13.7109C3.10625 13.7172 3.20625 13.6937 3.29375 13.6437L7 11.6812L10.7094 13.6437C10.7812 13.6844 10.8594 13.7031 10.9375 13.7031C11.0219 13.7031 11.1063 13.6812 11.1812 13.6391C11.3531 13.5328 11.45 13.3437 11.4344 13.1422L10.5969 9.14063L13.4813 6.67188C13.5781 6.59063 13.65 6.48125 13.6719 6.35937C13.7156 6.125 13.5625 5.89687 13.3066 5.6875Z" fill="#FFC107" />
                  </svg>
                  <span className="text-[#E0E0E0] text-xs">Beginner</span>
                </div>
              </div>
            </div>
          </div>
          <Link to="/learn/credit-debit">
            <button className="w-full bg-[#0084FF] text-white font-medium py-3 rounded-lg mt-4">
              Start Learning
            </button>
          </Link>
        </div>

        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <div className="flex gap-4 items-center">
            <div className="bg-[#7C5CFF] p-2 rounded-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#7C5CFF" />
                <path d="M18 12.75H13.5V17.25C13.5 17.6625 13.1625 18 12.75 18H11.25C10.8375 18 10.5 17.6625 10.5 17.25V12.75H6C5.5875 12.75 5.25 12.4125 5.25 12V10.5C5.25 10.0875 5.5875 9.75 6 9.75H10.5V5.25C10.5 4.8375 10.8375 4.5 11.25 4.5H12.75C13.1625 4.5 13.5 4.8375 13.5 5.25V9.75H18C18.4125 9.75 18.75 10.0875 18.75 10.5V12C18.75 12.4125 18.4125 12.75 18 12.75Z" fill="white" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-[#E0E0E0] text-base font-semibold">Smart Investing</h3>
              <p className="text-[#999] text-sm">Understand low-risk & high-return investments</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM9.5 9.95312C9.5 10.0781 9.39375 10.1875 9.26563 10.1875H4.73438C4.60625 10.1875 4.5 10.0781 4.5 9.95312V9.54688C4.5 9.42187 4.60625 9.3125 4.73438 9.3125H4.75V6.5625H4.73438C4.60625 6.5625 4.5 6.45312 4.5 6.32812V5.92188C4.5 5.79688 4.60625 5.6875 4.73438 5.6875H7.01563C7.14375 5.6875 7.25 5.79688 7.25 5.92188V9.3125H9.26563C9.39375 9.3125 9.5 9.42187 9.5 9.54688V9.95312ZM6.75 4.66406C6.75 4.88594 6.56875 5.0625 6.34375 5.0625H6.3125C6.09063 5.0625 5.90938 4.88594 5.90938 4.66406V3.98438C5.90938 3.76562 6.09063 3.58594 6.3125 3.58594H6.34375C6.56875 3.58594 6.75 3.76562 6.75 3.98438V4.66406Z" fill="#5DADEC" />
                  </svg>
                  <span className="text-[#E0E0E0] text-xs">8 min</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3066 5.6875L9.29688 4.94375L7.5 1.3125C7.44688 1.20313 7.35938 1.11562 7.25 1.0625C6.98438 0.934375 6.65938 1.05 6.53125 1.3125L4.73438 4.94375L0.724996 5.6875C0.603121 5.70938 0.493746 5.78125 0.418746 5.87813C0.326871 5.99375 0.284371 6.14375 0.301871 6.29375C0.319371 6.44375 0.395621 6.58125 0.515621 6.6625L3.40938 9.075L2.5375 13.0625C2.51563 13.1641 2.52188 13.2703 2.55625 13.3672C2.59063 13.4641 2.65156 13.5469 2.73125 13.6078C2.81094 13.6687 2.90625 13.7047 3.00625 13.7109C3.10625 13.7172 3.20625 13.6937 3.29375 13.6437L7 11.6812L10.7094 13.6437C10.7812 13.6844 10.8594 13.7031 10.9375 13.7031C11.0219 13.7031 11.1063 13.6812 11.1812 13.6391C11.3531 13.5328 11.45 13.3437 11.4344 13.1422L10.5969 9.14063L13.4813 6.67188C13.5781 6.59063 13.65 6.48125 13.6719 6.35937C13.7156 6.125 13.5625 5.89687 13.3066 5.6875Z" fill="#FFC107" />
                  </svg>
                  <span className="text-[#E0E0E0] text-xs">Beginner</span>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full bg-[#7C5CFF] text-white font-medium py-3 rounded-lg mt-4">
            Start Learning
          </button>
        </div>

        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <div className="flex gap-4 items-center">
            <div className="bg-[#00C48C] p-2 rounded-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#00C48C" />
                <path d="M12 4.5C7.8375 4.5 4.5 7.8375 4.5 12C4.5 16.1625 7.8375 19.5 12 19.5C16.1625 19.5 19.5 16.1625 19.5 12C19.5 7.8375 16.1625 4.5 12 4.5ZM12 18C8.6625 18 6 15.3375 6 12C6 8.6625 8.6625 6 12 6C15.3375 6 18 8.6625 18 12C18 15.3375 15.3375 18 12 18ZM12.75 9H11.25C10.8375 9 10.5 9.3375 10.5 9.75V14.25C10.5 14.6625 10.8375 15 11.25 15H12.75C13.1625 15 13.5 14.6625 13.5 14.25V9.75C13.5 9.3375 13.1625 9 12.75 9Z" fill="white" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-[#E0E0E0] text-base font-semibold">Retirement Accounts</h3>
              <p className="text-[#999] text-sm">Understand 401(k), IRA & retirement planning</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM9.5 9.95312C9.5 10.0781 9.39375 10.1875 9.26563 10.1875H4.73438C4.60625 10.1875 4.5 10.0781 4.5 9.95312V9.54688C4.5 9.42187 4.60625 9.3125 4.73438 9.3125H4.75V6.5625H4.73438C4.60625 6.5625 4.5 6.45312 4.5 6.32812V5.92188C4.5 5.79688 4.60625 5.6875 4.73438 5.6875H7.01563C7.14375 5.6875 7.25 5.79688 7.25 5.92188V9.3125H9.26563C9.39375 9.3125 9.5 9.42187 9.5 9.54688V9.95312ZM6.75 4.66406C6.75 4.88594 6.56875 5.0625 6.34375 5.0625H6.3125C6.09063 5.0625 5.90938 4.88594 5.90938 4.66406V3.98438C5.90938 3.76562 6.09063 3.58594 6.3125 3.58594H6.34375C6.56875 3.58594 6.75 3.76562 6.75 3.98438V4.66406Z" fill="#5DADEC" />
                  </svg>
                  <span className="text-[#E0E0E0] text-xs">5 min</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3066 5.6875L9.29688 4.94375L7.5 1.3125C7.44688 1.20313 7.35938 1.11562 7.25 1.0625C6.98438 0.934375 6.65938 1.05 6.53125 1.3125L4.73438 4.94375L0.724996 5.6875C0.603121 5.70938 0.493746 5.78125 0.418746 5.87813C0.326871 5.99375 0.284371 6.14375 0.301871 6.29375C0.319371 6.44375 0.395621 6.58125 0.515621 6.6625L3.40938 9.075L2.5375 13.0625C2.51563 13.1641 2.52188 13.2703 2.55625 13.3672C2.59063 13.4641 2.65156 13.5469 2.73125 13.6078C2.81094 13.6687 2.90625 13.7047 3.00625 13.7109C3.10625 13.7172 3.20625 13.6937 3.29375 13.6437L7 11.6812L10.7094 13.6437C10.7812 13.6844 10.8594 13.7031 10.9375 13.7031C11.0219 13.7031 11.1063 13.6812 11.1812 13.6391C11.3531 13.5328 11.45 13.3437 11.4344 13.1422L10.5969 9.14063L13.4813 6.67188C13.5781 6.59063 13.65 6.48125 13.6719 6.35937C13.7156 6.125 13.5625 5.89687 13.3066 5.6875Z" fill="#FFC107" />
                  </svg>
                  <span className="text-[#E0E0E0] text-xs">Beginner</span>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full bg-[#00C48C] text-white font-medium py-3 rounded-lg mt-4">
            Start Learning
          </button>
        </div>

        <div className="bg-[#1E1E2E] rounded-xl p-4">
          <div className="flex gap-4 items-center">
            <div className="bg-gradient-to-r from-[#FF9500] to-[#FF5E3A] p-2 rounded-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="url(#paint0_linear)" />
                <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="white" />
                <path d="M18 7.5H15.8625L14.7 6H9.3L8.1375 7.5H6C5.175 7.5 4.5 8.175 4.5 9V16.5C4.5 17.325 5.175 18 6 18H18C18.825 18 19.5 17.325 19.5 16.5V9C19.5 8.175 18.825 7.5 18 7.5ZM12 15.75C9.9375 15.75 8.25 14.0625 8.25 12C8.25 9.9375 9.9375 8.25 12 8.25C14.0625 8.25 15.75 9.9375 15.75 12C15.75 14.0625 14.0625 15.75 12 15.75Z" fill="white" />
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9500" />
                    <stop offset="1" stop-color="#FF5E3A" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-[#E0E0E0] text-base font-semibold">529 Plan</h3>
              <p className="text-[#999] text-sm">Learn how to save for college tax-free</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM9.5 9.95312C9.5 10.0781 9.39375 10.1875 9.26563 10.1875H4.73438C4.60625 10.1875 4.5 10.0781 4.5 9.95312V9.54688C4.5 9.42187 4.60625 9.3125 4.73438 9.3125H4.75V6.5625H4.73438C4.60625 6.5625 4.5 6.45312 4.5 6.32812V5.92188C4.5 5.79688 4.60625 5.6875 4.73438 5.6875H7.01563C7.14375 5.6875 7.25 5.79688 7.25 5.92188V9.3125H9.26563C9.39375 9.3125 9.5 9.42187 9.5 9.54688V9.95312ZM6.75 4.66406C6.75 4.88594 6.56875 5.0625 6.34375 5.0625H6.3125C6.09063 5.0625 5.90938 4.88594 5.90938 4.66406V3.98438C5.90938 3.76562 6.09063 3.58594 6.3125 3.58594H6.34375C6.56875 3.58594 6.75 3.76562 6.75 3.98438V4.66406Z" fill="#5DADEC" />
                  </svg>
                  <span className="text-[#E0E0E0] text-xs">7 min</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3066 5.6875L9.29688 4.94375L7.5 1.3125C7.44688 1.20313 7.35938 1.11562 7.25 1.0625C6.98438 0.934375 6.65938 1.05 6.53125 1.3125L4.73438 4.94375L0.724996 5.6875C0.603121 5.70938 0.493746 5.78125 0.418746 5.87813C0.326871 5.99375 0.284371 6.14375 0.301871 6.29375C0.319371 6.44375 0.395621 6.58125 0.515621 6.6625L3.40938 9.075L2.5375 13.0625C2.51563 13.1641 2.52188 13.2703 2.55625 13.3672C2.59063 13.4641 2.65156 13.5469 2.73125 13.6078C2.81094 13.6687 2.90625 13.7047 3.00625 13.7109C3.10625 13.7172 3.20625 13.6937 3.29375 13.6437L7 11.6812L10.7094 13.6437C10.7812 13.6844 10.8594 13.7031 10.9375 13.7031C11.0219 13.7031 11.1063 13.6812 11.1812 13.6391C11.3531 13.5328 11.45 13.3437 11.4344 13.1422L10.5969 9.14063L13.4813 6.67188C13.5781 6.59063 13.65 6.48125 13.6719 6.35937C13.7156 6.125 13.5625 5.89687 13.3066 5.6875Z" fill="#FFC107" />
                  </svg>
                  <span className="text-[#E0E0E0] text-xs">Beginner</span>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-[#FF9500] to-[#FF5E3A] text-white font-medium py-3 rounded-lg mt-4">
            Learn More
          </button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Learn;
