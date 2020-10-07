import React from "react";
import styles from "./Index.module.css";

export default function UqbarCard({
  projectName,
  projectDescription,
  projectLogo,
  link,
  children,
  style,
}) {
  return (
    <div id={projectName.replace(/\W/g, '_')} className={styles["uqbarCard"]} style={style}>
      <div className={styles["header"]}>
        <div className={styles["projectLogo"]}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={projectLogo}
              alt={projectName}
              className={styles["projectLogo"]}
            />
          </a>
        </div>
        <div className={styles["projectName"]}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {projectName}
          </a>
        </div>
      </div>
      <p className={styles["projectDescription"]}>{projectDescription}</p>
      <div className={styles["projectDescription"]}>{children}</div>
    </div>
  );
}