import React, { useState, useEffect } from "react";
import { Badge, Button } from "@material-ui/core";
import styles from "./Index.module.css";
import miembros from './equipo.json';
import badgeApi from "../utils/badgeApi";

miembros.sort(() => 0.5 - Math.random()) // shuffle

export function Miembro({ name, bio, email, badge, badgeData, sumBadgeClick }) {
  return (
    <>
      <div className={styles["photo"]}>
        <img src={require("./photos/" + name + ".jpg")} alt={name} />
      </div>
      <div className={styles["description"]}>
        <div className={styles["name"]}>{name}</div>
        <div className={styles["bio"]}>{bio}</div>
        <div className={styles["bio"]}>{email}</div>
        {badge &&
          <Badge badgeContent={badgeData[badge.id]} color="primary" className={styles["badge"]}>
            <Button variant="outlined" onClick={event => { event.stopPropagation(); sumBadgeClick(badge.id) }}>
              {badge.text}
            </Button>
          </Badge>
        }
      </div>
    </>
  );
}

export default function Equipo() {
  const [active, setActive] = useState(null);
  const [badgeData, setBadgeData] = useState({});

  useEffect(() => { badgeApi.get().then(setBadgeData) }, [])

  const sumBadgeClick = (id) => {
    const currentValue = badgeData[id] || 0
    const newBadgeData = { ...badgeData, [id]: currentValue + 1 }
    setBadgeData(newBadgeData)
    badgeApi.update(newBadgeData)
  }

  const isActive = (index) => index === active

  return (
    <div className={styles["equipo"]} id="Equipo">
      <div className={styles["container"]}>
        <h2>Equipo</h2>
        <div className={styles["equipoListado"]}>
          {
            miembros.map((miembro, index) => (
              <div key={index} 
                className={[styles.member, isActive(index) ? styles.active : styles.inactive].join(" ")} 
                onClick={() => setActive(isActive(index) ? null : index)} 
              >
                <Miembro badgeData={badgeData} sumBadgeClick={sumBadgeClick} {...miembro} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
