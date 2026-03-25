import { useLayoutEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useLayoutEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // Lower lerp value makes it even smoother (ranges from 0 to 1)
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    // Update ScrollTrigger on every scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Sync GSAP ticker with Lenis raf
    const tickerUpdate = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Normalize scroll for consistent experience across devices
    ScrollTrigger.normalizeScroll(true);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerUpdate);
      ScrollTrigger.normalizeScroll(false);
    };
  }, []);

  return <>{children}</>;
}
