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
      <p className={styles["description"]}>Desde la Fundación se dictaron varios talleres gratuitos a lo largo de los años.</p>
      <UqbarCardGrid>
        {/* Hack for cards distribution in the grid*/}
        <div/> <div/> 
        <UqbarCard
          link="https://talleres.uqbar.org/"
          projectLogo={ludover}
          projectName="Ludover"
          projectDescription="Ludover es un espacio para facilitar el acercamiento de personas que deseen desarrollar videojuegos, y ayudarlas a llevar adelante sus proyectos, desde la concepción de la idea hasta la publicación, o el objetivo que se quiera lograr. Dictado en 2021."
        />
        <UqbarCard
          link="https://talleres.uqbar.org/"
          projectLogo={maquinasVirtuales}
          projectName="Máquinas Virtuales"
          projectDescription="Taller de máquinas virtuales es un espacio para aprender sobre el funcionamiento de la implementación de lenguajes de programación modernos. El objetivo principal del taller es aprender haciendo, y trabajar sobre técnicas de implementación y optimización. Dictado en 2021."
        />
        <UqbarCard
          link="https://github.com/uqbar-taller-de-lenguajes/taller-2017/wiki"
          projectLogo="https://raw.githubusercontent.com/wiki/uqbar-taller-de-lenguajes/taller-2017/images/temas.jpg"
          projectName="Taller de lenguajes"
          projectDescription="Taller dictado en 2017 para aprender a construir las herramientas que definen un lenguaje desde un enfoque práctico."
        />
      </UqbarCardGrid>
    </div>
  )
}
