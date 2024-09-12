import { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Button, Header, Footer, Error, LinkButton } from "../components";
import { useUser } from "../hooks";
import { loadFromLocalStorage } from "../utils";
import { useNavigate } from "react-router-dom";

import HamburgerImage from "../assets/Hamburger-bro.png";
import HealthyFoodImage from "../assets/healthy-food-bro.png";

export default function SignInPage() {
  const [mail, setMail] = useState("aba@teste.com");
  const [password, setPassword] = useState("123456");
  const { token, setToken, login, error, setError } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!mail) {
      setError({ error: "Forneça o e-mail" });
    } else if (!password) {
      setError({ error: "Forneça a senha" });
    } else {
      login(mail, password);
    }
  };

  useEffect(() => {
    if (!token) {
      const user = loadFromLocalStorage("user");
      if (user) {
        setToken(user);
        navigate("/");
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Image src={HamburgerImage} alt="Hamburger Image" />
        <FieldWrapper>
          {error && <Error>{error.error}</Error>}
          <TextSld>LOGIN</TextSld>
          <Input
            type="text"
            id="mail"
            label="E-mail"
            value={mail}
            setValue={setMail}
          />  
          <Input
            type="password"
            id="password"
            label="Senha"
            value={password}
            setValue={setPassword}
          />
          <LineSld>
            <Button label="Acessar conta" click={handleLogin} />
            <LinkButton label="Cadastrar-se" to="/signup" />
          </LineSld>
        </FieldWrapper>
        <Image src={HealthyFoodImage} alt="Healthy Food Image" />
      </ContentWrapper>
       <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;  /* Take up the remaining space after the header */
  padding: 0 20px;
`;

const LineSld = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
`;

const TextSld = styled.div`
  font-size: 120%;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 10px 0px;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  padding: 20px;
  border-radius: 1rem;
  background-color: #C2EFD7;
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
`;

const Image = styled.img`
  width: 20rem;
  height: auto;
  object-fit: contain;
`;
