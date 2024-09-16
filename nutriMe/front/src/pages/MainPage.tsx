import {Button, Header, Footer, LinkButton } from "../components";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import EatingFood from "../assets/eating-healthy food-bro.png";

export default function MainPage() {
    const navigate = useNavigate(); 

    return (
        <Wrapper>
            <Header />
            <ContentWrapper>
                <TextWrapper>
                    <h3>BOAS-VINDAS AO NUTRIME 👋</h3>
                    <h1>Consulta alimentícia simplificada para todos</h1>
                    <p>Registre e monitore sua ingestão diária de calorias e nutrientes, 
                        controle sua alimentação e mantenha sua saúde em dia com facilidade e precisão.</p>
                    <LineSld>
                        <Button label="Acessar conta" click={() => navigate('/signin')}/>
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

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    position: relative;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 10rem;
    flex: 1;
    margin-bottom: 7rem;
`;

const TextWrapper = styled.div`

    padding-left: 5rem;
    padding-top: 3rem;
    flex-grow: 2;

    h3{
        color: #027764;
    }
    h1{
        color: #212529;
        font-size: 4.5rem;
    }
    p{
        color: #495057;
        font-size: 1.5rem;
    }
`;

const LineSld = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-top: 5rem;

    font-size: 1.3rem;

    Button{
        font-size: 1.2rem; 
        padding: 1rem 2rem; 
        font-weight: bold;
    }
`;

const ImageWrapper = styled.div`
    flex-grow: 1;
    align-content: flex-end;    
`;

const Image = styled.img`
    width: 40rem;
    height: auto;
    object-fit: contain;
    
`;