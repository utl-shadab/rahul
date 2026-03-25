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
import step1 from "../assets/icons/step-1.svg";
import step2 from "../assets/icons/step-2.svg";
import step3 from "../assets/icons/step-3.svg";
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Step 1",
    desc: "Browse verified listeners, dating coaches & influencers",
    icon: (
      <img src={step1} alt="" />
    ),
  },
  {
    title: "Step 2",
    desc: "Choose chat or call session",
    icon: (
      <img src={step2} alt="" />
    ),
  },
  {
    title: "Step 3",
    desc: "Talk freely. Feel lighter. Heal faster.",
    icon: (
      <img src={step3} alt="" />
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
        className="how-card bg-[#E7C9E7] relative border-2 border-[#4B164C] sm:p-10 p-5 flex flex-col items-center text-center gap-6 shadow-[12px_12px_0_0_#4B164C] hover:shadow-[16px_16px_0_0_#4B164C] transition-shadow duration-300 w-full h-[260px] sm:min-h-[380px] z-10"
      >
        <div className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
          {step.icon}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl sm:text-3xl font-bold text-[#4B164C]">{step.title}</h3>
          <p className="text-sm sm:text-lg font-medium text-[#4B164C]/80 leading-snug">
            {step.desc}
          </p>
        </div>
      </div>
      {/* Connector Line */}
      <div
        ref={lineRef}
        className="how-line w-0.5 h-[100px] sm:h-32 bg-[#4B164C] origin-top mt-[-2px] z-0"
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
            className="absolute left-1 top-20 rotate-90 sm:rotate-0 sm:left-[26%] sm:top-[20px] w-16 sm:w-24"
          />
          <div className="text-center">
            <h2 className="text-[28px] sm:text-[40px] md:text-[42px] font-bold text-[#4B164C] tracking-tight">
              HOW PEACECHAT
            </h2>
            <div className="relative inline-block">
              <span className="text-[28px] sm:text-[40px] md:text-[42px] font-black text-pink tracking-wide">
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
            className="absolute -right-3 top-10 sm:right-[30%] sm:bottom-[-20px] w-16 sm:w-20 opacity-80"
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
