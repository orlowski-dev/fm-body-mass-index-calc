import "./App.scss";
import BmiMeansSection from "./components/BmiMeansSection";
import HeroSection from "./components/HeroSection";
import LimitationsSection from "./components/LimitationsSection";
import TipsSection from "./components/TipsSection";

const App = () => {
  return (
    <main>
      <HeroSection />
      <BmiMeansSection />
      <TipsSection />
      <LimitationsSection />
    </main>
  );
};
export default App;
