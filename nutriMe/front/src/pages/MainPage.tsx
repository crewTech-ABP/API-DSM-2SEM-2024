import { Input, Button, Header, Footer, Error, LinkButton } from "../components";
import styled from "styled-components";

export default function MainPage(){
    return(
        <Wrapper>
            <Header/>
            <ContentWrapper>
                
            </ContentWrapper>
            <Footer/>
        </Wrapper>
);
}

const Wrapper = styled.div`
    color: blue;
`
const ContentWrapper = styled.div`
    color: green;
`