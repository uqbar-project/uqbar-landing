import React from "react";
import styles from "./Index.module.css";
import UqbarCard from "../utils/UqbarCard.js"
import concursoWollokGame from "./imgs/concurso-wollok-game.jpg";
import jornadasDocentes from "./imgs/jornadas-docentes.jpg";
import convocatoriaDocente from "./imgs/convocatoria-docente.jpeg";

export default function Eventos() {
  return (
    <div className={styles["eventos"]} id="Eventos">
      <h2>Próximos</h2>
      <div className={styles["eventosListado"]}>
        <UqbarCard
          link="https://docs.google.com/document/d/e/2PACX-1vRcVrBm-xzDVPhR2CL1YsTK7xYRtT93KPSdisAaRq_KtERJjciRRl-cukJS0Sen87zVCSqflVD2DQRc/pub"
          projectLogo={convocatoriaDocente}
          projectName="Convocatoria Docente"
          projectDescription="¿Cuáles son los desafíos que se presentan al momento de enseñar programación? ¿Qué herramientas usamos dentro del aula? Desde la Fundación Uqbar nos interesa poder conversar sobre las experiencias educativas y reflexionar sobre los aprendizajes que se construyeron y se siguen construyendo en el contexto del aislamiento social preventivo obligatorio."
        />
      </div>
      <h2>Anteriores</h2>
      <div className={styles["eventosListado"]}>
        <UqbarCard
          link="https://docs.google.com/document/d/1hIyF7JHVLJ2u-a69tJRH5YfxPIdaiMDav3tCArkX-qc/view"
          projectLogo={concursoWollokGame}
          projectName="Concurso Wollok Game"
          projectDescription="Si hiciste o estás haciendo un juego con Wollok Game, si estás aprendiendo a programar en objetos con Wollok y tenés ganas de explorar la interfaz gráfica de Game, si sos docente y queres mantenerte actualizado con las herramientas de Wollok, ¡este concurso es para vos! Junto con tu grupo, o individualmente, pueden hacer el juego que prefieran, presentarlo, que sea analizado por el jurado, que el público dé su opinión y ganar premios."
        />
        <UqbarCard
          link="https://docs.google.com/document/d/1rJdrULtkcoLSuSzcp98ishrMS_04xPBdVW0Gyp3llno/edit"
          projectLogo={jornadasDocentes}
          projectName="Jornada Enseñanza Programacion"
          projectDescription="Un espacio de formación para compartir experiencias y discutir estrategias, metodologías y recursos para enseñar a programar en instituciones educativas."
        />
      </div>
    </div>
  );
}
