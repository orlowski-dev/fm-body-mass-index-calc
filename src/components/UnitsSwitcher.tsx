import type { Units } from "./Calculator";
import CustomRadio from "./CustomRadio";

interface Props {
  callback: (units: Units) => void;
}

const UnitsSwitcher = (props: Props) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as Units;
    if (value !== "imprerial" && value !== "metric") {
      throw new Error("Unknown units type.");
    }
    props.callback(e.target.value as Units);
  };

  return (
    <form className="units-switcher">
      <CustomRadio
        name="units"
        defaultChecked
        labelText="Metric"
        value="metric"
        onChange={onInputChange}
      />
      <CustomRadio
        name="units"
        labelText="Imperial"
        value="imprerial"
        onChange={onInputChange}
      />
    </form>
  );
};

export default UnitsSwitcher;
