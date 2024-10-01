import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { useUser } from "../hooks";
import AdmMenu from "./AdmMenu";

import tw from "tailwind-styled-components";

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

const Wrapper = tw.div`
  flex
  flex-row
  justify-center
  items-center 
  h-16

  lg:mt-3
`;

const TokenWrapper = tw.div`
  absolute
  right-2
`;
