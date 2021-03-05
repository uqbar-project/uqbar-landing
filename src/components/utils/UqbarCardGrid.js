import React from "react";
import styles from "./Index.module.css";

export default function UqbarCard({ children }) {
  return (
    <div className={styles["uqbarCardGrid"]}>
      {children}
    </div>
  );
}