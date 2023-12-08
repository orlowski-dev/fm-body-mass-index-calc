import "./BmiResult.scss";
import { FormCallbackProps } from "./Calculator";

const BmiResult = (props: FormCallbackProps) => {
  const { kg, cm } = props;
  const bmi = kg / (cm / 100) ** 2;
  const weightStatus = () => {
    if (bmi <= 18.5) {
      return "a underweight";
    } else if (bmi > 18.5 && bmi <= 24.9) {
      return "a healthy weight";
    } else if (bmi > 24.9 && bmi <= 29.9) {
      return "an overweight";
    } else {
      return "an obese";
    }
  };
  return (
    <section className="bmi-result">
      <h3>Your BMI is...</h3>
      <h4>{bmi.toPrecision(3)}</h4>
      <p>Your BMI suggests you're {weightStatus()}.</p>
    </section>
  );
};
export default BmiResult;
