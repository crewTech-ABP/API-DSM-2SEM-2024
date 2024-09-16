import styled from "styled-components";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { useUser } from "../hooks";
import AdmMenu from "./AdmMenu";

export default function Header() {
  const {token} = useUser();

  return (
    <Wrapper>
        <Logo />
        <TokenWrapper>
          {token && token.role ==="user" && <UserMenu />}
          {token && token.role ==="adm" && <AdmMenu />}
        </TokenWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: -10rem;
  padding: 0 2rem;
  position: relative;
`;

const TokenWrapper = styled.div`
  position: absolute;
  right: 2rem;
`;
