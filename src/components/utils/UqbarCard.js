import React from "react";
import styles from "./Index.module.css";
import { Event } from "../tracking/Index.js";

export default function UqbarCard({
    projectName,
    projectDescription,
    projectLogo,
    link
  }) {
    return (
      <div className={styles["uqbarCard"]}>
        <div className={styles["header"]}>
          <div className={styles["projectLogo"]}>
            <img
              src={projectLogo}
              alt={projectName}
              className={styles["projectLogo"]}
            />
          </div>
          <div className={styles["projectName"]}>
            <a onClick={() => Event("UQBAR-LINK", "Clicking Uqbar Card", projectName)} href={link} target="_blank" rel="noopener noreferrer">
              {projectName}
            </a>
          </div>
        </div>
        <p className={styles["projectDescription"]}>{projectDescription}</p>
      </div>
    );
  }