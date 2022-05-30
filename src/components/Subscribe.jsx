import React, { useState } from "react";

function Subscribe({ toggleModalMsg }) {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");

  const checkForm = () => {
    setErrors([]);
    if (!email) {
      setErrors("Требуется указать email.");
      return false;
    } else if (!validEmail(email)) {
      setErrors("Укажите корректный email.");
      return false;
    }
    return true;
  };

  const validEmail = (email) => {
    const regExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}1])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkForm()) {
      toggleModalMsg();
      setEmail("");
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="section subscribe">
      <h2 className="subscribe__title">Подпишитесь на нашу рассылку</h2>
      <p className="subscribe__subtitle">
        Полезные статьи, акции, новости - получите все это сейчас!
      </p>
      <form
        method="post"
        className="subscribe__form"
        action="#"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className="subscribe__input"
          type="email"
          placeholder="Ваш e-mail"
          value={email}
          onChange={handleChange}
        />
        <button className="subscribe__submit" type="submit">
          Подписаться
        </button>
      </form>
      <span
        className={
          errors.length
            ? "subscribe__error subscribe__error_active"
            : "subscribe__error"
        }
      >
        {errors.length
          ? errors
          : "Мы не шлем спам, и передаем никому ваши данные."}
      </span>
    </section>
  );
}

export default Subscribe;
