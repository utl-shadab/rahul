import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import icon1 from "../assets/1.svg";
import icon2 from "../assets/2.svg";
import icon3 from "../assets/3.svg";
import icon4 from "../assets/4.svg";
import icon5 from "../assets/5.svg";
import purple from "../assets/purple.svg";
import gray from "../assets/gray.svg";
import yellowBrush from "../assets/yellow-brush.svg";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { icon: icon1, text: "You're going through a breakup" },
  { icon: icon2, text: "You feel lonely" },
  { icon: icon3, text: "You need dating advice" },
  { icon: icon4, text: "You feel unheard in your relationship" },
  { icon: icon5, text: "You just want someone to talk to" },
];

function ForYou() {
  const sectionRef = useRef(null);
  const titleGroupRef = useRef(null);
  const textGroupRef = useRef(null);
  const cardsRef = useRef(null);
  const purpleRef = useRef(null);
  const grayRef = useRef(null);
  const brushRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ─── 1. DEEP PARALLAX ─── */
      gsap.to(purpleRef.current, {
        y: 120,
        x: -20,
        rotate: 6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(grayRef.current, {
        y: -140,
        x: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });

      /* ─── 2. TITLE - cinematic reveal ─── */
      const titleEls = gsap.utils.toArray(".for-you-title");
      titleEls.forEach((el) => {
        const parent = el.parentElement;
        if (parent && !parent.classList.contains("clip-mask-wrap")) {
          parent.style.overflow = "hidden";
        }
      });

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: titleGroupRef.current,
          start: "top 82%",
        },
      });

      titleTl
        .from(titleEls, {
          y: "110%",
          opacity: 0,
          duration: 1.1,
          stagger: 0.18,
          ease: "expo.out",
        })
        .from(
          brushRef.current,
          {
            scaleX: 0,
            opacity: 0,
            transformOrigin: "left center",
            duration: 1,
            ease: "expo.inOut",
          },
          "-=0.5"
        )
        .from(
          textGroupRef.current.children,
          {
            y: 40,
            opacity: 0,
            stagger: 0.14,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.6"
        );

      /* ─── 3. CARDS GRID ─── */
      const cardEls = gsap.utils.toArray(".for-you-card");

      gsap.set(cardEls, { transformOrigin: "bottom center" });

      gsap.from(cardEls, {
        y: 100,
        opacity: 0,
        scale: 0.88,
        rotateX: 12,
        filter: "blur(6px)",
        stagger: {
          each: 0.1,
          ease: "power2.inOut",
        },
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 86%",
        },
        onComplete: () => {
          gsap.set(cardEls, { filter: "none", clearProps: "rotateX" });
        },
      });

      /* ─── 4. CARD ICON ─── */
      cardEls.forEach((card, i) => {
        const icon = card.querySelector("img");
        if (!icon) return;

        gsap.to(icon, {
          y: -8,
          duration: 2.2 + i * 0.15,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.2,
        });
      });

      /* ─── 5. CARD MAGNETIC HOVER ─── */
      cardEls.forEach((card) => {
        const icon = card.querySelector("img");
        const text = card.querySelector("p");

        const onEnter = (e) => {
          const rect = card.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (e.clientX - cx) / rect.width;
          const dy = (e.clientY - cy) / rect.height;

          gsap.to(card, {
            x: dx * 10,
            y: dy * 10,
            rotateY: dx * 6,
            rotateX: -dy * 6,
            scale: 1.045,
            boxShadow: "0 30px 60px -12px rgba(0,0,0,0.18)",
            duration: 0.4,
            ease: "power2.out",
          });

          if (icon) {
            gsap.to(icon, {
              x: dx * 6,
              y: dy * 6,
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto",
            });
          }

          if (text) {
            gsap.to(text, {
              y: -3,
              duration: 0.35,
              ease: "power2.out",
            });
          }
        };

        const onMove = (e) => {
          const rect = card.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (e.clientX - cx) / rect.width;
          const dy = (e.clientY - cy) / rect.height;

          gsap.to(card, {
            x: dx * 10,
            y: dy * 10,
            rotateY: dx * 6,
            rotateX: -dy * 6,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });

          if (icon) {
            gsap.to(icon, {
              x: dx * 6,
              y: dy * 6,
              duration: 0.25,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        };

        const onLeave = () => {
          gsap.to(card, {
            x: 0,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            boxShadow: "none",
            duration: 0.6,
            ease: "elastic.out(1, 0.6)",
          });

          if (icon) {
            gsap.to(icon, {
              x: 0,
              y: 0,
              duration: 0.6,
              ease: "elastic.out(1, 0.6)",
              overwrite: "auto",
            });
          }

          if (text) {
            gsap.to(text, {
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        };

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);

        card._gsapCleanup = () => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        };
      });

      /* ─── 6. SECTION FADE-IN LIFT ─── */
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 92%",
          once: true,
        },
      });
    }, sectionRef);

    return () => {
      const cardEls = gsap.utils.toArray(".for-you-card");
      cardEls.forEach((card) => card._gsapCleanup?.());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 md:py-40 px-6 sm:px-10 bg-white relative overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Parallax backgrounds */}
      <img
        ref={purpleRef}
        src={purple}
        alt=""
        className="absolute left-[-5%] sm:left-0 top-[22%] w-60 sm:w-auto opacity-70 sm:opacity-100 z-1 select-none pointer-events-none"
      />
      <img
        ref={grayRef}
        src={gray}
        alt=""
        className="absolute right-[-5%] sm:right-0 top-[-6%] h-[128%] z-1 select-none pointer-events-none"
      />
      <div className="for-sparkles" aria-hidden="true"></div>

      <div className="max-w-[1240px] mx-auto relative z-2">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10 lg:gap-20">
          <div ref={titleGroupRef} className="max-w-xl">
            <h2 className="for-you-title text-[28px] sm:text-[40px] md:text-[42px] font-bold text-black leading-tight tracking-tight">
              PEACECHAT IS
            </h2>
            <div className="relative inline-block mt-1 sm:mt-2">
              <span className="for-you-title text-[28px] sm:text-[40px] md:text-[42px] font-bold text-pink">
                FOR YOU IF...
              </span>
              <img
                ref={brushRef}
                src={yellowBrush}
                alt=""
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-2 sm:h-auto -z-1"
              />
            </div>
          </div>

          <div ref={textGroupRef} className="flex flex-col gap-2 max-w-xl lg:pt-2">
            <p className="text-base text-black leading-snug">
              You don't need{" "}
              <span className="text-pink font-semibold">a judgement</span>.
            </p>
            <p className="text-base text-black leading-snug">
              You just need{" "}
              <span className="text-pink font-semibold">
                someone who listens and talks to you
              </span>.
            </p>
          </div>
        </div>

        {/* Responsive Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-8"
          style={{ perspective: "800px" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="for-you-card group bg-white  rounded-2xl p-8 w-full flex flex-col"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
                cursor: "default",
              }}
            >
              <div className="mb-8">
                <img
                  src={card.icon}
                  alt=""
                  className="w-20 h-20 sm:w-24 sm:h-24"
                  style={{ willChange: "transform" }}
                />
              </div>
              <p className="text-black font-bold text-base leading-tight">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ForYou;