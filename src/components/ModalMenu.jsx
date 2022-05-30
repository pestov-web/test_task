import React from "react";
import Modal from "react-modal";
import { CgClose } from "react-icons/cg";
import navMenuItems from "../data/NavMenuItems";
import NavButton from "./NavButton";

Modal.setAppElement("body");

function ModalMenu({ modalMenuOpen, toggleModalMenu, setActiveName }) {
  const onClickHandler = (name) => {
    toggleModalMenu();
    setActiveName(name);
  };

  return (
    <div>
      <Modal
        isOpen={modalMenuOpen}
        onRequestClose={toggleModalMenu}
        contentLabel="Burger Modal"
        overlayClassName="modal-menu__overlay"
        className="modal-menu"
      >
        <nav>
          <ul className="modal-menu__nav">
            {navMenuItems.map((item) => (
              <li key={item.id} className="nav__list-item">
                {item.type === "button" ? (
                  <NavButton
                    toId={item.anchor}
                    selfClass={"modal-menu__nav-link"}
                    onClick={() => onClickHandler(item.name)}
                  >
                    {item.name}
                  </NavButton>
                ) : (
                  <a
                    href={item.url}
                    className="nav__list-link modal-menu__nav-link"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="modal-menu__close-button"
          aria-label="Закрыть"
          onClick={toggleModalMenu}
        >
          <CgClose />
        </button>
      </Modal>
    </div>
  );
}

export default ModalMenu;
