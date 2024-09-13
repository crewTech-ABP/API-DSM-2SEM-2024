import styled from "styled-components";

export default function Input({ type, id, label, value, setValue }: Props) {
  return (
    <Wrapper>
      <LabelSld htmlFor={id}>{label}</LabelSld>
      <InputSld
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={id}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const LabelSld = styled.label`
  display: flex;
  color: black;
  padding: 0px;
  margin: 5px 0px;
  font-weight: bold;
`;

const InputSld = styled.input`
  display: flex;
  border: none;
  border-radius: 0.5rem;
  font-size: 100%;
  font-family: DM Sans Variable;
  padding: 10px;
`;

interface Props {
  type: string;
  id: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
}
