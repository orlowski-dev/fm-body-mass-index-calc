import Tip from "./Tip";
import "./TipsSection.scss";

const TipsSection = () => (
  <section className="tips-section">
    <div className="bg"></div>
    <div className="content">
      <Tip
        icon="/images/icon-eating.svg"
        title="Healthy eating"
        text="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
      />
      <Tip
        icon="/images/icon-exercise.svg"
        title="Regular exercise"
        text="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
      />
      <Tip
        icon="/images/icon-sleep.svg"
        title="Adequate sleep"
        text="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
      />
    </div>
  </section>
);

export default TipsSection;
