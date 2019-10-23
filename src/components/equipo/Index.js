import React, {useState} from "react";
import styles from "./Index.module.css";

import miembros from './equipo.json';

miembros.sort(() => 0.5 - Math.random()) // shuffle

export function Miembro({ name, bio, email, onClick, active }) {
  return (
    <div className={[styles.member, active ? styles.active:styles.inactive].join(" ")} onClick={onClick}>
      <div className={styles["photo"]}>
        <img src={require("./photos/" + name + ".jpg")} alt={name} />
      </div>
      <div className={styles["description"]}>
        <div className={styles["name"]}>{name}</div>
        <div className={styles["bio"]}>{bio}</div>
        <div className={styles["bio"]}>{email}</div>
      </div>
    </div>
  );
}

export default function Equipo() {
  const [active, setActive] = useState(null);
  const isActive = (index) => index === active
  return (
    <div className={styles["equipo"]} id="Equipo">
      <div className={styles["container"]}>
        <h2>Equipo</h2>
        <div className={styles["equipoListado"]}>
        {
          miembros.map((miembro, index)=>(
            <Miembro key={index} onClick={()=>setActive(isActive(index) ? null : index)} active={isActive(index)} {...miembro}/>
          ))
        }
        </div>
      </div>
    </div>
  );
}
