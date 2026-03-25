import footerBg from "../assets/footer-bg.svg";
import leftPeople from "../assets/left-people.svg";
import rightPeople from "../assets/right-people.svg";
import playstore from "../assets/playstore.svg";
import appstore from "../assets/appstore.svg";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* --- Main Footer Hero --- */}
      <div className="relative w-full overflow-hidden bg-[#BD96FF] min-h-[450px] md:min-h-[500px] flex items-center justify-center">
        {/* Background Gradient/Pattern */}
        <img 
          src={footerBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        />

        {/* Floating People Illustrations */}
        {/* Hidden on mobile to ensure the "Coming Soon" text remains the focal point */}
        <img
          src={leftPeople}
          alt=""
          className="hidden lg:block absolute left-4 xl:left-12 top-1/2 -translate-y-1/2 z-10 w-[25%] max-w-[350px] object-contain"
        />
        <img
          src={rightPeople}
          alt=""
          className="hidden lg:block absolute right-4 xl:right-12 top-1/2 -translate-y-1/2 z-10 w-[25%] max-w-[350px] object-contain"
        />

        {/* Content Layer */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-4xl">
          <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-extrabold text-[#2D1B69] mb-3 tracking-tight leading-tight">
            You deserve to feel heard.
          </h2>
          <p className="text-[#3D2C7D] text-lg md:text-xl mb-10 font-medium">
            Peacechat is coming soon.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <a href="#" className="transition-transform active:scale-95 hover:scale-105">
              <img src={playstore} alt="Get it on Google Play" className="w-[180px] md:w-[220px] h-auto drop-shadow-lg" />
            </a>
            <a href="#" className="transition-transform active:scale-95 hover:scale-105">
              <img src={appstore} alt="Download on the App Store" className="w-[180px] md:w-[220px] h-auto drop-shadow-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* --- Dark Bottom Bar --- */}
      <div className="bg-[#1B164C] py-8 md:py-6 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Copyright: Bottom on mobile, Left on desktop */}
          <p className="text-white/60 text-sm order-3 md:order-1 font-light tracking-wide">
            Peacechat © 2026. All rights reserved.
          </p>

          {/* Logo: Top on mobile, Center on desktop */}
          <div className="order-1 md:order-2 flex justify-center">
            <img src={logo} alt="Peacechat" className="h-7 md:h-9 w-auto object-contain" />
          </div>

          {/* Links: Middle on mobile, Right on desktop */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-white/80 text-sm font-medium order-2 md:order-3">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </nav>

        </div>
      </div>
    </footer>
  );
}

export default Footer;