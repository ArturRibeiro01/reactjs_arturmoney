import logoImg from "../../assets/logo.svg";
import * as S from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt-mony" />
        <button onClick={onOpenNewTransactionModal} type="button">
          Criar Transação
        </button>
      </S.Content>
    </S.Container>
  );
};
