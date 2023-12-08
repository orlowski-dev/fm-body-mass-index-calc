import { useCallback, useState } from "react";
import "./Calculator.scss";
import UnitsSwitcher from "./UnitsSwitcher";

export type Units = "metric" | "imprerial";

const Calculator = () => {
  const [units, setUnits] = useState<Units>("metric");

  const unitsSwitcherCallback = useCallback((units: Units) => {
    setUnits(units);
  }, []);

  return (
    <section className="calculator-section">
      <header>
        <h2>Enter your details below</h2>
        <p>{units}</p>
      </header>
      <UnitsSwitcher callback={unitsSwitcherCallback} />
    </section>
  );
};

export default Calculator;
