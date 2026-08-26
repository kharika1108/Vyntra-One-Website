import React from 'react';
import phone1 from './assets/Phone-1.jpg';
import phone2 from './assets/Phone-2.png';
import phone3 from './assets/Phone-3.png';
import bgVector1 from './assets/bg-vector.png';
import bgVector2 from './assets/bg-vector2.png';
import Logo from './assets/LOGO BG.jpg.jpeg';
import Group1 from './assets/Group-1.png';
import Group2 from './assets/Group-2.png';
import Group3 from './assets/Group-3.png';
import Group4 from './assets/Group-4.png';
import Group5 from './assets/Group-5.png';
import GraduationCap from './assets/GraduationCap.png';
import Achievement from './assets/achievement-icon1.png';
import QuizIcon from './assets/quiz-icon1.png';

import Pinned from './assets/Pin-1.png'
import LearningPaths from './components/LearningPaths';
import JobPortal from './components/JobPortal';
import YourJourney from './components/YourJourney';

import CTASection from './components/CTASection';
import ReferralCard from './components/ReferralCard';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


const steps = [
  {
    number: "01",
    title: "Structured Courses",
    description: "Industry-relevant courses designed by experts to build in-demand skills.",
    colorText: "text-[#6B46C1]  ",
    bgColor: "bg-[#F4F0FF]",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>,
    isPinnedRight: true,
    rotateClass: "-rotate-9"
  },
  {
    number: "02",
    title: "Practice & Assess",
    description: "Hands-on assignments, quizzes and tests to evaluate and improve your skills.",
    colorText: "text-[#10B981]",
    bgColor: "bg-[#ECFDF5]",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
  },
  {
    number: "03",
    title: "Live Classes",
    description: "Learn live from industry experts and get your queries resolved instantly.",
    colorText: "text-[#EA580C]",
    bgColor: "bg-[#FFF7ED]",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
  },
  {
    number: "04",
    title: "Engage & Connect",
    description: "Join discussions, collaborate with peers and grow together in a learning community.",
    colorText: "text-[#0284C7]",
    bgColor: "bg-[#F0F9FF]",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
  },
  {
    number: "05",
    title: "Achieve & Earn",
    description: "Earn certificates, badges and rewards as you achieve new milestones.",
    colorText: "text-[#D97706]",
    bgColor: "bg-[#FEFCE8]",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
  },
  {
    number: "06",
    title: "Compete & Lead",
    description: "Climb leaderboards, compete with top learners and showcase your excellence.",
    colorText: "text-[#DB2777]",
    bgColor: "bg-[#FDF2F8]",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
  },
  {
    number: "07",
    title: "Refer & Earn",
    description: "Invite friends using your referral code and earn exciting rewards together.",
    colorText: "text-[#0D9488]",
    bgColor: "bg-[#F0FDFA]",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
  },
  {
    number: "08",
    title: "Career Ready",
    description: "Build your resume, explore job opportunities and take the next step in your career.",
    colorText: "text-[#4F46E5]",
    bgColor: "bg-[#F4F0FF]",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>,
    isPinnedLeft: true,
    rotateClass: "rotate-[8deg]"
  }
];

const StepCard = ({ number, title, description, colorText, bgColor, icon, isPinnedRight, isPinnedLeft, rotateClass }) => (
  <div className={`relative bg-white p-[10px] rounded-[32px] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] w-[250px] flex-shrink-0 ${rotateClass || ''} hover:-translate-y-2 transition-transform duration-300 z-10`}>
    {(isPinnedLeft || isPinnedRight) && (
      <div className={`absolute -top-2 ${isPinnedLeft ? '-left-4' : 'right-0'} w-14 h-14 z-20`}>
        <img src={Pinned} className="w-[89px] h-[80px]object-contain" alt="Pin" />
      </div>
    )}
    <div className={`w-[230px] h-[175px] rounded-[24px] p-5 flex flex-col ${bgColor}`}>
      <div className="flex justify-between items-start mb-2">
        <span className={`text-[40px] font-light ${colorText} leading-none`} style={{ fontFamily: '"Handlee", cursive', fontWeight: 400, fontStyle: "normal", fontSize: "40px" }}>{number}</span>
        <div className={`${colorText} mt-1`}>{icon}</div>
      </div>
      <h4 className="text-[20px] font-bold text-gray-900 mb-2" style={{ fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif' }}>{title}</h4>
      <p className="text-[14px] text-gray-600 leading-relaxed font-medium">{description}</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center pt-12 bg-[#FFFFFF]">
      {/* Background Vector Graphics */}
      <img src={bgVector1} alt="" className="absolute top-[15%] right-0 w-[40vw] max-w-[800px] z-0 pointer-events-none opacity-80" />
      <img src={bgVector2} alt="" className="absolute top-[13%] left-0 w-[45vw] max-w-[800px] z-0 pointer-events-none opacity-80" />

      {/* Top Badge */}
      <div
        className="flex items-center gap-3 backdrop-blur-sm px-1.5 py-1 rounded-full border border-gray-200 shadow-sm mb-10 z-10"
        style={{ background: 'linear-gradient(148.25deg, #FAF5DB 2.92%, rgba(255, 255, 255, 0.33) 80.89%)' }}
      >
        <span style={{ fontFamily: 'Inter', fontWeight: 700, fontStyle: 'Bold', fontSize: '10px', color: '#1B4B8F' }} className="pl-3">CAREER-FIRST TECH EDUCATION</span>
        <a href="#" style={{ fontFamily: 'Inter', fontWeight: 400, fontStyle: 'Regular', fontSize: '11px', color: '#000000' }} className="flex items-center gap-1 bg-[#F5A624] hover:bg-amber-600 px-3 py-1 rounded-full transition-colors">
          Check it out
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>

      {/* Hero Text */}
      <h1 style={{ fontFamily: 'Outfit', fontWeight: 500, fontSize: '65px', color: '#000000' }}>
        Learn. Build. Get hired.
      </h1>
      <p style={{ fontFamily: 'Poppins', fontWeight: 275, fontStyle: 'ExtraLight', fontSize: '15px', color: '#000000' }} className="max-w-[42rem] text-center mb-10 leading-relaxed px-4 z-10">
        VyntraOne pairs project-based courses with a real hiring pipeline — so what you
        <br className="hidden md:block" />
        ship is what gets you hired, not a certificate that just says you learned.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 z-10">
        <button style={{ fontFamily: 'Inter', fontWeight: 700, fontStyle: 'Bold', fontSize: '13px', color: '#FFFFFF' }} className="bg-[#0A2647] hover:bg-[#1E2B43] px-6 py-3 rounded-full shadow-lg transition-all w-full sm:w-auto">
          Start Your Journey
        </button>
        <button style={{ fontFamily: 'Inter', fontWeight: 700, fontStyle: 'Bold', fontSize: '13px', color: '#0A2647' }} className="flex items-center justify-center gap-2 bg-transparent border border-[#1B3459] hover:[#1B3459]/50 px-6 py-3 rounded-full transition-all w-full sm:w-auto">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          See how hiring works
        </button>
      </div>

      {/* Phones Section */}
      <div className="relative w-full max-w-6xl h-[650px] flex justify-center items-start mt-2 [clip-path:polygon(-100%_-100%,_200%_-100%,_200%_100%,_-100%_100%)]">
        {/* Blurred Colored Glows (Ellipses) */}
        <div className="absolute top-[15%] left-1/2 -translate-x-[350px] w-[445px] h-[445px] bg-[#76B3FF] rounded-full pointer-events-none" style={{ filter: 'blur(200px)', zIndex: 0 }} />
        <div className="absolute top-[5%] left-1/2 translate-x-[50px] w-[400px] h-[250px] bg-[#FEC453] rounded-full pointer-events-none" style={{ filter: 'blur(150px)', zIndex: 0 }} />

        {/* Phones container with relative positioning */}
        <div className="relative w-full h-full overflow-hidden flex justify-center">
          {/* Left Phone */}
          <div className="absolute w-[500px] transform -rotate-[12deg] -translate-x-[240px] translate-y-[56px]" style={{ zIndex: 10 }}>
            <img
              src={phone1}
              alt="Live Classes View"
              className="relative w-full mix-blend-multiply"
            />
          </div>

          {/* Right Phone */}
          <div className="absolute w-[500px] transform rotate-[12deg] translate-x-[260px] translate-y-[56px]" style={{ zIndex: 10 }}>
            <img
              src={phone2}
              alt="Jobs View"
              className="relative w-full mix-blend-multiply"
            />
          </div>

          {/* Center Phone - Opaque to block side phones */}
          <img
            src={phone3}
            alt="Main Dashboard View"
            className="absolute w-[300px] rounded-[3rem] shadow-2xl transform translate-y-[16px]"
            style={{ zIndex: 20 }}
          />
        </div>

        {/* Bottom Fade and Side Layer Blurs for Phones */}
        <div className="absolute bottom-0 left-0 right-0 h-[280px] bg-gradient-to-t from-white via-white/90 to-transparent z-30 pointer-events-none" />

        {/* Side Layer Blurs */}
        <div className="absolute -bottom-10 -left-10 w-[250px] h-[400px] bg-white rounded-full filter blur-[70px] z-30 pointer-events-none opacity-90" />
        <div className="absolute -bottom-10 -right-10 w-[250px] h-[300px] bg-white rounded-full filter blur-[60px] z-30 pointer-events-none opacity-70" />
        <div className="absolute bottom-[-240px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white rounded-[100%] filter blur-[80px] z-30 pointer-events-none" />
      </div>

      {/* Bottom Section */}
      <div className="mt-3 max-w-4xl text-center px-4 z-40 relative">
        <h2 style={{ fontFamily: '"Sk-Modernist"', fontWeight: 400, fontStyle: 'normal', fontSize: '50px', color: '#15130F' }}>
          Learning shouldn't stop at the <span style={{ fontFamily: '"Playfair Display"', fontWeight: 400, fontStyle: 'italic', fontSize: '50px', color: '#243E5C' }}>lesson.</span>
        </h2>
        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontStyle: 'Regular', fontSize: '14px', color: '#544E42' }} className="mb-12 max-w-[42rem] mx-auto mt-4">
          Most platforms end at the video. Vyntra is built around the idea that learning should carry all the way through — from acquiring a new skill, to proving it, to being recognized for it, to actually using it to move your career forward.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          <span style={{ fontFamily: 'Inter', fontWeight: 700, fontStyle: 'Bold', fontSize: '13px', color: '#544E42' }} className="px-6 py-2.5 rounded-full border border-[#15130F1A] bg-white shadow-sm hover:shadow-md transition-all cursor-default">Structured Courses</span>
          <span style={{ fontFamily: 'Inter', fontWeight: 700, fontStyle: 'Bold', fontSize: '13px', color: '#544E42' }} className="px-6 py-2.5 rounded-full border border-[#15130F1A] bg-white shadow-sm hover:shadow-md transition-all cursor-default">Practical Assessments</span>
          <span style={{ fontFamily: 'Inter', fontWeight: 700, fontStyle: 'Bold', fontSize: '13px', color: '#544E42' }} className="px-6 py-2.5 rounded-full border border-[#15130F1A] bg-white shadow-sm hover:shadow-md transition-all cursor-default">Expert Mentorship</span>
          <span style={{ fontFamily: 'Inter', fontWeight: 700, fontStyle: 'Bold', fontSize: '13px', color: '#544E42' }} className="px-6 py-2.5 rounded-full border border-[#15130F1A] bg-white shadow-sm hover:shadow-md transition-all cursor-default">Career Support</span>
        </div>
      </div>

      {/* Feature Section Background Wrapper */}
      <div className="w-full bg-gradient-to-b from-white to-[#F2F2F2] pt-20 pb-10">
        {/* Feature Section */}
        <div className="w-full max-w-[1368px] mx-auto px-8 md:px-16 lg:px-[125px] lg:pl-20 flex flex-col lg:flex-row items-center justify-between relative z-10 overflow-hidden lg:overflow-visible">

          {/* Left Column - Text */}
          <div className="w-full lg:w-[60%] flex flex-col items-start transform -translate-y-4 lg:-translate-y-5">
            <h3 style={{ fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 590, fontStyle: 'normal', fontSize: '55px', color: '#ABABAB' }}>
              Better learning
            </h3>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <h3 style={{ fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 590, fontStyle: 'normal', fontSize: '55px', color: '#ABABAB' }}>
                experiences
              </h3>
              {/* Placeholder for 3D icons */}
              <div className="flex items-center -space-x-3 sm:-space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center z-10">
                  <img src={GraduationCap} />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center z-10">
                  <img src={Achievement} />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center z-10">
                  <img src={QuizIcon} />
                </div>
              </div>
              <h3 style={{ fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 590, fontStyle: 'normal', fontSize: '55px', color: '#000000' }}>
                with
              </h3>
            </div>
            <h3 style={{ fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 590, fontStyle: 'normal', fontSize: '55px', color: '#000000' }}>
              Vyntra One
            </h3>
            <h3 style={{ fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 590, fontStyle: 'normal', fontSize: '55px', color: '#ABABAB' }}>
              everything you need,
            </h3>
            <div className="flex flex-wrap items-center gap-4 mt-3">
              {/* Custom Toggle Switch */}
              <div className="w-[80px] sm:w-[100px] h-[40px] sm:h-[45px] bg-[#FF9414] rounded-full flex items-center p-1 sm:p-1.5 shadow-inner">
                <div className="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] bg-white rounded-full shadow-md ml-auto"></div>
              </div>
              <h3 style={{ fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 590, fontStyle: 'normal', fontSize: '55px', color: '#000000' }}>
                on platform.
              </h3>
            </div>
          </div>

          {/* Right Column - Circular Graphic */}
          <div className="w-full lg:w-[45%] h-[400px] lg:h-[600px] -right-[15%] relative flex items-center justify-center mt-16 lg:mt-0">
            {/* Rings */}
            <div className="absolute w-[250px] h-[250px] lg:w-[200px] lg:h-[200px] rounded-full border border-[#0A26471A]"></div>
            <div className="absolute w-[380px] h-[380px] lg:w-[350px] lg:h-[350px] rounded-full border border-[#0A26471A]"></div>
            <div className="absolute w-[510px] h-[510px] lg:w-[500px] lg:h-[500px] rounded-full border border-[#0A26471A]"></div>

            {/* Center Logo */}
            <div className="absolute w-[80px] h-[80px] lg:w-[80px] lg:h-[80px] bg-white rounded-full shadow-2xl flex items-center justify-center z-10">
              <img src={Logo} className='rounded-full' />
            </div>

            {/* Orbiting Icons (Positioned approximately) */}
            <div className="absolute top-[5%] right-[35%] w-[50px] h-[50px] bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-700">
              <img src={Group1} className='w-8 h-8' />
            </div>

            <div className="absolute top-[25%] left-[0%] w-[60px] h-[60px] bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-700 transform -rotate-12">
              <img src={Group2} className='w-8 h-8' />
            </div>

            <div className="absolute bottom-[30%] left-[15%] w-[60px] h-[60px] bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-700 transform rotate-12">
              <img src={Group3} className='w-8 h-8' />
            </div>

            <div className="absolute bottom-[25%] right-[20%] w-[60px] h-[60px] bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-700 transform -rotate-6">
              <img src={Group4} className='w-8 h-8' />
            </div>

            <div className="absolute top-[35%] right-[10%] w-[60px] h-[60px] bg-white rounded-2xl shadow-lg flex items-center justify-center text-gray-700">
              <img src={Group5} className='w-8 h-8' />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full bg-[#F2F2F2] pb-8 relative overflow-hidden flex flex-col items-center">
        {/* Badge */}
        <div className="flex justify-center w-full mb-16 relative z-20">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-[#FFF9E6] border border-[#FDE08B] rounded-full shadow-sm">
            <svg className="w-[18px] h-[18px] text-[#F5A624]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
            <span className="text-[12px] font-bold text-[#D97706] tracking-widest uppercase">HOW IT WORKS</span>
          </div>
        </div>

        {/* Grid Container */}
        <div className="max-w-[1100px] mx-auto px-4 relative z-10 w-full">
          {/* Desktop dashed line connection */}
          <svg
            className="absolute pointer-events-none opacity-60 z-0 hidden lg:block overflow-visible"
            style={{
              width: '830px',
              height: '740px',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            viewBox="0 0 830 740"
            fill="none"
          >
            <path
              d="M 200,110 
                 Q 270,160 415,110 
                 Q 560,60 705,110 
                 C 750,100 800,380 705,350 
                 M 125,110 
                 C -100,110 -100,370 125,370 
                 Q 270,320 415,370 
                 Q 560,320 705,370 
                 M 690,410 
                 Q 487,450 270,470 
                 M 270,630 
                 Q 415,580 560,630"
              stroke="#777777"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
            />
          </svg>
          <div className="flex flex-wrap justify-center gap-10">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>


      {/* Learning Paths Section */}
      <LearningPaths />

      {/* Job Portal Section */}
      <JobPortal />

      {/* Your Journey Section */}
      <YourJourney />


        {/* Testimonials Section */}
        <Testimonials />

        {/* Referral Section */}
        <ReferralCard />

        {/* CTA Section */}
        <CTASection />
      </div>
      <Footer />

    </div>
  );
};


export default Home;