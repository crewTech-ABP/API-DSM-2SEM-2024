import styled from "styled-components";

import FacebookIcon from "../assets/icon-facebook.png";
import InstagramIcon from "../assets/icon-instagram.png";

export default function Footer(){
    return(
        <Wrapper>
            <FooterWrapper>
                <TextWrapper>
                    <p>NutriMe</p>
                    <p>©2024 CrewTech</p>
                    <p>Todos os direitos reservados</p>
                </TextWrapper>
                <ImageWrapper>                
                    <Image src={InstagramIcon} alt="Instagram Icon" />
                    <Image src={FacebookIcon} alt="Facebook Icon" />
                </ImageWrapper>
            </FooterWrapper>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #00856F;
`;

const FooterWrapper = styled.div`
    height: 60px;
    background-color: #00856F;
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const Image = styled.img`
    width: auto;
    height: auto;
    margin: 0 10px;
`;

const TextWrapper = styled.div`
    color: white;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 0.5; 

    p {
        margin: 1rem 0;
    }
`;


const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
`;