import React from "react";
import styles from "./Index.module.css";
import ilustracion03 from "./ilustracion03.svg";


export default function Contacto() {
  return (
    <div className={styles["contacto"]}>
      <div className={styles["container"]}>
      <div className={styles["content"]}>
          <div className={styles["contentLeft"]}>
            <h2>Contacto</h2>
            <p className={styles["destacado"]}>
            Contactanos a través de nuestras redes sociales, o directamente enviándonos un mail, te contestaremos lo antes posible.
            </p>
            <ul className={styles["modosContacto"]}>
              <li className={styles["contacto01"]}><a href="#">@fundacionuqbar</a></li>
              <li className={styles["contacto02"]}><a href="#">@fundacionuqbar</a></li>
              <li className={styles["contacto03"]}><a href="#">@UqbarProject</a></li>
              <li className={styles["contacto04"]}><a href="#">@Uqbar</a></li>
              <li className={styles["contacto05"]}><a href="#">org.uqbar@gmail.com</a></li>
              
            </ul>
          </div>
          <div className={styles["contentRight"]}>
            <img src={ilustracion03} alt="Contacto" />
          </div>
        </div>
      </div>
    </div>
  );
}
