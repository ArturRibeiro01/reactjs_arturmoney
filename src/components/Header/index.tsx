import { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";
import * as S from "./styles";

export const Header = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt-mony" />
        <button onClick={handleOpenNewTransactionModal} type="button">
          Nova transação
        </button>

        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar Transação</h2>
        </Modal>
      </S.Content>
    </S.Container>
  );
};
