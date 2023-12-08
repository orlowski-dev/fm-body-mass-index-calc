import { useRef } from "react";
import type { FormCallbackProps } from "./Calculator";
import Input from "./Input";

interface Props {
  callback: ({ kg, cm }: FormCallbackProps) => void;
}

const MetricForm = (props: Props) => {
  const formRefs = {
    kg: useRef<HTMLInputElement>(null),
    cm: useRef<HTMLInputElement>(null),
  };

  const onFormChange = () => {
    props.callback({
      kg: Number(formRefs.kg.current!.value),
      cm: Number(formRefs.cm.current!.value),
    });
  };

  return (
    <form className="form" onChange={onFormChange}>
      <div>
        <p>Height</p>
        <Input unitText="cm" ref={formRefs.cm} />
      </div>
      <div>
        <p>Weight</p>
        <Input unitText="kg" ref={formRefs.kg} />
      </div>
    </form>
  );
};

export default MetricForm;
