import { useEat } from "../hooks";
import { EatProductProps } from "../types";
import styled from "styled-components";

interface Props {
  items: EatProductProps[];
}

export default function TableEatProduct({ items }: Props) {
  const { removeProduct } = useEat();

  // Função recursiva para somar calorias e nutrientes
  function calcularSomasRecursivamente(items: EatProductProps[], i = 0, somaCalProduct = 0, somaNutriProduct = 0): { somaCalProduct: number, somaNutriProduct: number } {
    // Caso base: quando todos os itens foram processados
    if (i >= items.length) {
      return {
        somaCalProduct: parseFloat(somaCalProduct.toFixed(2)),
        somaNutriProduct: parseFloat(somaNutriProduct.toFixed(2))
      };
    }

    // Calcula a quantidade proporcional ao volume ingerido
    const amount = items[i].quantity / items[i].quantity_per_serving;

    // Calcula calorias e nutrientes do item atual
    const calAtual = items[i].energy! * amount;
    const nutriAtual = (items[i].protein! * amount) + (items[i].carbohydrate! * amount) + (items[i].dietary_fiber! * amount);

    // Atualiza as somas
    somaCalProduct += calAtual;
    somaNutriProduct += nutriAtual;

    // Chama a função recursivamente para o próximo item
    return calcularSomasRecursivamente(items, i + 1, somaCalProduct, somaNutriProduct);
  }

  // Calcula as somas de calorias e nutrientes
  const { somaCalProduct, somaNutriProduct } = calcularSomasRecursivamente(items);

  // Cria as linhas da tabela
  const lines = items.map((item) => {
    const amount = item.quantity / item.quantity_per_serving;
    return (
      <tr key={item.id}>
        <td title={item.description}>
          <div className="cell-content">{item.description}</div>
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
          <Button onClick={() => removeProduct(item.id)}>Excluir</Button>
        </td>
      </tr>
    );
  });

  console.log("Soma total de calorias PRODUCTS:", somaCalProduct);
  console.log("Soma total de nutrientes PRODUCTS:", somaNutriProduct);

  const cols = (
    <tr>
      <th>Produto</th>
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