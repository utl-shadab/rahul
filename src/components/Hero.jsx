import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/logo1.svg";
import phone1 from "../assets/images/phone1.svg";
import phone2 from "../assets/images/phone2.svg";
import girl from "../assets/girl.svg";
import men from "../assets/men.svg";
import playstore from "../assets/playstore.svg";
import appstore from "../assets/appstore.svg";
import pinkPatch from "../assets/pink-patch.svg";
import bluePatch from "../assets/blue-patch.svg";
import lines from "../assets/lines.svg";
import yellowBrush from "../assets/yellow-brush.svg";
import borderRounded from "../assets/images/border-rounded.svg";
import StoreButton from "./Appstorebutton";
const Doodle = ({ d, size = 28, stroke = "#4B164C", className = "" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke={stroke}
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

/* doodle paths – lightweight inline SVGs, no extra asset files */
const doodlePaths = {
  camera:
    "M17 10h14a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H17a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3zm7 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
  cloud:
    "M12 28a6 6 0 0 1 0-12h1a8 8 0 0 1 15.6 2A6 6 0 0 1 36 28z",
  heart:
    "M24 38s-14-8.2-14-18a7 7 0 0 1 14 0 7 7 0 0 1 14 0c0 9.8-14 18-14 18z",
  at:
    "M24 16a8 8 0 1 0 0 16c3 0 5.5-1.2 7-3m1 3v-16m0 0a16 16 0 1 0-4 15",
  musicNote:
    "M20 8v24a6 6 0 1 1-6-6h6m12-18v24a6 6 0 1 1-6-6h6",
  envelope:
    "M8 14l16 10 16-10M8 14v20h32V14H8z",
  sparkle:
    "M24 4v8m0 24v8M4 24h8m24 0h8M10 10l6 6m12 12 6 6M38 10l-6 6M14 34l-6 6",
  waveform:
    "M6 24h4l4-12 4 24 4-18 4 14 4-8 4 6h4",
};

function Hero() {
  const heroRef = useRef(null);
  const phonesRef = useRef(null);
  const textRef = useRef(null);
  const ctasRef = useRef(null);
  const girlRef = useRef(null);
  const menRef = useRef(null);
  const navRef = useRef(null);
  const badgeRef = useRef(null);
  const doodlesLeftRef = useRef(null);
  const doodlesRightRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      /* ── initial hidden state ── */
      gsap.set(
        [
          navRef.current,
          textRef.current,
          badgeRef.current,
          ctasRef.current,
          phonesRef.current,
          girlRef.current,
          menRef.current,
        ],
        { opacity: 0, y: 40 }
      );
      gsap.set([doodlesLeftRef.current, doodlesRightRef.current], {
        opacity: 0,
        scale: 0.7,
      });

      /* ── orchestrated entrance timeline ── */
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });

      tl.to(navRef.current, { opacity: 1, y: 0, duration: 0.7 })
        .to(textRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.35")
        .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.35")
        .to(
          phonesRef.current,
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
          "-=0.45"
        )
        .to(
          girlRef.current,
          { opacity: 1, y: 0, duration: 0.9, ease: "back.out(1.4)" },
          "-=0.7"
        )
        .to(
          menRef.current,
          { opacity: 1, y: 0, duration: 0.9, ease: "back.out(1.4)" },
          "-=0.7"
        )
        .to(
          [doodlesLeftRef.current, doodlesRightRef.current],
          { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)" },
          "-=0.6"
        );

      /* ── continuous floating for phones ── */
      gsap.to(".hero-phone-1", {
        y: -14,
        duration: 3.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".hero-phone-2", {
        y: -10,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.5,
      });

      /* ── girl / men gentle float ── */
      gsap.to(girlRef.current, {
        y: "-=16",
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(menRef.current, {
        y: "-=14",
        duration: 3.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.6,
      });

      /* ── doodle elements gentle float & rotate ── */
      gsap.utils.toArray(".hero-doodle").forEach((el, i) => {
        gsap.to(el, {
          y: `-=${8 + (i % 3) * 4}`,
          rotation: (i % 2 === 0 ? 6 : -6),
          duration: 2.8 + i * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.2,
        });
      });

      /* ── parallax-like mouse-move for desktop ── */
      mm.add("(min-width: 1024px)", () => {
        const handleMove = (e) => {
          const { clientX, clientY } = e;
          const xPercent = (clientX / window.innerWidth - 0.5) * 2;
          const yPercent = (clientY / window.innerHeight - 0.5) * 2;

          gsap.to(".hero-phone-1", {
            x: xPercent * 8,
            y: yPercent * 6 - 7,
            duration: 1.2,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(".hero-phone-2", {
            x: xPercent * -6,
            y: yPercent * 5 - 5,
            duration: 1.2,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(girlRef.current, {
            x: xPercent * -12,
            y: yPercent * 8,
            duration: 1.4,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(menRef.current, {
            x: xPercent * 12,
            y: yPercent * 8,
            duration: 1.4,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(".hero-doodle", {
            x: (i) => xPercent * (6 + i * 2) * (i % 2 === 0 ? 1 : -1),
            y: (i) => yPercent * (4 + i * 1.5),
            duration: 1.6,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden w-full"
      style={{
        background:
          "radial-gradient(140% 120% at 20% 10%, #f7f3ff 0%, #f3e9ff 40%, #fce9f2 70%, #fde4ec 85%, #ffe8ed 100%)",
        fontFamily: "'Kumbh Sans', sans-serif",
      }}
    >
      {/* ─── Background patches ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={bluePatch}
          alt=""
          className="absolute top-[-2rem] left-[-3rem] w-[22rem] opacity-70"
        />
        <img
          src={pinkPatch}
          alt=""
          className="absolute bottom-[-4rem] right-[-4rem] w-[26rem] opacity-70"
        />
        <img
          src={lines}
          alt=""
          className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 w-[86rem] max-w-none opacity-50"
        />
      </div>

      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 pt-7 pb-0">
        <nav ref={navRef} className="flex justify-start mb-8 md:mb-12 lg:mb-14">
          <img
            src={logo}
            alt="Peacechat"
            className="h-9 sm:h-10 md:h-11 lg:h-12"
          />
        </nav>

        <div className="max-w-[1140px] mx-auto flex flex-col items-center text-center">
          {/* Heading */}
          <div ref={textRef} className="flex flex-col items-center gap-1">
            <h1 className="text-[2.5rem] sm:text-[2rem] md:text-[2.8rem] lg:text-[2.8rem] font-bold leading-[1.08] tracking-tight text-[#1a1a1a]">
              TALK.
              <br />
              FEEL.{" "}
              <span className="relative inline-block">
                <span className="text-pink">HEAL.</span>
                <img
                  src={yellowBrush}
                  alt=""
                  className="absolute left-0 bottom-[-0.15em] w-full h-auto pointer-events-none"
                />
              </span>
            </h1>
          </div>

          <p className="mt-4 sm:mt-5 text-[0.95rem] sm:text-base md:text-lg leading-relaxed text-[#3a3a3a] max-w-6xl">
            When life feels heavy, you don&apos;t have to carry it alone.
            <br className="hidden sm:block" />
            Connect with trusted listeners, dating coaches, and influencers
            &ndash; privately and safely.
          </p>

          <div ref={ctasRef} className="flex max-w-6xl w-full  flex-col items-center mt-6 sm:mt-7 relative gap-3">
            <div
              ref={badgeRef}
              className="inline-flex items-center px-6 py-2 z-1 bg-[#F3EAFF] backdrop-blur-sm"
            >
              <span className="text-sm sm:text-base font-semibold  text-[#4B164C] tracking-wide">
                India&apos;s First Relationship Support App
              </span>
            </div>
            <img src={borderRounded} alt="" className="absolute hidden sm:block max-w-[472px] h-[50px] w-full top-0 left-1/2 -translate-x-1/2 z-0 h-full pointer-events-none" />
            <div className="flex items-center flex-wrap sm:flex-nowrap justify-center gap-3  z-1">
              <StoreButton store="playstore"  href="https://play.google.com/store/apps/details?id=com.peacechat.app"    />
              <StoreButton store="appstore"  href="https://apps.apple.com/in/app/peacechat/id6750180074"    />
            </div>
          </div>
          <div className="relative w-full mt-6 sm:mt-8 md:mt-10">
            <div
              ref={doodlesLeftRef}
              className="hidden lg:block absolute left-[2%] xl:left-[4%] top-[5%] w-[10rem] h-[20rem] pointer-events-none"
            >
              <Doodle
                d={doodlePaths.camera}
                size={32}
                stroke="#4B164C"
                className="hero-doodle absolute top-0 left-2"
              />
              <Doodle
                d={doodlePaths.cloud}
                size={36}
                stroke="#7B3F7D"
                className="hero-doodle absolute top-[4.5rem] left-8"
              />
              <Doodle
                d={doodlePaths.heart}
                size={22}
                stroke="#F9629A"
                className="hero-doodle absolute top-[3rem] right-0"
              />
              <Doodle
                d={doodlePaths.at}
                size={28}
                stroke="#4B164C"
                className="hero-doodle absolute bottom-[4rem] left-0"
              />
              <Doodle
                d={doodlePaths.sparkle}
                size={18}
                stroke="#D4A5D6"
                className="hero-doodle absolute top-[8rem] left-2"
              />
            </div>

            {/* Doodles*/}
            <div
              ref={doodlesRightRef}
              className="hidden lg:block absolute right-[2%] xl:right-[4%] top-[5%] w-[10rem] h-[20rem] pointer-events-none"
            >
              <Doodle
                d={doodlePaths.musicNote}
                size={28}
                stroke="#7B3F7D"
                className="hero-doodle absolute top-2 right-2"
              />
              <Doodle
                d={doodlePaths.envelope}
                size={30}
                stroke="#4B164C"
                className="hero-doodle absolute top-[4rem] right-6"
              />
              <Doodle
                d={doodlePaths.sparkle}
                size={20}
                stroke="#F9629A"
                className="hero-doodle absolute top-[2.5rem] left-2"
              />
              <Doodle
                d={doodlePaths.waveform}
                size={32}
                stroke="#D4A5D6"
                className="hero-doodle absolute bottom-[5rem] right-0"
              />
              <Doodle
                d={doodlePaths.heart}
                size={20}
                stroke="#4B164C"
                className="hero-doodle absolute bottom-[3rem] left-4"
              />
            </div>

            {/* Girl */}
            <img
              ref={girlRef}
              src={girl}
              alt="Listener"
              className="hidden lg:block absolute left-[6%] xl:left-[10%] bottom-[8%] w-[10rem] xl:w-[11rem] drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-full z-[5]"
            />

            {/* Men */}
            <img
              ref={menRef}
              src={men}
              alt="Listener"
              className="hidden lg:block absolute right-[6%] xl:right-[10%] bottom-[8%] w-[10rem] xl:w-[11rem] drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-full z-[5]"
            />

            {/* Phone */}
            <div
              ref={phonesRef}
              className="relative flex items-end justify-center mx-auto w-full max-w-[36rem] md:max-w-[40rem]"
            >
              {/* Phone 1 */}
              <img
                src={phone1}
                alt="App Preview"
                className="hero-phone-1 relative z-20 w-[48%] sm:w-[46%] md:w-[45%] drop-shadow-[0_30px_80px_rgba(75,22,76,0.22)]"
              />
              {/* Phone 2  */}
              <img
                src={phone2}
                alt="Profile Preview"
                className="hero-phone-2 relative z-10 w-[48%] sm:w-[46%] md:w-[45%] -ml-[12%] sm:-ml-[10%] translate-y-[0.5rem] drop-shadow-[0_24px_70px_rgba(75,22,76,0.18)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
