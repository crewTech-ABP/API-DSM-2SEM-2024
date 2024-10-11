import styled from "styled-components";
import tw from "tailwind-styled-components";
import { Error, Header, Footer, Button, PopupMessage, InputDatePickerConsumer, Input, TableEatProduct, TableEatFood } from "../components";
import { useEat } from "../hooks";
import { useState } from "react";
import { FoodProps, ProductNutrientsProps } from "../types";
import { dateFormat } from "../utils";

import FruitSalad from "../assets/fruit-salad.png";
import Breakfast from "../assets/breakfast.png";

export default function EatPage() {
  const { products, foods, eatProducts, eatFoods, searchFood, searchProduct, error, setError, createProduct, createFood, date, setDate } = useEat();
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");
  const [term, setTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState<FoodProps | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductNutrientsProps | null>(null);
  const [searchType, setSearchType] = useState<string | null>(null);
  const [quantity, setQuantity] = useState("");

  const handleFood = async () => {
    if (term.trim().length >= 3) {
      const response = await searchFood(term);
      if (response) {
        setMessagePopup("Não existem alimentos que possuem o termo digitado");
        setShowPopup(true);
      } else {
        setSearchType("food");
        setSelectedFood(null);
      }
    }
  };

  const handleProduct = async () => {
    if (term.trim().length >= 3) {
      const response = await searchProduct(term);
      if (response) {
        setMessagePopup("Não existem produtos que possuem o termo digitado");
        setShowPopup(true);
      } else {
        setSearchType("product");
        setSelectedProduct(null);
      }
    }
  };

  const handleSave = async () => {
    if (searchType === "product" && selectedProduct) {
      if (!date) {
        setError({ error: "Selecione a data" });
      } else if (!quantity || isNaN(parseFloat(quantity))) {
        setError({ error: "Forneça a quantidade consumida" });
      } else if (parseFloat(quantity) <= 0) {
        setError({ error: "A quantidade consumida precisa ser um valor maior que zero" });
      } else {
        const response = await createProduct(selectedProduct.id, dateFormat(date), parseFloat(quantity));
        if (response) {
          setMessagePopup("Consumo registrado com sucesso");
          setShowPopup(true);
        }
      }
    } else if (searchType === "food" && selectedFood) {
      if (!date) {
        setError({ error: "Selecione a data" });
      } else if (!quantity || isNaN(parseFloat(quantity))) {
        setError({ error: "Forneça a quantidade consumida" });
      } else if (parseFloat(quantity) <= 0) {
        setError({ error: "A quantidade consumida precisa ser um valor maior que zero" });
      } else {
        const response = await createFood(selectedFood.id, dateFormat(date), parseFloat(quantity));
        if (response) {
          setMessagePopup("Consumo registrado com sucesso");
          setShowPopup(true);
        }
      }
    } else {
      setError({ error: "Selecione um alimento ou produto" });
    }
  };

  let somaCalProduct = 0;
  let somaNutriProduct = 0;
  let somaCalFood = 0;
  let somaNutriFood = 0;


  if (eatProducts.length > 0) {
    eatProducts.forEach((item) => {
      const amount = item.quantity / item.quantity_per_serving;
      somaCalProduct += item.energy! * amount;
      somaNutriProduct += (item.protein! * amount) + (item.carbohydrate! * amount) + (item.dietary_fiber! * amount);
    });
  }

  if (eatFoods.length > 0) {
    eatFoods.forEach((item) => {
      const amount = item.quantity / 100;
      somaCalFood += item.energy! * amount;
      somaNutriFood += (item.protein! * amount) + (item.carbohydrate! * amount) + (item.dietary_fiber! * amount);
    });
  }

  // Soma total
  const somaCalTotal = (somaCalProduct + somaCalFood).toFixed(2);
  const somaNutriTotal = (somaNutriProduct + somaNutriFood).toFixed(2);

  let items = null;
  if (searchType === "product") {
    items = products.map((item) => (
      <ItemSld key={item.id} onClick={() => setSelectedProduct(item)} selected={selectedProduct?.id === item.id}>
        {item.description} ({item.quantity_per_serving_unit})
      </ItemSld>
    ));
  } else if (searchType === "food") {
    items = foods.map((item) => (
      <ItemSld key={item.id} onClick={() => setSelectedFood(item)} selected={selectedFood?.id === item.id}>
        {item.description}
      </ItemSld>
    ));
  }

  return (
    <Wrapper>
      <Header />
      {showPopup && (<PopupMessage message={messagePopup} setShowPopup={setShowPopup} />)}
      <ContentWrapper>
        <Image src={FruitSalad} alt="Fruit Salad" />
        <BoxWrapper>
          <FieldWrapper className={items && items.length > 0 ? 'mb-8' : 'mb-auto'}>
            {error && <Error>{error.error}</Error>}
            <TextSld>BUSCA ALIMENTO OU PRODUTO CONSUMIDO</TextSld>
            <InputSld placeholder="Digite parte do nome do alimento ou produto" value={term} onChange={(e) => setTerm(e.target.value)}
            />
            <LineSld>
              <Button label="Alimento" click={handleFood} />
              <Button label="Produto" click={handleProduct} />
            </LineSld>
            <ItemWrapperSld>{items}</ItemWrapperSld>
            <LineSld>
              <InputDatePickerConsumer label="Data de consumo" value={date} setValue={setDate}
              />
              <Input type="number" id="weight" label="Quantidade consumida" value={quantity} setValue={setQuantity}
              />
            </LineSld>
            <LineSld>
              <Button label="Salvar" click={handleSave} />
            </LineSld>
            <TableWrapper>
              {eatProducts.length > 0 && <TableEatProduct items={eatProducts} />}
              {eatFoods.length > 0 && <TableEatFood items={eatFoods} />}
            </TableWrapper>
            <TextSld>Resumo de ingestão</TextSld>
            <TotalWrapper>
              <p>Total de calorias: {somaCalTotal} kcal</p>
              <p>Total de nutrientes: {somaNutriTotal} g</p>
            </TotalWrapper>
          </FieldWrapper>
        </BoxWrapper>
        <Image src={Breakfast} alt="Breakfast" />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}

const TotalWrapper = tw.div`
  flex
  flex-row
  justify-center
  gap-10
  m-6
  text-lg
`;

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

const BoxWrapper = tw.div`
  flex
  justify-center
  items-center
  flex-col
  w-full
  p-4
`;

const FieldWrapper = tw.div`
  flex 
  flex-col 
  self-center 
  justify-center 
  w-full py-0 
  px-8 
  bg-field-color 
  my-auto 
  rounded-2xl 
`;

const TableWrapper = tw.div`
  w-full 
  mt-4
  flex 
  flex-col 
  mb-6
`
const TextSld = tw.div`
  text-center
  text-lg
  font-bold
  text-center;
  my-5
`;

const LineSld = tw.div`
  flex
  flex-row
  items-center
  justify-center
  mt-5
  gap-6
  
`;

const InputSld = tw.input`
  rounded-lg
  border-none
  
  p-2

  color: green;
  font-weight: 600;
  font-size: 1rem;
  font-family: DM Sans Variable;
  box-sizing: border-box;
  
  &::placeholder {
    color: #aaa; 
    font-weight: lighter; 
  }
`;

const ItemWrapperSld = tw.div`
  flex
  flex-col
  mt-2
`;


const ItemSld = styled.div<ItemSldProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    color: #fff;
    background-color: rgb(245, 149, 59);
  }

  background-color: ${(props) =>
    props.selected ? "rgb(34, 175, 163)" : "transparent"};
  color: ${(props) =>
    props.selected ? "#fff" : "#000"};
`;

const Image = tw.img`
  hidden

  lg:block
  lg:w-96
`;

interface ItemSldProps {
  selected: boolean;
}