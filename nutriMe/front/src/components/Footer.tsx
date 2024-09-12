import styled from "styled-components";

import FacebookIcon from "../assets/icon-facebook.png";
import InstagramIcon from "../assets/icon-instagram.png";

export default function Footer(){
    return(
        <Wrapper>
            <FooterWrapper>
                <TextWrapper>
                    NutriMe
                    ©2024 CrewTech
                    Todos os direitos reservados
                </TextWrapper>
                <ImageWrapper>                
                    <Image src={InstagramIcon} alt="Healthy Food Image" />
                    <Image src={FacebookIcon} alt="Healthy Food Image" />
                </ImageWrapper>
            </FooterWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 50px;
    background-color: #00856F;
`;

const FooterWrapper = styled.div`
    height: 150px;
    position: relative;
    top: -100px;
    background-color: #00856F;
    display: flex;
    justify-content: space-between;
    
`;

const Image = styled.img`
    
`;

const TextWrapper = styled.div`
    color: white;
`;

const ImageWrapper = styled.div`

`;