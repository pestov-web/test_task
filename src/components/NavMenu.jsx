import React, { useState } from "react";
import navMenuItems from "../data/NavMenuItems";
import NavButton from "./NavButton";

function NavMenu({ activeName, setActiveName }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navMenuItems.map((item) => (
          <li
            key={item.id}
            className={
              activeName === item.name
                ? "nav__list-item nav__list-item_active"
                : "nav__list-item"
            }
          >
            {item.type === "button" ? (
              <NavButton
                toId={item.anchor}
                onClick={() => setActiveName(item.name)}
              >
                {item.name}
              </NavButton>
            ) : (
              <a href={item.url} className="nav__list-link">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
