import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { Input, Button, Header, Footer, Error, PopupMessage } from "../components";
import { useUser } from "../hooks";


import Smartphone from "../assets/smartphone.png";
import FruiBasket from "../assets/fruit-basket.png";

export default function SettingsPage() {
  const { token, updateAlias, updateMail, updatePassword, error, setError } = useUser();
  const [alias, setAlias] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");

  useEffect(() => {
    if (token && token.alias && token.mail) {
      setAlias(token.alias);
      setMail(token.mail);
    }
  }, [token]);

  const handleAlias = async () => {
    if (!alias) {
      setError({ error: "Forneça o novo nome de usuário" });
    } else if (alias === token?.alias) {
      setError({ error: "O novo nome de usuário precisa ser diferente" });
    } else {
      const response = await updateAlias(alias);
      if( response ){
        setMessagePopup("Nome de usuário atualizado com sucesso");
        setShowPopup(true);
      }
    }
  };

  const handleMail = async () => {
    if (!mail) {
      setError({ error: "Forneça o novo e-mail" });
    } else if (mail === token?.mail) {
      setError({ error: "O novo e-mail precisa ser diferente" });
    } else {
      const response = await updateMail(mail);
      if( response ){
        setMessagePopup("E-mail atualizado com sucesso");
        setShowPopup(true);
      }
    }
  };

  const handlePassword = async () => {
    if (!password || password.trim().length === 0) {
      setError({ error: "Forneça a nova senha" });
    } else if (password.trim() !== confirmPassword.trim()) {
      setError({ error: "A nova senha e confirmação precisam ser iguais" });
    } else {
      const response = await updatePassword(password.trim());
      if( response ){
        setMessagePopup("Senha atualizada com sucesso");
        setShowPopup(true);
      }
    }
  };

  return (
    <Wrapper>
        <Header />
          <ContentWrapper>
          <Image src={Smartphone} alt="Healthy Food Image"/>
            <FieldWrapper>
            {error && <Error>{error.error}</Error>}
            {showPopup && <PopupMessage message={messagePopup} setShowPopup={setShowPopup} />}
              <TextSld>CONFIGURAÇÕES</TextSld>
              <Input type="text" id="alias" label="Nome de usuário" value={alias} setValue={setAlias} placeholder="Novo nome de usuário"
              />
              <LineSld>
                <Button label="Alterar nome de usuário" click={handleAlias} />
              </LineSld>
              <DivSld />
              <Input type="text" id="mail" label="E-mail" value={mail} setValue={setMail} placeholder="seuemail@exemplo.com.br"
              />
              <LineSld>
                <Button label="Alterar e-mail" click={handleMail} />
              </LineSld>
              <DivSld />
              <Input type="password" id="password" label="Nova senha" value={password} setValue={setPassword} placeholder="Mínimo 6 caracteres"
              />
              <Input type="password" id="confirmpassword" label="Confirmação da nova senha" value={confirmPassword} setValue={setConfirmPassword} placeholder="Confirme sua senha"
              />
              <LineSld>
                <Button label="Alterar senha" click={handlePassword} />
              </LineSld>
            </FieldWrapper>
            <Image src={FruiBasket} alt="Hamburger Image" />
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
  color: #333;
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

const DivSld = tw.div`
  flex
  border
  border-gray-300
  mt-2
`;