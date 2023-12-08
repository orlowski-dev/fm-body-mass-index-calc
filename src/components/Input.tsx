import { LegacyRef, forwardRef, useState } from "react";
import "./Input.scss";

interface UnitText {
  unitText: string;
}

const Input = forwardRef(
  (
    props: React.HTMLAttributes<HTMLInputElement> & UnitText,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const [value, setValue] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val.length > 3) return;
      setValue(e.target.value);
    };
    const { unitText, ...other } = props;

    return (
      <div className="custom-input">
        <input
          type="number"
          ref={ref}
          {...other}
          onChange={onChange}
          value={value}
        />
        <span>{unitText}</span>
      </div>
    );
  }
);

export default Input;
