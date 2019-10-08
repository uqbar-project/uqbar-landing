import React, {useState} from "react";
import styles from "./Index.module.css";
import demo from "./demo.jpg";

import miembros from '../../equipo.json';
import { setState } from "expect/build/jestMatchersObject";

export function Miembro({ name, photo, bio, onClick, active }) {
  return (
    <div className={[styles.member, active ? styles.active:styles.inactive].join(" ")} onClick={onClick}>
      <div className={styles["photo"]}>
        <img src={photo} alt={name} />
      </div>
      <div className={styles["description"]}>
        <div className={styles["name"]}>{name}</div>
        <div className={styles["bio"]}>{bio}</div>
      </div>
    </div>
  );
}

export default function Equipo() {
  const [active, setActive] = useState(null);
  return (
    <div className={styles["equipo"]} id="Equipo">
      <div className={styles["container"]}>
        <h2>Equipo</h2>
        <div className={styles["equipoListado"]}>
        {
          miembros.map(({name, bio}, index)=>(
            <Miembro name={name} bio={bio} photo={demo} onClick={()=>setActive(index)} active={index === active}/>
          ))
        }
        </div>
      </div>
    </div>
  );
}
