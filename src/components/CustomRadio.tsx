import { LegacyRef, forwardRef } from "react";
import "./CustomRadio.scss";
import type { Units } from "./Calculator";

interface Props {
  labelText: string;
  name: string;
  value: Units;
}

const CustomRadio = forwardRef(
  (
    props: React.HTMLAttributes<HTMLInputElement> & Props,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const { labelText, name, value, ...others } = props;
    return (
      <div className="custom-radio">
        <input
          {...others}
          type="radio"
          ref={ref}
          name={name}
          value={value}
          id={value}
        />
        <label htmlFor={value}>{labelText}</label>
        <div className="checkmark-area"></div>
      </div>
    );
  }
);

export default CustomRadio;
