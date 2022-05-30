import React from "react";
import aboutImg from "../images/About/about.webp";
import aboutItems from "../data/AboutItems";

function About() {
  return (
    <section className="section about">
      <div className="about__container">
        <div className="about__text">
          <h2 className="about__text-title">Высокие стандарты разработки</h2>
          <p className="about__text-subtitle">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. стандартной "рыбой" для текстов на
            латинице с начала XVI века.{" "}
          </p>
          <a href="/about" className="about__text-link">
            Подробнее о компании
          </a>
        </div>
        <img className="about__image" src={aboutImg} alt="" />
      </div>
      <ul className="about__list">
        {aboutItems.map((item) => (
          <li key={item.id} className="about__list-item">
            <div className="about__list-numbers">
              <div className="about__list-icon"></div>
              <span className="about__list-count">{item.count}</span>
            </div>
            <p className="about__list-text">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;
