import styled from "styled-components";

export default function Logo() {
  return (
    <Wrapper>
      <TextSld>
        Nutri
        <GreenText>Me</GreenText>
      </TextSld>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TextSld = styled.h1`
  display: flex;
  color: black;
  margin-left: 20px;
`;

const GreenText = styled.span`
  color: #00856F;
  display: flex;
`;