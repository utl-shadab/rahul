import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assets
import centermob from "../assets/images/centermob.svg";
import yellowBrush from "../assets/yellow-brush.svg";

// Icons
import earIcon from "../assets/icons/ear.svg";
import emotionIcon from "../assets/icons/emotion.svg";
import hourIcon from "../assets/icons/hour.svg";
import influencerIcon from "../assets/icons/influencer.svg";
import pressurIcon from "../assets/icons/pressur.svg";
import secureIcon from "../assets/icons/secure.svg";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  { title: "Half-hourly flexible sessions", color: "bg-[#8A98D6]", position: "lg:top-[30%] lg:left-[18%]", icon: hourIcon },
  { title: "Influencer & celebrity access", color: "bg-[#FAA9F0]", position: "lg:top-[30%] lg:right-[18%]", icon: influencerIcon },
  { title: "Safe emotional space", color: "bg-[#EBE166]", position: "lg:top-[50%] lg:left-[5%]", icon: emotionIcon },
  { title: "Verified listeners", color: "bg-[#96CCF4]", position: "lg:top-[50%] lg:right-[5%]", icon: earIcon },
  { title: "Private & secure conversations", color: "bg-[#F7BB63]", position: "lg:top-[70%] lg:left-[10%]", icon: secureIcon },
  { title: "No judgment. No pressure.", color: "bg-[#C9CD6C]", position: "lg:top-[70%] lg:right-[10%]", icon: pressurIcon },
];

const WhyPeacechat = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024;

      // 1. Header Reveal
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
        .from(".reveal-text", { y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: "expo.out" })
        .from(".brush-stroke", { scaleX: 0, transformOrigin: "left", duration: 0.8 }, "-=0.6");



      // 3. Cards Entrance & Floating
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
          }
        });

        if (!isMobile) {
          gsap.to(card, {
            y: "random(-15, 15)",
            x: "random(-10, 10)",
            rotation: "random(-1, 1)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen lg:min-h-[140vh] bg-white pt-16 pb-12 lg:pb-0 overflow-hidden flex flex-col items-center font-kumbh"
    >
      {/* HEADER SECTION - Pixel Perfect Typography */}
      <div className="w-full max-w-7xl px-6 lg:px-12 z-50 text-left mb-10">
        <h2 className="reveal-text text-[28px] sm:text-[42px]   font-bold text-[#202020] leading-[1.1] tracking-[-0.02em] uppercase">
          WHY PEACECHAT?
        </h2>

        <div className="flex flex-wrap items-center gap-x-4 lg:gap-x-6">
          <div className="relative inline-block reveal-text">
            <span className="text-[28px] sm:text-[42px]   font-bold text-pink leading-[1.1] tracking-[-0.02em] uppercase whitespace-nowrap">
              A SAFE SPACE.
            </span>
            <img
              src={yellowBrush}
              alt=""
              className="brush-stroke absolute -bottom-1 lg:-bottom-2 left-0 w-full h-[15px] lg:h-[22px] -z-10 object-fill opacity-90"
            />
          </div>
          <span className="reveal-text text-[28px] sm:text-[42px]   font-bold text-[#202020] leading-[1.1] tracking-[-0.02em] uppercase whitespace-nowrap">
            ON YOUR TERMS.
          </span>
        </div>

        <p className="reveal-text mt-8 text-lg sm:text-xl  text-[#2F2F2F] font-medium max-w-2xl leading-relaxed">
          This isn&apos;t <span className="text-pink">social media</span>. This is emotional support — <span className="text-pink">redesigned.</span>
        </p>
      </div>
      <div className="relative w-full max-w-[1440px] flex flex-col items-center justify-end h-auto lg:h-[900px] mt-auto px-4 lg:px-6">

        {/* Phone: Fixed bottom on Desktop */}
        <div className="central-phone relative lg:absolute bottom-0 z-40 w-[90%] max-w-[280px] sm:max-w-[400px] lg:max-w-[626px]  mb-12 lg:mb-0 transition-transform duration-700 hover:scale-[1.01] mx-auto origin-bottom">
          <img
            src={centermob}
            alt="App Interface"
            className="w-full h-auto drop-shadow-2xl lg:drop-shadow-[0_20px_100px_rgba(0,0,0,0.1)]"
          />
        </div>

        {/* Desktop Cards (Floating) */}
        <div className="hidden lg:block absolute inset-0 z-50 pointer-events-none mt-[-100px]">
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`absolute ${card.position} pointer-events-auto group`}
            >
              <div className={`${card.color} flex items-center gap-5 px-8 py-3 rounded-[16px] transition-all duration-500 group-hover:scale-105`}>
                <div className="w-12 h-12 flex items-center justify-center  group-hover:rotate-6 transition-transform shadow-inner">
                  <img src={card.icon} alt="" className="w-10 h-10 object-contain" />
                </div>
                <span className="text-white  text-base tracking-tight whitespace-nowrap">{card.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards: Vertical Stack for best feel */}
        <div className="lg:hidden w-full max-w-[480px] flex flex-col gap-4 z-50 order-2">
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx + cardsData.length] = el)}
              className={`${card.color} flex items-center gap-4 p-5 rounded-[22px] shadow-xl border border-white/10`}
            >
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/20 rounded-xl">
                <img src={card.icon} className="w-6 h-6 object-contain" alt="" />
              </div>
              <span className="text-white font-bold text-base leading-tight">{card.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPeacechat;