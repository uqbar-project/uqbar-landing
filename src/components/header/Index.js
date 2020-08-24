import React from "react";
import logo from "./logo.svg";
import discord from "./Discord-Logo-Color.svg"
import styles from "./Index.module.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  return (
      <div className={styles["header"]}>
        <div className={styles["container"]}>
          <div className={styles["uqbarlogo"]}>
            <Link to="/">
              <img src={logo} alt="Uqbar"/>
            </Link>
          </div>
          <div className={styles["navbar"]}>
            <ul>
              <li>
                <Link to="/#Proyectos">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/#Equipo">
                  Equipo
                </Link>
              </li>
              <li>
                <Link to="/#Donaciones">
                  Donaciones
                </Link>
              </li>
              <li>
                <Link to="/#Contacto">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/eventos">
                  Eventos
                </Link>
              </li>
              
              <li>
                <a href="https://discord.gg/5wVEwse">
                  Únete a Nuestro Discord! 
                  <img src={discord} alt="Discord" className={styles["discordlogo"]}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

