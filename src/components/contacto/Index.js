import React from "react";
import styles from "./Index.module.css";
import ilustracion03 from "./ilustracion03.svg";


export default function Contacto() {
  return (
    <div className={styles["contacto"]} id="Contacto">
      <div className="container">
      <div className={styles["content"]}>
          <div className={styles["contentLeft"]}>
            <h2>Contacto</h2>
            <p className={styles["destacado"]}>
            Contactanos a través de nuestras redes sociales, o directamente enviándonos un mail, te contestaremos lo antes posible.
            </p>
            <ul className={styles["modosContacto"]}>
              <LinkDeContacto style={styles["contacto01"]} url={"https://www.facebook.com/fundacionuqbar/"} value={"@fundacionuqbar"}/>
              <LinkDeContacto style={styles["contacto02"]} url={"https://www.instagram.com/fundacionuqbar/"} value={"@fundacionuqbar"}/>
              <LinkDeContacto style={styles["contacto03"]} url={"https://twitter.com/UqbarProject"} value={"@UqbarProject"}/>
              <LinkDeContacto style={styles["contacto04"]} url={"https://www.youtube.com/channel/UCcj9rZ9TeeJDnvcVA9cmYMw"} value={"@Uqbar"}/>
              <LinkDeContacto style={styles["contacto05"]} url={"mailto:info@uqbar.org"} value={"info@uqbar.org"}/>
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

function LinkDeContacto({style, url, value}) {
    return(
        <li className={style}><a href={url} target="_blank" rel="noopener noreferrer">{value}</a></li>
    );
}
