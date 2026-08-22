import React from 'react';
import Logo from '../assets/vyntra-mark.png';
import LogoName from '../assets/logo-plain.jpg';

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-[#0A2647] py-3 px-4 flex justify-center items-center gap-6">
        <div className="flex items-center gap-8">
          <span style={{fontFamily: 'Inter', fontWeight:400, fontStyle: 'Regular', fontSize: '11px', color: '#EAF0FA'}}>Next Full-Stack Career Track cohort opens Aug 18</span>
          <a href="#" style={{fontFamily: 'Inter', fontWeight: 700, fontStyle: 'Bold', fontSize: '11px', color: '#F5A623'}} className="hover:underline flex items-center ml-2">
            Reserve a seat <span className="ml-1">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-[#F5F7FBDB] py-2 px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <div className="flex items-center">
             <img src={Logo} className='w-full h-[28px]'/>
          </div>
          <img src={LogoName} className='w-full h-[48px]' />
        </div>

        {/* Links */}
        <div style={{fontFamily: 'Inter', fontWeight: 400, fontStyle: 'Regular', fontSize: '14px', color: '#43506A'}} className="hidden md:flex items-center gap-15">
          <a href="#" className="hover:text-[#03448E] transition-colors">How it Works</a>
          <a href="#" className="hover:text-[#03448E] transition-colors">Programs</a>
          <a href="#" className="hover:text-[#03448E] transition-colors">Courses</a>
          <a href="#" className="hover:text-[#03448E] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#03448E] transition-colors">About Us</a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" style={{fontFamily: 'Inter', fontWeight: 700, fontStyle: 'Bold', fontSize: '14px', color: '#0A2647'}}>Log in</a>
          <button style={{fontFamily: 'Inter', fontWeight: 700, fontStyle: 'Bold', fontSize: '13px', color: '#FFFFFF'}} className="bg-[#0B2748] px-5 py-2 rounded-2xl">
            Start Learning
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
