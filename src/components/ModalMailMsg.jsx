import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("body");

function ModalMailMsg({ modalMsgOpen, toggleModalMsg }) {
  return (
    <ReactModal
      isOpen={modalMsgOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={toggleModalMsg}
      className="mail-modal"
      overlayClassName="mail-modal__overlay"
    >
      <p className="mail-modal__title">Вы подписались на нашу рассылку</p>
      <button className="mail-modal__close-button" onClick={toggleModalMsg}>
        Закрыть
      </button>
    </ReactModal>
  );
}

export default ModalMailMsg;
