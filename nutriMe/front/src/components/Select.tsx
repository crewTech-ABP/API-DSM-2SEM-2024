import styled from "styled-components";
import tw from "tailwind-styled-components";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
  options: Option[];
}

export default function Select({ id, label, value, setValue, options }: SelectProps) {
  return (
    <Wrapper>
      <LabelSld htmlFor={id}>{label}</LabelSld>
      <SelectSld id={id} value={value} onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectSld>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex
  flex-col
  mt-2
`;

const LabelSld = tw.label`
  flex;
`;

const SelectSld = styled.select`
  display: flex;
  border-radius: 5px;
  border: none;
  padding: 8px;
  background: #fff url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M7 10l5 5 5-5z"/></svg>') no-repeat right 10px center;
`;
