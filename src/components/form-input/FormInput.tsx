import { ChangeEvent } from "react";
import { Form_input, Form_input_group, Form_input_label } from "./styles";

interface Props {
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  name: string;
}

const FormInput = ({ label, name, ...rest }: Props) => {
  const isValue = !!rest.value.length;

  return (
    <Form_input_group>
      {label && (
        <Form_input_label isValue={isValue} htmlFor={name}>
          {label}
        </Form_input_label>
      )}
      <Form_input name={name} required {...rest} />
    </Form_input_group>
  );
};

export default FormInput;
