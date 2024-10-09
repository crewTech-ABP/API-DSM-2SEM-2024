import { useEat } from "../hooks";
import { EatProductProps } from "../types";
import styled from "styled-components";

interface Props {
  items: EatProductProps[];
}

export default function TableEatProduct({ items }: Props) {
  const { removeProduct } = useEat();
  let somaCalProduct = 0;
  let somaNutriProduct = 0;

  // Cria as linhas data tabela
  const lines = [];
  for (let i = 0, amount = 0; i < items.length; i++) {
    // calcula o volume ingerido propocionalmente
    amount = items[i].quantity / items[i].quantity_per_serving;

    somaCalProduct += items[i].energy! * amount;
    somaCalProduct = parseFloat(somaCalProduct.toFixed(2))

    somaNutriProduct += (items[i].protein! * amount) + (items[i].carbohydrate! * amount) + (items[i].dietary_fiber! * amount);
    somaNutriProduct = parseFloat(somaNutriProduct.toFixed(2))

    lines.push(
      <tr key={items[i].id}>
        <td title={items[i].description}>
          <div className="cell-content">{items[i].description}</div>
        </td>

        {/* ! Non-null Assertion Operator: usado para informar ao TS que temos certeza de que o valor não é nulo */}
        <td>
          {items[i].energy !== null
            ? (items[i].energy! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].protein !== null
            ? (items[i].protein! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].carbohydrate !== null
            ? (items[i].carbohydrate! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>

        <td>
          {items[i].dietary_fiber !== null
            ? (items[i].dietary_fiber! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].calcium !== null
            ? (items[i].calcium! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].sodium !== null
            ? (items[i].sodium! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].sodium !== null
            ? (items[i].sodium! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          <Button onClick={() => removeProduct(items[i].id)}>Excluir</Button>
        </td>
      </tr>
    );
  }

  console.log("Soma total de calorias PRODUCTS:", somaCalProduct);
  console.log("Soma total de nutrientes PRODUCTS:", somaNutriProduct);

  const cols = (
    <tr>
      <th>Produto</th>
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
    border: 1px solid #999999; //ccc
    padding: 1rem;
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
    background-color: #90d8b2;

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