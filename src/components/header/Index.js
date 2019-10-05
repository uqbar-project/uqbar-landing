import React from "react";
import logo from "./logo.svg";
import styles from "./Index.module.css";

export default function Header() {
  return (
      <div className={styles["header"]}>
        <div className={styles["container"]}>
          <div className={styles["uqbarlogo"]}>
            <img src={logo} alt="Uqbar"/>
          </div>
          <div className={styles["navbar"]}>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Donaciones</a>
              </li>
              <li>
                <a href="#">Proyectos</a>
              </li>
              <li>
                <a href="#">Equipo</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

