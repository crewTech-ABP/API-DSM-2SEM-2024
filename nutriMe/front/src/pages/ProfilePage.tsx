import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import {
  Input,
  Button,
  Header,
  Footer,
  Error,
  PopupMessage,
  InputDatePicker,
  Select,
} from "../components";
import { useUser } from "../hooks";
import { calculateAge, dateFormat } from "../utils";

import HealthyOptions from "../assets/healthy-options.png";
import CherryPie from "../assets/cherry-pie.png";

export default function ProfilePage() {
  const { profile, saveProfile, deleteProfile, error, setError } = useUser();
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");

  const options = [
    { value: "female", label: "Feminino" },
    { value: "male", label: "Masculino" }
  ];

  useEffect(() => {
    if (profile) {
      setBirthDate(new Date(`${profile.birth_date} 00:00:00`));
      setWeight(profile.weight);
      setSex(profile.sex);
    }
    else{
      setBirthDate(null);
      setWeight("");
      setSex("");
    }
  }, [profile, setError]);

  const handleSave = async () => {
    if (!birthDate) {
      setError({ error: "Forneça a data de nascimento" });
    } else if( calculateAge(birthDate) < 1 ){
      setError({ error: "É necessário idade mínima de 1 ano" });
    } else if (!weight) {
      setError({ error: "Forneça o peso" });
    } else if (!sex) {
      setError({ error: "Forneça o sexo" });
    } else {
      const formattedDate = dateFormat(birthDate); 
      const response = await saveProfile(formattedDate,weight,sex);
      if( response ){
        setMessagePopup("Perfil salvo com sucesso");
        setShowPopup(true);
      }
    }
  };

  const handleDelete = async () => {
    const response = await deleteProfile();
    if( response ){
      setMessagePopup("Perfil excluído com sucesso");
      setShowPopup(true);
    }
  };

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
      <Image src={HealthyOptions} alt="Healthy Options"/>
      {showPopup && (
        <PopupMessage message={messagePopup} setShowPopup={setShowPopup} />
      )}
      <FieldWrapper>
      {error && <Error>{error.error}</Error>}
        <TextSld>PERFIL</TextSld>
        <InputDatePicker
          label="Data de nascimento"
          value={birthDate}
          setValue={setBirthDate}
        />
        <Input
          type="number"
          id="weight"
          label="Peso"
          value={weight}
          setValue={setWeight}
        />
        <Select
          id="sex"
          label="Sexo"
          value={sex}
          setValue={setSex}
          options={options}
        />
        <LineSld>
          <Button label="Salvar" click={handleSave} />
          {profile && <Button label="Excluir" click={handleDelete}/>}
        </LineSld>
      </FieldWrapper>
        <Image src={CherryPie} alt="Hamburger Image" />
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
  space-y-4
  mb-4
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