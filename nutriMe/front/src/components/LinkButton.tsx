import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LinkButton({ label, to }: Props) {
  return <LinkSld to={to}>{label}</LinkSld>;
}

const LinkSld = styled(Link)`
  display: flex;
  padding: 8px 20px;
  margin-right: 10px;
  color: white;
  border-width: 1px;
  border-radius: 5px;
  text-decoration: none;

  // ao passar o mouse
  &:hover {
    color: #00856F;
  }
  // enquanto está clicando
  &:active {
    color: #00856F;
  }

  &:visited {
    color: #00856F;// mantém a cor do texto após a visita
  }
`;

interface Props {
  label: string;
  to: string;
}
