import styled from "styled-components";
import tw from "tailwind-styled-components";

export default function Input({ type, id, label, value, placeholder ,setValue }: Props) {
  return (
    <Wrapper>
      <LabelSld htmlFor={id}>{label}</LabelSld>
      <InputSld
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={id}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const LabelSld = tw.label`
  flex;
`;

const InputSld = styled.input`
  display: flex;
  border: none;
  border-radius: 0.5rem;
  padding: 10px;
`;

interface Props {
  type: string;
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  setValue: (value: string) => void;
}
