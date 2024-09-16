import styled from "styled-components";

import FacebookIcon from "../assets/icon-facebook.png";
import InstagramIcon from "../assets/icon-instagram.png";
import YoutubeIcon from "../assets/icon-youtube.png";

export default function Footer(){
    return(
        <WrapperF>
            <FooterWrapper>
                <TextWrapper>
                    <p>NutriMe</p>
                    <p>©2024 CrewTech</p>
                    <p>Todos os direitos reservados</p>
                </TextWrapper>
                <ImageWrapper>                
                    <Image src={InstagramIcon} alt="Instagram Icon" />
                    <Image src={FacebookIcon} alt="Facebook Icon" />
                    <Image src={YoutubeIcon} alt="Youtube Icon" />
                </ImageWrapper>
            </FooterWrapper>
        </WrapperF>
    );
}


const WrapperF = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #00856F;
`;

const FooterWrapper = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    margin: 2rem 10rem;
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
    justify-content: center;
    line-height: 0.5; 
    text-align: left;
    
    p {
        margin: 0.8rem 0;
    }

    p:first-of-type {
    font-weight: bold;  
    font-size: 1.5rem;    
  }
`;


const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
`;