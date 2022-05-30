import React from "react";

function Contacts({ title }) {
  return (
    <div className="links">
      <h3 className="links__title">{title}</h3>
      <ul className="links__list">
        <li className="links__list-item">
          <div className="links__list-icon_mail"></div>
          <a href="/" className="links__list-link">
            test@test.ru
          </a>
        </li>
        <li className="links__list-item">
          <div className="links__list-icon_phone"></div>
          <a href="/" className="links__list-link">
            +8 777 555 66 99
          </a>
        </li>
        <li className="links__list-item">
          <div className="links__list-icon_map"></div>
          <a href="/" className="links__list-link">
            Москва, Бульвар Ленина 33
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
