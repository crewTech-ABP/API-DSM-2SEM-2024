import React from "react";
import tw from "tailwind-styled-components";

export default function Logo() {
  return (
    <Wrapper>
      <TextSld>
        Nutri<OrangeText>Me</OrangeText>
      </TextSld>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex 
  flex-row 
  items-center
  text-3xl/8
  font-bold
`;

const TextSld = tw.h1`
  text-black
`;

const OrangeText = tw.span`
  text-orange-color
`;
