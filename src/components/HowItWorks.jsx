import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import yellowBrush from "../assets/yellow-brush.svg";
import shape1 from "../assets/shape1.svg";
import shape2 from "../assets/shape2.svg";
import shape3 from "../assets/shape3.svg";
import shape4 from "../assets/shape4.svg";
import arrow from "../assets/arrow.svg";
import locker from "../assets/locker.svg";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Step 1",
    desc: "Browse verified listeners, dating coaches & influencers",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4C18.4772 4 14 8.47715 14 14C14 19.5228 18.4772 24 24 24Z" stroke="#4B164C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42 44C42 36.268 33.9411 30 24 30C14.0589 30 6 36.268 6 44" stroke="#4B164C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="38" cy="12" r="6" fill="#F9629A" fillOpacity="0.2" stroke="#F9629A" strokeWidth="2"/>
        <path d="M36 12L37.5 13.5L40 10.5" stroke="#F9629A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Step 2",
    desc: "Choose chat or call session",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 12C42 16.4183 34.8366 20 26 20C17.1634 20 10 16.4183 10 12C10 7.58172 17.1634 4 26 4C34.8366 4 42 7.58172 42 12Z" stroke="#4B164C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12V36C10 40.4183 17.1634 44 26 44C34.8366 44 42 40.4183 42 36V12" stroke="#4B164C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 24C10 28.4183 17.1634 32 26 32C34.8366 32 42 28.4183 42 24" stroke="#4B164C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="18" r="6" fill="#F9629A" fillOpacity="0.2" stroke="#F9629A" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Step 3",
    desc: "Talk freely. Feel lighter. Heal faster.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 42C24 42 6 32.1111 6 15C6 10.5817 9.58172 7 14 7C16.8906 7 19.4071 8.52904 20.8 10.8406C22.1929 8.52904 24.7094 7 27.6 7C32.0183 7 35.6 10.5817 35.6 15C35.6 32.1111 17.6 42 17.6 42" stroke="#4B164C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 18L30 30M30 18L18 30" stroke="#F9629A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        <circle cx="38" cy="38" r="6" fill="#F9629A" fillOpacity="0.2" stroke="#F9629A" strokeWidth="2"/>
      </svg>
    ),
  },
];

const LeafCard = ({ step, index }) => {
  const cardRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    
    const onMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dx = (x - rect.width / 2) / (rect.width / 2);
      const dy = (y - rect.height / 2) / (rect.height / 2);

      gsap.to(card, {
        rotateY: dx * 8,
        rotateX: -dy * 8,
        x: dx * 10,
        y: dy * 10,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const onMouseLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      });
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="flex flex-col items-center group relative w-full sm:w-[320px]">
      <div 
        ref={cardRef}
        style={{ 
          borderRadius: "100px 0 100px 0",
          transformStyle: "preserve-3d"
        }}
        className="how-card relative bg-[#E7C9E7] border-2 border-[#4B164C] p-10 flex flex-col items-center text-center gap-6 shadow-[12px_12px_0_0_#4B164C] hover:shadow-[16px_16px_0_0_#4B164C] transition-shadow duration-300 w-full min-h-[380px] z-10"
      >
        <div className="w-20 h-20 rounded-full bg-white/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
          {step.icon}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold text-[#4B164C]">{step.title}</h3>
          <p className="text-lg font-medium text-[#4B164C]/80 leading-snug">
            {step.desc}
          </p>
        </div>
      </div>
      {/* Connector Line */}
      <div 
        ref={lineRef}
        className="how-line w-0.5 h-32 bg-[#4B164C] origin-top mt-[-2px] z-0"
      />
    </div>
  );
};

function HowItWorks() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from(".how-card", {
        opacity: 0,
        y: 100,
        rotateX: -20,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      gsap.from(".how-line", {
        scaleY: 0,
        stagger: 0.2,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="pt-32 pb-20 px-6 sm:px-10 bg-[#F7F4FF] relative overflow-hidden"
    >
      {/* Background Shapes */}
      <img src={shape1} alt="" className="absolute left-0 top-0 opacity-40 select-none" />
      <img src={shape2} alt="" className="absolute right-0 top-0 opacity-40 select-none" />
      <img src={shape3} alt="" className="absolute left-[-5%] bottom-0 opacity-30 select-none scale-150" />
      <img src={shape4} alt="" className="absolute right-[-5%] bottom-0 opacity-30 select-none scale-150" />

      <div ref={containerRef} className="max-w-[1240px] mx-auto relative z-10">
        <div className="relative mb-24 flex flex-col items-center">
          <img 
            src={arrow} 
            alt="" 
            className="absolute left-[15%] top-[-40px] w-24 sm:w-32 opacity-80" 
          />
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4B164C] tracking-tight">
              HOW PEACECHAT
            </h2>
            <div className="relative mt-2 inline-block">
              <span className="text-4xl sm:text-5xl md:text-6xl font-black text-pink italic tracking-wide">
                WORKS
              </span>
              <img
                src={yellowBrush}
                alt=""
                className="absolute -bottom-3 left-0 w-full h-auto -z-1"
              />
            </div>
          </div>
          <img 
            src={locker} 
            alt="" 
            className="absolute right-[15%] bottom-[-20px] w-16 sm:w-20 opacity-80" 
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start lg:gap-14 md:gap-8 gap-16">
          {steps.map((step, index) => (
            <LeafCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
