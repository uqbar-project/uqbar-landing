import React from "react"
import styles from "./Index.module.css"
import UqbarCard from "../utils/UqbarCard.js"
import UqbarCardGrid from "../utils/UqbarCardGrid.js"
import ludover from "./ludover.png"
import maquinasVirtuales from "./maquinas-virtuales.jpg"
import talleresBanner from "./uqbar-talleres.jpeg"

export default function Proyectos() {
  return (
    <div className="container" id="Talleres">
      {/* TODO: <ImgLink>? */}
      <a href="https://talleres.uqbar.org/" target="_blank" rel="noopener noreferrer">
        <img src={talleresBanner} alt="Talleres Uqbar" />
      </a>
      <p className={styles["description"]}>Desde la Fundación, durante la primera parte del año 2021 se dictarán dos talleres gratuitos: <strong>Ludover (taller de videojuegos)</strong> y <strong>Máquinas Virtuales</strong>.</p>
      <UqbarCardGrid>
        <UqbarCard
          link="https://talleres.uqbar.org/"
          projectLogo={ludover}
          projectName="Ludover"
          projectDescription="Ludover es un espacio para facilitar el acercamiento de personas que deseen desarrollar videojuegos, y ayudarlas a llevar adelante sus proyectos, desde la concepción de la idea hasta la publicación, o el objetivo que se quiera lograr."
        />
        <UqbarCard
          link="https://talleres.uqbar.org/"
          projectLogo={maquinasVirtuales}
          projectName="Máquinas Virtuales"
          projectDescription="Taller de máquinas virtuales es un espacio para aprender sobre el funcionamiento de la implementación de lenguajes de programación modernos. El objetivo principal del taller es aprender haciendo, y trabajar sobre técnicas de implementación y optimización."
        />
      </UqbarCardGrid>
    </div>
  )
}
