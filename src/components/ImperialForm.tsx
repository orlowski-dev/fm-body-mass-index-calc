import { useRef } from "react";
import Input from "./Input";
import { type FormCallbackProps } from "./Calculator";

interface Props {
  callback: ({ kg, cm }: FormCallbackProps) => void;
}

const ImperialForm = (props: Props) => {
  const formRefs = {
    ft: useRef<HTMLInputElement>(null),
    inch: useRef<HTMLInputElement>(null),
    st: useRef<HTMLInputElement>(null),
    lbs: useRef<HTMLInputElement>(null),
  };

  const onFormChange = () => {
    const ft = Number(formRefs.ft!.current?.value);
    let inch = Number(formRefs.inch!.current?.value);
    const st = Number(formRefs.st!.current?.value);
    let lbs = Number(formRefs.lbs!.current?.value);

    inch += ft * 12;
    lbs += st * 14;

    props.callback({
      kg: lbs * 0.45359237,
      cm: inch * 2.54,
    });
  };
  return (
    <form className="form" onChange={onFormChange}>
      <div>
        <p>Height</p>
        <div className="group">
          <Input unitText="ft" ref={formRefs.ft} />
          <Input unitText="in" ref={formRefs.inch} />
        </div>
      </div>
      <div>
        <p>Weight</p>
        <div className="group">
          <Input unitText="st" ref={formRefs.st} />
          <Input unitText="lbs" ref={formRefs.lbs} />
        </div>
      </div>
    </form>
  );
};

export default ImperialForm;
