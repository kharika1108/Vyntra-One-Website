import React from 'react';
import exploreVisual from '../assets/All Courses 1.png';
import learnVisual from '../assets/video-window1.png';
import practiceVisual from '../assets/Vector (1).png';
import achieveVisual from '../assets/visual4.png';

const YourJourney = () => {
  return (
    <div className="w-full bg-white pt-20 pb-28 px-8 lg:px-[125px] relative overflow-hidden flex flex-col items-center">
      {/* Title Section */}
      <div className="text-center mb-16 z-10 relative">
        <h2
          className="text-[48px] md:text-[60px] text-[#15130F] leading-tight"
          style={{ fontFamily: 'Sk-Modernist', fontWeight: 400 }}
        >
          Your Journey.
          <br />
          Your Progress. <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', color: '#1C385A' }}>Your VyntraOne.</span>
        </h2>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-[820px] mx-auto relative z-10">

        {/* Handwritten Annotations (Hidden on very small screens, visible md+) */}
        <div className="hidden lg:block absolute -top-8 -left-[10%] text-[#8D8D8D] font-['Handlee'] text-[22px] transform rotate-[16.35deg] z-30 pointer-events-none text-center flex flex-col items-center">
          find the <br /> right path <br />  for you!
          <svg className="w-12 h-12 absolute left-[80%] top-[30%] text-[#F06A16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8 Q 12 8 20 20" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 20 L 20 20 L 20 14" />
          </svg>
        </div>

        <div className="hidden lg:block absolute -top-2 -right-2 text-[#8D8D8D] font-['Handlee'] text-[22px] transform rotate-[38.67deg] z-30 pointer-events-none text-center flex flex-col items-center">
          engaging <br /> learning <br /> experiences
          <svg className="w-12 h-12 absolute left-1/2 -translate-x-1/2 -bottom-10 transform scale-x-[-1] text-[#168DE2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8 Q 12 8 20 20" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 20 L 20 20 L 20 14" />
          </svg>
        </div>


        <div className="hidden lg:block absolute -bottom-8 -left-4 text-[#8D8D8D] font-['Handlee'] text-[22px] transform rotate-[-22.36deg] z-30 pointer-events-none text-center flex flex-col items-center">
          practice makes <br /> progress
          <svg className="w-12 h-12 absolute left-[80%] bottom-[30%] text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16 Q 12 16 20 4" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 4 L 20 4 L 20 10" />
          </svg>
        </div>

        <div className="hidden lg:block absolute -bottom-6 -right-2 text-[#8D8D8D] font-['Handlee'] text-[22px] transform rotate-[16.35deg] z-30 pointer-events-none text-center flex flex-col items-center">
          achieve more, <br /> get recognized
          <svg className="w-12 h-12 absolute right-[80%] bottom-[30%] text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 16 Q 12 16 4 4" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4 L 4 4 L 4 10" />
          </svg>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative p-4">

          {/* Card 1: Explore */}
          <div className="bg-white rounded-[24px] border-[2px] border-[#E6E6EBD9] p-3 flex flex-col h-[450px] hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col mb-4">
              <div className="mb-2 px-1 pt-1">
                <span className="text-[#30313A] text-[17px] font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>Step 1</span>
              </div>

              {/* Visual */}
              <div className="w-full h-[180px] flex flex-col items-center justify-center mb-0 relative">
                {/* Icon */}
                <div className="absolute left-0 top-[20%] w-12 h-12 bg-[#8B5CF6] rounded-[12px] flex items-center justify-center text-white shadow-md z-20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>

                {/* Laptop Image */}
                <div className="flex flex-col items-center justify-center relative w-full max-w-[340px] pl-8">
                  <div className="border-[4px] border-[#17191C] rounded-[10px] overflow-hidden bg-white z-10 w-full relative aspect-[360/215]">
                    <img src={exploreVisual} alt="Explore" className="absolute inset-0 w-full h-full object-cover object-top scale-[1.03] origin-top" />
                  </div>
                  <div className="w-[108%] h-[14px] bg-[#242528] rounded-b-[40px] -mt-1 z-0 shadow-sm"></div>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-[#FFF0E9] to-[#FFEDE3] rounded-[16px] p-4 mt-auto h-[140px] flex flex-col"
              style={{ clipPath: 'polygon(0 0, 70% 0, 78% 32px, 100% 32px, 100% 100%, 0 100%)' }}
            >
              <h3 className="text-[#F06A16] text-[28px] font-bold pb-2.5 border-b border-[#5A5A5A21] mb-2.5 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>Explore</h3>
              <p className="text-[#656C88] font-normal leading-snug text-[15px] line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Discover courses across Digital Marketing, Stock Market, and Information Technology.
              </p>
            </div>
          </div>

          {/* Card 2: Learn */}
          <div className="bg-white rounded-[24px] border-[2px] border-[#E6E6EBD9] p-3 flex flex-col h-[450px] hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col mb-4">
              <div className="mb-2 px-1 pt-1">
                <span className="text-[#30313A] text-[17px] font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>Step 2</span>
              </div>

              {/* Visual */}
              <div className="w-full h-[180px] flex flex-col items-center justify-center mb-0 relative">
                <div className="w-full max-w-[340px] flex justify-center items-center relative pr-8">
                  {/* Icon */}
                  <div className="absolute right-0 top-[-10px] w-12 h-12 bg-[#0A84FF] rounded-[12px] flex items-center justify-center text-white shadow-md z-20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                  </div>

                  <img src={learnVisual} alt="Learn" className="w-full h-auto object-contain drop-shadow-sm rounded-[10px]" />
                </div>
              </div>
            </div>

            <div
              className="bg-[#F0F8FF] rounded-[16px] p-4 mt-auto h-[140px] flex flex-col"
              style={{ clipPath: 'polygon(0 0, 70% 0, 78% 32px, 100% 32px, 100% 100%, 0 100%)' }}
            >
              <h3 className="text-[#0A84FF] text-[28px] font-bold pb-2.5 border-b border-[#5A5A5A21] mb-2.5 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>Learn</h3>
              <p className="text-[#656C88] font-normal leading-snug text-[15px] line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Learn from expert-led video lessons, live classes, and downloadable resources.
              </p>
            </div>
          </div>

          {/* Card 3: Practice */}
          <div className="bg-white rounded-[24px] border-[2px] border-[#E6E6EBD9] p-3 flex flex-col h-[450px] hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col mb-4">
              <div className="mb-2 px-1 pt-1">
                <span className="text-[#30313A] text-[17px] font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>Step 3</span>
              </div>

              {/* Visual */}
              <div className="w-full h-[180px] flex flex-col items-center justify-center mb-0 relative">
                <div className="w-full max-w-[340px] flex justify-center items-center">
                  <img src={practiceVisual} alt="Practice" className="w-full h-auto object-contain drop-shadow-sm" />
                </div>
              </div>
            </div>

            <div
              className="bg-[#F5F0FF] rounded-[16px] p-4 mt-auto h-[140px] flex flex-col"
              style={{ clipPath: 'polygon(0 0, 70% 0, 78% 32px, 100% 32px, 100% 100%, 0 100%)' }}
            >
              <h3 className="text-[#8B5CF6] text-[28px] font-bold pb-2.5 border-b border-[#5A5A5A21] mb-2.5 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>Practice</h3>
              <p className="text-[#656C88] font-normal leading-snug text-[15px] line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Reinforce your skills with quizzes, assignments, projects, and real-world practice.
              </p>
            </div>
          </div>

          {/* Card 4: Achieve */}
          <div className="bg-white rounded-[24px] border-[2px] border-[#E6E6EBD9] p-3 flex flex-col h-[450px] hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col mb-4">
              <div className="mb-2 px-1 pt-1">
                <span className="text-[#30313A] text-[17px] font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>Step 4</span>
              </div>

              {/* Visual */}
              <div className="w-full h-[180px] flex flex-col items-center justify-center mb-0 relative">
                <div className="w-full max-w-[340px] flex justify-center items-center relative pr-4">
                  {/* Icon */}
                  <div className="absolute right-0 top-[-20px] w-12 h-12 bg-[#10B981] rounded-[12px] flex items-center justify-center text-white shadow-md z-20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>

                  <img src={achieveVisual} alt="Achieve" className="w-full h-auto object-contain drop-shadow-sm" />
                </div>
              </div>
            </div>

            <div
              className="bg-[#F0FDF4] rounded-[16px] p-4 mt-auto h-[140px] flex flex-col"
              style={{ clipPath: 'polygon(0 0, 70% 0, 78% 32px, 100% 32px, 100% 100%, 0 100%)' }}
            >
              <h3 className="text-[#10B981] text-[28px] font-bold pb-2.5 border-b border-[#5A5A5A21] mb-2.5 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>Achieve</h3>
              <p className="text-[#656C88] font-normal leading-snug text-[15px] line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Earn certificates, unlock achievements, and climb the leaderboards.
              </p>
            </div>
          </div>

        </div>

        {/* Explore the Ecosystem Button */}
        <div className="mt-8 pb-12 flex justify-center">
          <button className="bg-white border-[2px] border-[#E6E6EBD9] text-[#30313A] px-10 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-sm text-[16px]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Explore the Ecosystem
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourJourney;
