import React from "react";
import styles from "./Index.module.css";
import UqbarCard from "../utils/UqbarCard.js"
import concursoWollokGame from "./concurso-wollok-game.jpg";
import jornadasDocentes from "./jornadas-docentes.jpg";

export default function Eventos() {
  return (
    <div className={styles["eventos"]} id="Eventos">
      <div className={styles["eventosListado"]}>
        <UqbarCard
          link=""
          projectLogo={jornadasDocentes}
          projectName="Jornada Enseñanza Programacion"
          projectDescription="Un espacio de formación para compartir experiencias y discutir estrategias, metodologías y recursos para enseñar a programar en instituciones educativas."
        />
        <UqbarCard
          link="https://docs.google.com/document/d/1hIyF7JHVLJ2u-a69tJRH5YfxPIdaiMDav3tCArkX-qc/view"
          projectLogo={concursoWollokGame}
          projectName="Concurso Wollok Game"
          projectDescription="Si hiciste o estás haciendo un juego con Wollok Game, si estás aprendiendo a programar en objetos con Wollok y tenés ganas de explorar la interfaz gráfica de Game, si sos docente y queres mantenerte actualizado con las herramientas de Wollok, ¡este concurso es para vos! Junto con tu grupo, o individualmente, pueden hacer el juego que prefieran, presentarlo, que sea analizado por el jurado, que el público dé su opinión y ganar premios."
        />
      </div>
    </div>
  );
}
