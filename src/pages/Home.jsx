import Hero from "../components/Hero";
import ForYou from "../components/ForYou";
import HowItWorks from "../components/HowItWorks";
import WhyPeacechat from "../components/WhyPeacechat";
import Launch from "../components/Launch";
import SmoothScroll from "../components/SmoothScroll";

function Home() {
  return (
    <SmoothScroll>
      <Hero />
      <ForYou />
      <HowItWorks />
      <WhyPeacechat />
      <Launch />
    </SmoothScroll>
  );
}

export default Home;
