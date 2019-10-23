import React from "react";
import ilustracion01 from "./ilustracion01.svg";
import styles from "./Index.module.css";

export default function Inicio() {
  return (
    <div className={styles["inicio"]} id="Inicio">
      <div className={styles["container"]}>
        <h1>
          Innovando, descubriendo y construyendo nuevos caminos para que las ciencias de la computación y la educación se fortalezcan.
        </h1>
        <div className={styles["content"]}>
          <div className={styles["contentLeft"]}>
            <p className={styles["quienessomos"]}>
              La Fundación Uqbar es un grupo de docentes, ingenieros e
              investigadores que tiene por objetivo promover el desarrollo de la
              educación en informática para <strong>favorecer el acceso inclusivo a la educación y las innovaciones
                tecnológicas.</strong>
            </p>
            <p className={styles["color-muted"]}>
              Nos proponemos ayudar a que cada uno llevar sus ideas en práctica,
              así como entender las teorías detrás de nuestras acciones, con la
              convicción de que nada está escrito en piedra, todo lo que sabemos
              se puede y se debe cuestionar.
            </p>
            <p>
              <strong>Nuestros valores se basan en:</strong>
            </p>
            <ul className={styles["valores"]}>
              <li className={styles["valor01"]}>La educación accesible como herramienta de inclusión y progreso.</li>
              <li className={styles["valor02"]}>El fortalecimiento de los vínculos entre la enseñanza, la investigación y la industria tecnológica.</li>
              <li className={styles["valor03"]}>El aprovechamiento de la tecnología al servicio de la sociedad.</li>
              <li className={styles["valor04"]}>La innovación permanente.</li>
            </ul>
          </div>
          <div className={styles["contentRight"]}>
            <img src={ilustracion01} alt="Inicio" />
          </div>
        </div>
      </div>
    </div>
  );
}
