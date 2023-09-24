import { CheckboxContainer, CheckboxInput, CheckboxText } from "./style";

interface CheckBoxProps {
  text?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CheckBox({ text, onChange }: CheckBoxProps) {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        id={text}
        name={text}
        onChange={onChange}
      />
      <CheckboxText htmlFor={text}>{text}</CheckboxText>
    </CheckboxContainer>
  );
}
