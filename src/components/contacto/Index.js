import React from "react";
import styles from "./Index.module.css";
import ilustracion03 from "./ilustracion03.svg";


export default function Contacto() {
  return (
    <div className={styles["contacto"]} id="Contacto">
      <div className={styles["container"]}>
      <div className={styles["content"]}>
          <div className={styles["contentLeft"]}>
            <h2>Contacto</h2>
            <p className={styles["destacado"]}>
            Contactanos a través de nuestras redes sociales, o directamente enviándonos un mail, te contestaremos lo antes posible.
            </p>
            <ul className={styles["modosContacto"]}>
              <li className={styles["contacto01"]}><a href="https://www.facebook.com/fundacionuqbar/" target="_blank" rel="noopener noreferrer">@fundacionuqbar</a></li>
              <li className={styles["contacto02"]}><a href="https://www.instagram.com/fundacionuqbar/" target="_blank" rel="noopener noreferrer">@fundacionuqbar</a></li>
              <li className={styles["contacto03"]}><a href="https://twitter.com/UqbarProject" target="_blank" rel="noopener noreferrer">@UqbarProject</a></li>
              <li className={styles["contacto04"]}><a href="https://www.youtube.com/channel/UCcj9rZ9TeeJDnvcVA9cmYMw" target="_blank" rel="noopener noreferrer">@Uqbar</a></li>
              <li className={styles["contacto05"]}><a href="mailto:org.uqbar@gmail.com" target="_blank" rel="noopener noreferrer">org.uqbar@gmail.com</a></li>
              
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
