import React from "react";
import { FaVk, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function SocialButtons() {
  return (
    <ul className="social-buttons">
      <li className="social-buttons__item">
        <a
          href="https://vk.com/"
          target="_blank"
          rel="noreferrer"
          className="social-buttons__link"
        >
          <FaVk />
        </a>
      </li>
      <li className="social-buttons__item">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="social-buttons__link"
        >
          <FaInstagram />
        </a>
      </li>
      <li className="social-buttons__item">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="social-buttons__link"
        >
          <FaFacebook />
        </a>
      </li>{" "}
      <li className="social-buttons__item">
        <a
          href="https://twitter.com/?lang=ru"
          target="_blank"
          rel="noreferrer"
          className="social-buttons__link"
        >
          <FaTwitter />
        </a>
      </li>
    </ul>
  );
}

export default SocialButtons;
