import React from "react";
import styles from "./Index.module.css";
import UqbarCard from "../utils/UqbarCard.js"
import concursoWollokGame2019 from "./imgs/concurso-wollok-game-2019.jpg";
import jornadasDocentes from "./imgs/jornadas-docentes.jpg";
import convocatoriaDocente from "./imgs/convocatoria-docente.jpeg";
import encuentroVirtual from "./imgs/encuentro-virtual.jpg";
import concursoWollokGame2020 from "./imgs/concurso-wollok-game-2020.jpg";

export default function Eventos() {
  return (
    <div className={styles["eventos"]} id="Eventos">
      <h2>Próximos</h2>
      <div className={styles["eventosListado"]}>
        <UqbarCard
          link="https://docs.google.com/document/d/1mpsdbLlw2Y5r6hCcxQilL3LFHzuXUZ16xmAOGT8F9-w/view"
          projectLogo={concursoWollokGame2020}
          projectName="Concurso Wollok Game"
          projectDescription="Si hiciste o estás haciendo un juego con Wollok Game, si estás aprendiendo a programar en objetos con Wollok y tenés ganas de explorar la interfaz gráfica de Game, si sos docente y querés mantenerte actualizado con las herramientas de Wollok, ¡este concurso es para vos! Junto con tu grupo, o individualmente, pueden hacer el juego que prefieran, presentarlo, que sea analizado por el jurado y que el público dé su opinión."
        />
        <UqbarCard
          link="https://docs.google.com/document/d/e/2PACX-1vR0H_oeXpi7sVUwNQrdkwYqLOyY4stEBEAIkQlWEyCq7X_5lEHTSPZCgZUBdBFa1o4v3L5fivlhCz9q/pub"
          projectLogo={encuentroVirtual}
          projectName='Encuentros virtuales "Enseñando a programar" 2020'
          projectDescription="¿Qué estrategias usas para enseñar a programar?
¿Con qué problemas te encontrás?
¿Qué herramientas te son útiles?
Una serie de encuentros virtuales para dialogar sobre las experiencias educativas en torno a la enseñanza de la Programación"
        />
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
          projectLogo={concursoWollokGame2019}
          projectName="Concurso Wollok Game 2019"
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
