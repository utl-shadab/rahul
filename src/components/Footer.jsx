import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StoreButton from "./Appstorebutton.jsx";

import footerBg from "../assets/footer-bg.svg";
import leftPeople from "../assets/left-people.svg";
import rightPeople from "../assets/right-people.svg";
import logo from "../assets/logo.svg";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const leftPeopleRef = useRef(null);
  const rightPeopleRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax for Background
      gsap.to(bgRef.current, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax for Left People
      gsap.fromTo(
        leftPeopleRef.current,
        { y: "15%", x: "-5%" },
        {
          y: "-15%",
          x: "2%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Parallax for Right People
      gsap.fromTo(
        rightPeopleRef.current,
        { y: "10%", x: "5%" },
        {
          y: "-10%",
          x: "-2%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Cinematic content fade-up
      gsap.from(contentRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Subtle float animation for people
      gsap.to([leftPeopleRef.current, rightPeopleRef.current], {
        y: "+=15",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="w-full flex flex-col overflow-hidden" ref={containerRef}>

      <div className="relative w-full overflow-hidden bg-[#BD96FF] min-h-[500px] md:min-h-[650px] flex items-center justify-center py-20">

        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
        >
          <img
            src={footerBg}
            alt=""
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <img
            ref={leftPeopleRef}
            src={leftPeople}
            alt=""
            className="hidden lg:block absolute left-[-5%] xl:left-[2%] top-[20%] w-[35%] max-w-[450px] object-contain drop-shadow-2xl opacity-90"
          />
          <img
            ref={rightPeopleRef}
            src={rightPeople}
            alt=""
            className="hidden lg:block absolute right-[-5%] xl:right-[2%] top-[25%] w-[35%] max-w-[450px] object-contain drop-shadow-2xl opacity-90"
          />
        </div>
        <div
          ref={contentRef}
          className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-4xl"
        >


          <h2 className="text-[clamp(1.5rem,7vw,2.5rem)] font-black text-[#6B296D] mb-6 tracking-tight leading-[0.95] drop-shadow-sm">
            You deserve to feel heard.
          </h2>

          <p className="text-[#3D2C7D]/80 text-base mb-12 font-normal max-w-2xl leading-relaxed">
            Peacechat is coming soon.
          </p>

          <div className="flex flex-col sm:flex-row  items-center justify-center gap-5 md:gap-16 w-full sm:w-auto ">
            <StoreButton
              store="playstore"
              className="!min-w-[220px] !max-w-[220px] scale-110 md:scale-125"
            />
            <StoreButton
              store="appstore"
              className="!min-w-[220px] !max-w-[220px] scale-110 md:scale-125"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1B164C]/20 to-transparent pointer-events-none z-10" />
      </div>
      <div className="bg-[#1B164C] py-5 px-6 md:px-10 relative z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">

            {/* Copyright */}
            <div className="order-3 md:order-1 flex flex-col items-center md:items-start gap-2">
              <p className="text-white/60 text-sm font-light tracking-wide">
                Peacechat © 2026. All rights reserved.
              </p>
            </div>

            {/* Logo Center */}
            <div className="order-1 md:order-2 flex flex-col items-center gap-4">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl scale-75 group-hover:scale-100 transition-transform duration-500" />
                <img src={logo} alt="Peacechat" className="relative h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white text-sm   order-2 md:order-3">
              <a href="#" className="hover:text-white transition-all duration-300 hover:tracking-[0.2em]">Privacy</a>
              <a href="#" className="hover:text-white transition-all duration-300 hover:tracking-[0.2em]">Terms</a>
              <a href="#" className="hover:text-white transition-all duration-300 hover:tracking-[0.2em]">Contact</a>
            </nav>
          </div>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
