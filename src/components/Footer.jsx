import React from "react";
import LinksList from "./LinksList";
import { links, projects, social } from "../data/FooterItems";
import Contacts from "./Contacts";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SocialButtons from "./SocialButtons";

function Footer() {
  const { height, width } = useWindowDimensions();
  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <Contacts title={"Контактная информация"} />
        {width >= 992 && <LinksList list={links} title={"Основные ссылки"} />}
        {width >= 576 && <LinksList list={projects} title={"Наши проекты"} />}
        {width >= 1200 ? (
          <LinksList list={social} title={"Социальные сети"} />
        ) : (
          <SocialButtons />
        )}
      </div>
      <small className="footer__copy">(с) 2019. Все права защищены.</small>
    </footer>
  );
}

export default Footer;
