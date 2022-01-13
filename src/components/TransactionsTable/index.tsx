import { useEffect } from "react";
import { api } from "../../services/api";
import * as S from "./styles";

export const TransactionsTable = () => {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Trabalho</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Uso de drogas</td>
            <td className="withdraw">R$12.000</td>
            <td>Trabalho</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
};
