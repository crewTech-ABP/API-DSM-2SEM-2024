import { useEat } from "../hooks";
import { EatFoodProps } from "../types";
import styled from "styled-components";

interface Props {
  items: EatFoodProps[];
  setCalorieSum?: (calories: number) => void;
}

export default function TableEatFood({ items }: Props) {
  const { removeFood } = useEat();

  // Função recursiva para somar calorias e nutrientes
  function calcularSomasRecursivamente(items: EatFoodProps[], i = 0, somaCalFood = 0, somaNutriFood = 0): { somaCalFood: number, somaNutriFood: number } {
    // Caso base: quando todos os itens foram processados
    if (i >= items.length) {
      return {
        somaCalFood: parseFloat(somaCalFood.toFixed(2)),
        somaNutriFood: parseFloat(somaNutriFood.toFixed(2))
      };
    }

    // Calcula a quantidade com base nos 100g
    const amount = items[i].quantity / 100;

    // Calcula calorias e nutrientes do item atual
    const calAtual = items[i].energy! * amount;
    const nutriAtual = (items[i].protein! * amount) + (items[i].carbohydrate! * amount) + (items[i].dietary_fiber! * amount);

    // Atualiza as somas
    somaCalFood += calAtual;
    somaNutriFood += nutriAtual;

    // Chama a função recursivamente para o próximo item
    return calcularSomasRecursivamente(items, i + 1, somaCalFood, somaNutriFood);
  }

  // Calcula as somas de calorias e nutrientes
  const { somaCalFood, somaNutriFood } = calcularSomasRecursivamente(items);

  // Cria as linhas da tabela
  const lines = items.map((item) => {
    const amount = item.quantity / 100;
    return (
      <tr key={item.id}>
        <td title={item.description}>
          <div className="cell-content">{item.description}</div>
        </td>
        <td>
          <div className="cell-content">{item.quantity}</div>
        </td>
        <td>
          {item.energy !== null
            ? (item.energy! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {item.protein !== null
            ? (item.protein! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {item.carbohydrate !== null
            ? (item.carbohydrate! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {item.dietary_fiber !== null
            ? (item.dietary_fiber! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {item.calcium !== null
            ? (item.calcium! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {item.sodium !== null
            ? (item.sodium! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          <Button onClick={() => removeFood(item.id)}>Excluir</Button>
        </td>
      </tr>
    );
  });

  console.log("Soma total de calorias FOOD:", somaCalFood);
  console.log("Soma total de nutrientes FOOD:", somaNutriFood);

  const cols = (
    <tr>
      <th>Alimento</th>
      <th>Consumo</th>
      <th>Calorias</th>
      <th>Proteína</th>
      <th>Carboidratos</th>
      <th>Fibra alimentar</th>
      <th>Cálcio</th>
      <th>Sódio</th>
      <th>Ação</th>
    </tr>
  );

  return (
    <Wrapper>
      <TableContainer>
        <Table>
          <thead>{cols}</thead>
          <tbody>{lines}</tbody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const TableContainer = styled.div`
  width: fit-content;
  overflow-x: auto;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #999999;
    padding: 8px;
    text-align: center;
  }

  th {
    background: #f1f1f1;
  }

  td {
    .cell-content {
      max-width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    background-color: #a1eac3;
  }
`;

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: #f44336;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;