import React from "react";
import { scrollTo } from "../utils/scrollTo";
import { FaAngleUp } from "react-icons/fa";

const ButtonTop = ({ toId, toRef, duration }) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      className={visible ? "button-top button-top_visible" : "button-top"}
      onClick={handleClick}
      aria-label="вернуться в начало"
    >
      <FaAngleUp className="button-top-ico" />
    </button>
  );
};

export default ButtonTop;
