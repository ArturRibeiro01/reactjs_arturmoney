import Modal from "react-modal";
import CloseImg from "../../assets/close.svg";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import * as S from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose}>
        <img className="react-modal-close" src={CloseImg} alt="Fechar Modal" />
      </button>
      <S.Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <S.TransactionTypeContainer>
          <button type="button">
            <img src={IncomeImg} alt=" Imagem Entradas" />
            <span>Entradas</span>
          </button>

          <button type="button">
            <img src={OutcomeImg} alt=" Imagem Entradas" />
            <span>Saídas</span>
          </button>
        </S.TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
};
