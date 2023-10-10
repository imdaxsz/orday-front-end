import { CheckboxContainer, CheckboxInput, CheckboxText } from "./style";

interface CheckBoxProps {
  text?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default function CheckBox({ text, onChange, type }: CheckBoxProps) {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        id={text}
        name={text}
        onChange={onChange}
        $isCircle={type === "circle"}
      />
      <CheckboxText htmlFor={text}>{text}</CheckboxText>
    </CheckboxContainer>
  );
}
