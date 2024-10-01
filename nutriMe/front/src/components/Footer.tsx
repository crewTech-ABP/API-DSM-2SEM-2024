import tw from "tailwind-styled-components";

import FacebookIcon from "../assets/icon-facebook.png";
import InstagramIcon from "../assets/icon-instagram.png";
import YoutubeIcon from "../assets/icon-youtube.png";

export default function Footer(){
    return(
        <WrapperF>
            <FooterWrapper>
                <TextWrapper>
                    <p className="font-bold text-xl lg:text-3xl">Nutri<OrangeText>Me</OrangeText></p>
                    <p className="my-3 mx-0 lg:text-lg">©2024 CrewTech</p>
                    <p className="my-3 mx-0 lg:text-lg">Todos os direitos reservados</p>
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

const WrapperF = tw.div`
    w-screen
    bg-footer-color
    py-4
`;

const FooterWrapper = tw.div`
    flex
    justify-between
    m-10
    h-10
`;

const Image = tw.img`
    w-auto
    h-auto
    my-0
    mx-1
`;

const TextWrapper = tw.div`
    flex
    flex-col
    justify-center 
    text-white
    text-sm
    leading-4
    text-left

    lg:ml-10
`;

const ImageWrapper = tw.div`
    flex
    items-center

    lg:mr-10
`;

const OrangeText = tw.span`
    text-orange-color
`;