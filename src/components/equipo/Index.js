import React from "react";
import styles from "./Index.module.css";
import close from "./icono-cerrar.svg";
import demo from "./demo.jpg";

export function Miembro({ name, photo, bio }) {
  return (
    <div className={[styles.member, styles.inactive].join(" ")}>
      <div className={styles["photo"]}>
        <img src={photo} alt={name} />
      </div>
      <div className={styles["description"]}>
        <img src={close} alt="Close" className={styles["closeIcon"]} />
        <div className={styles["name"]}>{name}</div>
        <div className={styles["bio"]}>{bio}</div>
      </div>
    </div>
  );
}

export default function Equipo() {
  return (
    <div className={styles["equipo"]}>
      <div className={styles["container"]}>
        <h2>Equipo</h2>
        <div className={styles["equipoListado"]}>
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
          <Miembro
            name="Agustín Ruiz"
            photo={demo}
            bio="Demasiado académico para la ingeniería, demasiado práctico para la ciencia. Nico fue docente, investigador e ingeniero durante 20 años construyendo software en muchos lenguajes incluyendo algunos diseñados por él mismo. Padre de dos hijos y muchísimos proyectos locos. Le gusta cocinar (y comer), elaborar cerveza, el ajedrez, el fútbol, pero sobre todas las cosas llevar la teoría a la práctica."
          />
        </div>
      </div>
    </div>
  );
}
