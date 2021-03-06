import { useTransactions } from "../../hooks/useTransactions";
import * as S from "./styles";

export const TransactionsTable = () => {
  const { transactions } = useTransactions();

  return (
    <S.Container>
      {transactions.length === 0 ? (
        <>
          <S.VoidTableMessage>
            Para criar sua primeira tarefa clique em Criar Transação
          </S.VoidTableMessage>
        </>
      ) : (
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
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </S.Container>
  );
};
