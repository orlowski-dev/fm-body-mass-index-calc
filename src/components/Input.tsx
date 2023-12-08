import { LegacyRef, forwardRef } from "react";
import "./Input.scss";

interface UnitText {
  unitText: string;
}

const Input = forwardRef(
  (
    props: React.HTMLAttributes<HTMLInputElement> & UnitText,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const { unitText, ...other } = props;
    return (
      <div className="custom-input">
        <input type="number" ref={ref} {...other} />
        <span>{unitText}</span>
      </div>
    );
  }
);

export default Input;
