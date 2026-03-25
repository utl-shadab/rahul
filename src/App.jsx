import Hero from "./components/Hero";
import ForYou from "./components/ForYou";
import HowItWorks from "./components/HowItWorks";
import WhyPeacechat from "./components/WhyPeacechat";
import Launch from "./components/Launch";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <Hero />
      <ForYou />
      <HowItWorks />
      <WhyPeacechat />
      <Launch />
      <Footer />
    </SmoothScroll>
  );
}

export default App;
