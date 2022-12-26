import React from "react";
import UqbarCard from "../utils/UqbarCard.js"
import UqbarCardGrid from "../utils/UqbarCardGrid.js"
import concursoWollokGame2019 from "./imgs/concurso-wollok-game-2019.jpg";
import concursoWollokGame2020 from "./imgs/votacion-concurso-wollok-game-2020.jpg";
import concursoWollokGame2021 from "./imgs/concurso-wollok-game-2021.png";
import concursoWollokGame2022 from "./imgs/concurso-wollok-game-2022.png";
import jornadasDocentes from "./imgs/jornadas-docentes.jpg";
import convocatoriaDocente from "./imgs/convocatoria-docente.jpeg";
import encuentroVirtual from "./imgs/encuentro-virtual.jpg";
import ultimoEvento2020 from "./imgs/ultimo-evento-2020.jpg";
import ultimoEvento2021 from "./imgs/ultimo-evento-2021.jpg";
import softwareLibre2022 from "./imgs/software-libre-2022.jpg";
import maquinasVirtuales2022 from "./imgs/maquinas-virtuales-2022.jpg"
import unahurTic from "./imgs/unahur-tic.jpeg"
import uqbarLogo from "./imgs/uqbar.png"

export function EventosActuales() {
  return (
    <UqbarCardGrid>
      <UqbarCard
        link="https://utn.zoom.us/j/87016722899"
        projectLogo={uqbarLogo}
        projectName="¡Cierre del año con Uqbar!"
        projectDescription="Martes 27 de Diciembre: Les invitamos a cerrar del año con nosotrxs. 
        Haremos un repaso de todas las cosas que se hicieron en Uqbar durante el año, y también presentaremos lxs ganadorxs del concurso Wollok Game 2022. La reunión será virtual en el link que se encuentra en la descripción de este evento. 
        ¡Lxs esperamos para brindar por otro año en comunidad!"
      />

      <UqbarCard
        link="https://docs.google.com/document/d/e/2PACX-1vQUxRzRAH_dUPMIO-N39x8F_mHDTa_DJb9ENgSxoEn4Ezb09PdzGr6pyD4UUv9Nm5-n1oVVBFD2B9Pu/pub"
        projectLogo={concursoWollokGame2022}
        projectName="Concurso Wollok Game"
        projectDescription="Si hiciste o estás haciendo un juego con Wollok Game, si estás aprendiendo a programar en objetos con Wollok y tenés ganas de explorar la interfaz gráfica de Game, si sos docente y querés mantenerte actualizado con las herramientas de Wollok, ¡este concurso es para vos! Junto con tu grupo, o individualmente, pueden hacer el juego que prefieran, presentarlo, que sea analizado por el jurado y que el público dé su opinión."
      />
    </UqbarCardGrid>
  )
}

export default function Eventos() {
  return (
    <div className="container" id="Eventos">
      <h2>ACTUALES</h2>
      <EventosActuales />

      <h2>2022</h2>
      <UqbarCardGrid>
        <UqbarCard
          link="https://www.instagram.com/p/ClHPR0vPE-7/?utm_source=ig_web_copy_link"
          projectLogo={unahurTic}
          projectName="UNAHUR@TIC"
          projectDescription='Encuentro de actualización Informática. Es una actividad que va a realizarse a en la Unahur @unahurlingham.
          📆 Sábado 19/11 Para destacar:
          ⏱11hs Débora Fortini "El software libre te lleva al mundial"
          ⏱14hs Gerardo Gonzalez Tulian "De wollok a ..."
          '
        />

        <UqbarCard
          link="https://docs.google.com/document/d/e/2PACX-1vR6zTgX7xcT_IMwnpO56kaDBLiafHFce4Y1P12kdN_Goyi2Pc6nlVLLkUf6DlrOgCVFF-TpZ27Rp1p2/pub"
          projectLogo={softwareLibre2022}
          projectName="Proyectos Innovadores con Software Libre"
          projectDescription="Aunque a veces es poco visible para el gran público por fuera de los especialistas informáticos, el software libre es un pilar fundamental para el funcionamiento de muchos de los recursos tecnológicos que usamos a diario, así como de los proyectos más innovadores y creativos. En esta jornada contaremos tres experiencias concretas de utilización de software libre para aplicaciones de alta demanda y complejidad, repasando las ventajas y los desafíos de haber encarado los diferentes proyectos con esa estrategia, así como los retos y objetivos de cara al futuro."
        />
        <UqbarCard
          link="https://docs.google.com/document/d/1FTdlT7WH3EJIC68BYJRkXeLhPQYAzg27Ya4t3RylOKs/edit?usp=sharing"
          projectLogo={maquinasVirtuales2022}
          projectName="Máquinas Virtuales Performantes y Robustas"
          projectDescription="En esta charla vamos a visitar las máquinas virtuales desde sus técnicas fundadoras hasta sus desafíos actuales usando la máquina virtual del lenguaje Pharo como ejemplo.
          La VM de Pharo esta escrita en Pharo mismo y basada en un sistema de simulación y transpilación.
          Vamos a empezar por los problemas de la interpretación, la traducción dinámica o compilación JIT, las cachés polimórficas, y la compilación adaptativa.
          Vamos a visitar la creación de compiladores usando técnicas de meta-compilación, y distintos ejemplos del problema de la validación de compiladores. Finalmente, vamos a discutir desafíos aun no resueltos con respecto a la ejecución manejada, la evaluación de performance, la gestion de memoria automática con hardware reciente y la seguridad."
        />
      </UqbarCardGrid>

      <h2>2021</h2>
      <UqbarCardGrid>
        <UqbarCard
          link="https://docs.google.com/document/d/e/2PACX-1vSxR8Kna9mxcXVJmcooGxPYok05MQUyj7eQwOeMPGCL48KujVS41vsYNyLDKsno1E7_EMCBQJ3aF3fS/pub"
          projectLogo={ultimoEvento2021}
          projectName="¡Último evento del año!"
          projectDescription="El próximo viernes 17 de diciembre, a las 18 horas, nos reuniremos de manera virtual para presentar los trabajos realizados a lo largo del año sobre nuestros diferentes proyectos y realizaremos el cierre del concurso de Wollok Game: ¡Ya finalizaron las inscripciones y es el momento de elegir a los juegos ganadores y entregarles sus premios!"
        />
        <UqbarCard
          link="https://docs.google.com/document/d/e/2PACX-1vTmBpmoVX52Kn2KKJME6AkZNoCZcqaMgrV9cRWDeG0Wc3zuT8BRFuahmFtoUeVXJfBfwCF8Mn4FrobP/pub"
          projectLogo={concursoWollokGame2021}
          projectName="Concurso Wollok Game 2021"
          projectDescription="Si hiciste o estás haciendo un juego con Wollok Game, si estás aprendiendo a programar en objetos con Wollok y tenés ganas de explorar la interfaz gráfica de Game, si sos docente y querés mantenerte actualizado con las herramientas de Wollok, ¡este concurso es para vos! Junto con tu grupo, o individualmente, pueden hacer el juego que prefieran, presentarlo, que sea analizado por el jurado y que el público dé su opinión."
        />
      </UqbarCardGrid>

      <h2>2020</h2>
      <UqbarCardGrid>
        <UqbarCard
          link="https://docs.google.com/document/d/e/2PACX-1vQKRcflFRkujk9JtQwC4njuVQm87VhlsdOrL7gD2yCr9ObbvBP1BJeIEZDkcMw5vQyHf2GV6WgvT0xR/pub"
          projectLogo={ultimoEvento2020}
          projectName="¡Último evento del año!"
          projectDescription="El próximo viernes 18 de diciembre, a las 19 horas, nos reuniremos de manera virtual para presentar los trabajos realizados a lo largo del año sobre nuestros diferentes proyectos y realizaremos el cierre del concurso Jugando con Wollok Game: ¡Ya finalizaron las inscripciones y es el momento de elegir a los juegos ganadores y entregarles sus premios!"
        />
        <UqbarCard
          link="https://docs.google.com/document/d/e/2PACX-1vRovuWOwqDfeF0CddazQwDGWlIAhVrvJJUYF45Jxnh5g5sL_lHIjy9xyv7kw8wCYaJmzM9x0kmVJCBd/pub"
          projectLogo={concursoWollokGame2020}
          projectName="Concurso Wollok Game 2020"
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
      </UqbarCardGrid>

      <h2>2019</h2>
      <UqbarCardGrid>

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
      </UqbarCardGrid>
    </div>
  );
}
