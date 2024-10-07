import styled from "styled-components";
import tw from "tailwind-styled-components";

import { Error, Header, Footer ,FoodPane, NutrientPane } from "../components";
import { useFood } from "../hooks";

export default function FoodPage() {
  const { error, food } = useFood();

  return (
    <WrapperSld>
      <Header />
        <ContentWrapper>
          {error && <Error>{error.error}</Error>}
          <BodySld>
            <FoodPane />
            {food && <NutrientPane />}
          </BodySld>
        </ContentWrapper>
      <Footer/>
    </WrapperSld>
  );
}

const WrapperSld = tw.div`
  flex
  flex-col
  min-h-screen
`;

const ContentWrapper = tw.div`
  flex
  flex-col
  justify-center 
  items-center   
  flex-grow

  lg:flex-row 
`;

const BodySld = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* centraliza na horizontal quando a direção é row */
  box-sizing: border-box;
  margin: 30px 0px;
  min-width: 530px;
`;
