import { useState } from "react";
import tw from "tailwind-styled-components";
import { Input, Button, Header, Footer, Error, LinkButton } from "../components";
import { useUser } from "../hooks";

import EnglishFood from "../assets/english-breakfast.png"
import EatingMoreFood from "../assets/variety-of-foods.png"

export default function SignUpPage() {
  const [alias, setAlias] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { create, error, setError } = useUser();

  const handleCreate = () => {
    if (!alias) {
      setError({ error: "Forneça o seu nome de usuário" });
    } else if (!mail) {
      setError({ error: "Forneça o e-mail" });
    } else if (!password) {
      setError({ error: "Forneça a senha" });
    } else {
      create(alias, mail, password);
    }
  };

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
      <Image src={EatingMoreFood} alt="FastFood Image" />
      <FieldWrapper>
      {error && <Error>{error.error}</Error>}
        <TextSld>CADASTRO</TextSld>
        <Input
          type="text"
          id="alias"
          label="Nome de usuário"
          value={alias}
          setValue={setAlias}
          placeholder="Digite seu nome completo"
        />
        <Input
          type="text"
          id="mail"
          label="E-mail"
          value={mail}
          setValue={setMail}
          placeholder="seuemail@exemplo.com.br"
        />
        <Input
          type="password"
          id="password"
          label="Senha"
          value={password}
          setValue={setPassword}
          placeholder="Mínimo 6 caracteres"
        />
        <LineSld>
          <Button label="Cadastrar" click={handleCreate} />
          <LinkButton label="Já possuí uma conta?" bold="Logar" to="/signin" />
        </LineSld>
      </FieldWrapper>
      <Image src={EnglishFood} alt="English Food" />
      </ContentWrapper>
      <Footer></Footer>
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
  justify-center
  mt-6
`;


const TextSld = tw.div`
  text-center
  text-lg
  font-bold
  color: #333;
  text-center;
  mx-0
  my-1
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