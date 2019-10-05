import React from "react";
import styles from "./Index.module.css";
import arena from "./proyecto-arena.png";
import sgit from "./proyecto-sgit.png";
import uqbarwiki from "./proyecto-uqbarwiki.png";
import wollok from "./proyecto-wollok.png";
import yanapiri from "./proyecto-yanapiri.png";

export function ProyectoIndividual({
  projectName,
  projectDescription,
  projectLogo
}) {
  return (
    <div className={styles["proyectoIndividual"]}>
      <div className={styles["header"]}>
        <div className={styles["projectLogo"]}>
          <img
            src={projectLogo}
            alt={projectName}
            className={styles["projectLogo"]}
          />
        </div>
        <div className={styles["projectName"]}>
          <a href="#">{projectName}</a>
        </div>
      </div>
      <p className={styles["projectDescription"]}>{projectDescription}</p>
    </div>
  );
}

export default function Proyectos() {
  return (
    <div className={styles["proyectos"]}>
      <div className={styles["container"]}>
        <h2>Proyectos</h2>
        <div className={styles["proyectosListado"]}>
          <ProyectoIndividual
            projectLogo={wollok}
            projectName="Wollok"
            projectDescription="Wollok es un lenguaje de programación y entorno de desarrollo integrado (IDE) para ser utilizado en el dictado de materias iniciales de programación a objetos. Es ideal para aprender a programar con objetos ya que permite ir incorporando los conceptos gradualmente permitiendo programar y modelar desde el primer día."
          />
          <ProyectoIndividual
            projectLogo={uqbarwiki}
            projectName="Uqbar Wiki"
            projectDescription="La herramienta colaborativa del equipo de uqbar, que agrupa y organiza el conocimiento con el que trabajamos, con el objetivo de compartirlo tanto entre las distintas universidades en las que nos desempeñamos como para la comunidad en general."
          />
          <ProyectoIndividual
            projectLogo={arena}
            projectName="Arena MMVC framework"
            projectDescription="Arena es un framework para la construcción de interfaces de usuario diseñado para posibilitar que todo el comportamiento pueda ser definido en base a modelos. Es una herramienta pensada con fines educativos, pero también ha sido utilizada exitosamente para proyectos profesionales."
          />
          <ProyectoIndividual
            projectLogo={yanapiri}
            projectName="Yanapiri"
            projectDescription="Yanapiri es un vocablo aymara que significa ayudante o el que ayuda. A partir de este humilde aporte, es también una aplicación de línea de comandos (CLI) para asistir a docentes en ciertas tareas relacionadas al manejo de entregas a través de GitHub Classroom."
          />
          <ProyectoIndividual
            projectLogo={sgit}
            projectName="SGit"
            projectDescription="SGit es un plugin de eclipse simplificado, pensado para estudiantes que están dando sus primeros pasos en la programación. SGit posibilita un primer acercamiento al uso de herramientas de versionado y repositorios de código evitando las complejidades que aparecen en las herramientas profesionales."
          />
        </div>
      </div>
    </div>
  );
}
