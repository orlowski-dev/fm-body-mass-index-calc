import "./App.scss";
import BmiMeansSection from "./components/BmiMeansSection";
import HeroSection from "./components/HeroSection";
import TipsSection from "./components/TipsSection";

const App = () => {
  return (
    <main>
      <HeroSection />
      <BmiMeansSection />
      <TipsSection />
    </main>
  );
};
export default App;
