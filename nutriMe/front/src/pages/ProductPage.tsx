import { useState } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import {
  Header,
  Footer,
  Error,
  PopupMessage,
  ScrollableProductList,
} from "../components";
import { useProduct } from "../hooks";

export default function ProductPage() {
  const { products, error } = useProduct();
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");
 
  return (
    <Wrapper>
      <Header />
        <FieldWrapper>
        {error && <Error>{error.error}</Error>}
        {showPopup && (<PopupMessage message={messagePopup} setShowPopup={setShowPopup} />)}
          <ScrollableProductList label="SEUS PRODUTOS" products={products} setMessagePopup={setMessagePopup} setShowPopup={setShowPopup} />
        </FieldWrapper>
      <Footer/>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex
  flex-col
  min-h-screen
`;


const FieldWrapper = tw.div`
  flex
  flex-col
  items-center
  self-center	
  mt-auto
  mb-auto
  bg-field-color
  padding: 20px;
  border: 1px solid #999;
  border-radius: 5px;
  box-sizing: border-box;

  rounded-2xl
`;
