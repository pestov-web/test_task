import React from "react";
import Slider from "./Slider";

function Projects() {
  return (
    <section className="section projects" id="projects">
      <h2 className="projects__title">Наши проекты</h2>
      <p className="projects__subtitle">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века.{" "}
      </p>
      <Slider />
    </section>
  );
}

export default Projects;
