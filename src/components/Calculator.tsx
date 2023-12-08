import { useCallback, useState } from "react";
import "./Calculator.scss";
import UnitsSwitcher from "./UnitsSwitcher";
import MetricForm from "./MetricForm";
import ImperialForm from "./ImperialForm";
import BmiResult from "./BmiResult";

export type Units = "metric" | "imprerial";
export type FormCallbackProps = { kg: number; cm: number };

const Calculator = () => {
  const [units, setUnits] = useState<Units>("metric");
  const [data, setData] = useState({ kg: 0, cm: 0 });

  const unitsSwitcherCallback = useCallback((units: Units) => {
    setUnits(units);
    setData({ kg: 0, cm: 0 });
  }, []);

  const formCallback = useCallback(({ kg, cm }: FormCallbackProps) => {
    setData({ kg, cm });
  }, []);

  return (
    <section className="calculator-section">
      <header>
        <h2>Enter your details below</h2>
      </header>
      <UnitsSwitcher callback={unitsSwitcherCallback} />
      {units === "metric" ? (
        <MetricForm callback={formCallback} />
      ) : (
        <ImperialForm callback={formCallback} />
      )}
      {data.cm > 100 && data.kg > 10 ? <BmiResult {...data} /> : undefined}
    </section>
  );
};

export default Calculator;
