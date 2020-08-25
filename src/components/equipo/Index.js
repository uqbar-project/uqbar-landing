import React, { useState, useEffect } from "react";
import { Badge, Button } from "@material-ui/core";
import styles from "./Index.module.css";
import miembros from './equipo.json';

miembros.sort(() => 0.5 - Math.random()) // shuffle

export function Miembro({ name, bio, email, badge, badgeData, addBadge, onClick, active }) {
  return (
    <div className={[styles.member, active ? styles.active : styles.inactive].join(" ")} onClick={onClick}>
      <div className={styles["photo"]}>
        <img src={require("./photos/" + name + ".jpg")} alt={name} />
      </div>
      <div className={styles["description"]}>
        <div className={styles["name"]}>{name}</div>
        <div className={styles["bio"]}>{bio}</div>
        <div className={styles["bio"]}>{email}</div>
        {badge &&
          <Badge badgeContent={badgeData[badge.id]} color="primary" className={styles["badge"]}>
            <Button variant="outlined" onClick={event => {event.stopPropagation(); addBadge(badge.id)}}>
              {badge.text}
            </Button>
          </Badge>
        }
      </div>
    </div>
  );
}

export default function Equipo() {
  const [active, setActive] = useState(null);
  const [badgeData, setBadgeData] = useState({});

  const BIN_ID = "5f455fdc4d8ce41113809ad1"
  const API_URL = `https://api.jsonbin.io/b/${BIN_ID}`
  
  useEffect(() => {
    fetch(API_URL, { headers: [["secret-key", "$2b$10$Q.HTJz84aOJcSRn55Toiqeto2Rd1Kp4xx3LC3cUbR6xxpjvTdyrs6"]] })
      .then(response => response.json())
      .then(setBadgeData)
  }, [])

  const addBadge = (id) => {
    const currentValue = badgeData[id] || 0
    const newBadgeData = { ...badgeData, [id]: currentValue + 1 }
    console.log(newBadgeData)
    setBadgeData(newBadgeData)
    fetch(API_URL, { 
      headers: [
        ["content-type", "application/json"],
        ["secret-key", "$2b$10$Q.HTJz84aOJcSRn55Toiqeto2Rd1Kp4xx3LC3cUbR6xxpjvTdyrs6"],
        ["versioning", "false"]
      ],
      method: "PUT",
      body: JSON.stringify(newBadgeData)
    })

  }

  const isActive = (index) => index === active

  return (
    <div className={styles["equipo"]} id="Equipo">
      <div className={styles["container"]}>
        <h2>Equipo</h2>
        <div className={styles["equipoListado"]}>
          {
            miembros.map((miembro, index) => (
              <Miembro key={index} onClick={() => setActive(isActive(index) ? null : index)} active={isActive(index)} badgeData={badgeData} addBadge={addBadge} {...miembro} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
