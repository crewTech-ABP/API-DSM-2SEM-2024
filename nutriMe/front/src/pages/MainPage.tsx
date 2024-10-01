import {Button, Header, Footer, LinkButton } from "../components";
import tw from "tailwind-styled-components"
import { useNavigate } from 'react-router-dom';

import EatingFood from "../assets/eating-food.png";

export default function MainPage() {
    const navigate = useNavigate(); 

    return (
        <Wrapper>
            <Header />
            <ContentWrapper>
                <TextWrapper>
                    <h3 className="text-dark-green-color lg:text-lg font-semibold">BOAS-VINDAS AO NUTRIME 👋</h3>
                    <h1 className="text-text-color text-3xl lg:text-6xl lg:leading-tight font-bold ">Consulta alimentícia simplificada para todos</h1>
                    <p className="text-p-color text-lg lg:text-2xl lg:leading-10 font-medium ">Registre e monitore sua ingestão diária de calorias e nutrientes, 
                        controle sua alimentação e mantenha sua saúde em dia com facilidade e precisão.</p>
                    <LineSld>
                        <MainButton label="Acessar conta" click={() => navigate('/signin')}/>
                        <LinkButton label="Não possuí conta?" bold="Cadastre-se" to="/signup"/>
                    </LineSld>
                </TextWrapper>
                <ImageWrapper>
                    <Image src={EatingFood} alt="Healthy Food Image"/>
                </ImageWrapper>
            </ContentWrapper>
            <Footer />
        </Wrapper>
    );
}

const Wrapper = tw.div`
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
    lg:justify-between
`;


const TextWrapper = tw.div`
    space-y-4
    text-center
    leading-loose
    w-10/12

    lg:text-left
    lg:ml-20
    lg:flex-2
    lg:max-w-4xl
    lg:space-y-12
`;
//como estava antes
// xl:text-left
// xl:ml-36
// xl:flex-2
// xl:max-w-4xl 
// xl:-mt-20
// xl:space-y-12


const LineSld = tw.div`
    flex
    flex-col
    items-center 

    lg:flex-row
    lg:ml-80
    lg:gap-12
    lg:text-xl
`;
//como estava antes
// lg:flex-row
// lg:ml-80
// lg:gap-12
// lg:text-xl


const ImageWrapper = tw.div`
    flex
    flex-grow
    h-full
    self-end
    justify-center

    lg:flex-1
    lg:h-auto
    lg:ml-48
`;

//
// lg:flex-1
// lg:h-auto
// lg:ml-64

const Image = tw.img`
    h-auto
    w-auto 
    object-contain

    lg:w-max
    lg:max-w-xl
`;

const MainButton = tw(Button)`
    text-lg 
    py-4 
    px-8 
`