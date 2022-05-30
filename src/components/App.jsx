import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Projects from "./Projects";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Main from "./Main";
import { useState } from "react";
import ModalMailMsg from "./ModalMailMsg";
import ModalMenu from "./ModalMenu";
import ButtonTop from "./ButtonTop";

function App() {
  const [modalMenuOpen, setModalMenuOpen] = useState(false);
  const [modalMsgOpen, setModalMsgOpen] = useState(false);
  const [activeName, setActiveName] = useState("Главная");

  const toggleModalMenu = () => {
    setModalMenuOpen(!modalMenuOpen);
  };
  const toggleModalMsg = () => {
    setModalMsgOpen(!modalMsgOpen);
  };

  return (
    <div className="App">
      <Header
        toggleModalMenu={toggleModalMenu}
        activeName={activeName}
        setActiveName={setActiveName}
      />
      <Hero setActiveName={setActiveName} />
      <Main>
        <Services />
        <About />
        <Projects />
        <Subscribe toggleModalMsg={toggleModalMsg} />
      </Main>
      <Footer />
      <ModalMenu
        modalMenuOpen={modalMenuOpen}
        toggleModalMenu={toggleModalMenu}
        setActiveName={setActiveName}
      />
      <ModalMailMsg
        modalMsgOpen={modalMsgOpen}
        toggleModalMsg={toggleModalMsg}
      />
      <ButtonTop toId="home" />
    </div>
  );
}

export default App;
