import React from "react";
import { scrollTo } from "../utils/scrollTo";

function NavButton({ toId, toRef, duration, children, onClick, selfClass }) {
  const handleMenuClick = () => {
    scrollTo({ id: toId, ref: toRef, duration });
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      className={selfClass ? `${selfClass}` : "nav-button"}
      onClick={handleMenuClick}
    >
      {children}
    </button>
  );
}

export default NavButton;
