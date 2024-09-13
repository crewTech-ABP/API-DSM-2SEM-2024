import styled from "styled-components";

export default function Button({ label, click }: Props) {
  return <ButtonSld onClick={click}>{label}</ButtonSld>;
}

export const ButtonSld = styled.button`
  display: flex;
  padding: 8px 20px;
  background-color: #00856F;
  color: #fff;
  text-transform: uppercase;
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: inherit; 
  font-size: inherit; 

  &:hover {
    background-color: #006D5B;
  }
`;

interface Props {
  label: string;
  click: () => void;
}
