import React from "react";
import NavButton from "./NavButton";

function Hero({ setActiveName }) {
  return (
    <section className="section hero" id="home">
      <h1 className="hero__title">Передовая IT студия</h1>
      <p className="hero__subtitle">
        Мы создаем легкие решения сложных задач и проблем
      </p>
      <NavButton
        toId={"projects"}
        selfClass={"hero__button"}
        onClick={() => setActiveName("Наши проекты")}
      >
        Наши проекты
      </NavButton>
      {/*<button className="hero__button">Наши проекты</button>*/}
    </section>
  );
}

export default Hero;
