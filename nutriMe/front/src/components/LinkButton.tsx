import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LinkButton({ label, bold , to}: Props) {
  return <LinkSld to={to}> {label} <span>{bold}</span></LinkSld>;
}

const LinkSld = styled(Link)`
  margin: 1rem 0;
  text-decoration: none;

  &:hover{
    color: #00856F;
  }
  
  &:visited {
    color: #00856F;// mantém a cor do texto após a visita
  }

  span{
    font-weight: bold;
    margin-left: 0.3rem;
    color: #FFA733;
  }
`;

interface Props {
  label: string;
  to: string;
  bold?: string; //bold opcional
}
