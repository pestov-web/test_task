import React from "react";
import servicesItems from "../data/ServicesItems";
import "react-on-scroll-animation/build/index.css";
import Rosa from "react-on-scroll-animation";

function Services() {
  const animations = ["zoom-in-right", "zoom-in", "zoom-in-left"];
  return (
    <section className="section services" id="services">
      <h2 className="services__title">
        Мы создаем мобильные приложения для крупных корпораций
      </h2>
      <p className="services__subtitle">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века.{" "}
      </p>
      <ul className="services__list">
        {servicesItems.map((item) => (
          <li key={item.id} className="services__list-im">
            {" "}
            <Rosa
              animation={animations[item.id]}
              duration={300}
              delay={300}
              disable="mobile"
            >
              <div className="services__list-item">
                {" "}
                <div className="services__list-badge">
                  <div className="services__list-icon"></div>
                </div>
                <div className="services__list-text">
                  <h3 className="services__list-title">{item.title}</h3>
                  <p className="services__list-paragraph">{item.subtitle}</p>
                </div>
              </div>
            </Rosa>
          </li>
        ))}
      </ul>
      <button className="services__more-button">Все услуги</button>
    </section>
  );
}

export default Services;
