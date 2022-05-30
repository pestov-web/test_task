import React from "react";
import NavMenu from "./NavMenu";
import { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";

function Header({ toggleModalMenu, activeName, setActiveName }) {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={visible ? "header" : "header header_hidden"}
      style={{ backgroundColor: position !== 0 && "rgba(0, 0, 0, 0.4)" }}
    >
      <div className="header__container">
        {" "}
        <NavMenu activeName={activeName} setActiveName={setActiveName} />
        <button
          onClick={toggleModalMenu}
          className="burger-button"
          aria-label="Мобильное меню"
        >
          <CgMenu />
        </button>
      </div>
    </header>
  );
}

export default Header;
