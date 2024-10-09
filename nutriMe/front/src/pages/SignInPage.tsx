import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { Input, Button, Header, Footer, Error, LinkButton } from "../components";
import { useUser } from "../hooks";
import { loadFromLocalStorage } from "../utils";
import { useNavigate } from "react-router-dom";

import HamburgerImage from "../assets/hamburger-food.png";
import HealthyFoodImage from "../assets/healthy-food.png";

export default function SignInPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
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
        <Image src={HealthyFoodImage} alt="Healthy Food Image"/>
        <FieldWrapper>
          {error && <Error>{error.error}</Error>}
          <TextSld>LOGIN</TextSld>
          <Input type="text" id="mail" label="E-mail" value={mail} setValue={setMail} placeholder="seuemail@exemplo.com.br"
          />  
          <Input type="password" id="password" label="Senha" value={password} setValue={setPassword} placeholder="Mínimo 6 caracteres"
          />
          <LineSld>
            <Button label="Acessar conta" click={handleLogin} />
            <LinkButton label="Não possuí conta?" bold="Cadastre-se" to="/signup" />
          </LineSld>
        </FieldWrapper>
          <Image src={HamburgerImage} alt="Hamburger Image" />
      </ContentWrapper>
       <Footer/>
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
  mx-2

  lg:flex-row 
  lg:justify-between
`;

const LineSld = tw.div`
  flex
  flex-col
  items-center
  mt-6
  mb-2
`;

const TextSld = tw.div`
  text-center
  text-lg
  font-bold
  text-center;
  mx-0
  my-5
`;

const FieldWrapper = tw.div`
  flex
  flex-col
  self-center	
  justify-center

  w-full
  py-0
  px-8
  bg-field-color
  my-auto
  
  rounded-2xl
`;

const Image = tw.img`
  hidden

  lg:block
  lg:w-96
`;
