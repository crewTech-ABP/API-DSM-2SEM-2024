import { useState } from "react";
import styled from "styled-components";
import { Input, Button, Header, Footer, Error, LinkButton } from "../components";
import { useUser } from "../hooks";

import EnglishFood from "../assets/English breakfast-bro.png"
import FastFood from "../assets/fast food-bro.png"

export default function SignUpPage() {
  const [alias, setAlias] = useState("Ana Maria");
  const [mail, setMail] = useState("aba@teste.com");
  const [password, setPassword] = useState("123456");
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
      {error && <Error>{error.error}</Error>}
      <Image src={FastFood} alt="FastFood Image" />
      <FieldWrapper>
        <TextSld>CADASTRE-SE</TextSld>
        <Input
          type="text"
          id="alias"
          label="Nome de usuário"
          value={alias}
          setValue={setAlias}
        />
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
          <Button label="Cadastrar" click={handleCreate} />
          <LinkButton label="Logar-se" to="/signin" />
        </LineSld>
      </FieldWrapper>
      <Image src={EnglishFood} alt="English Food" />
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
  width: 500px;
  padding: 20px;
  border-radius: 1rem;
  background-color: #C2EFD7;
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  object-fit: contain;
`;