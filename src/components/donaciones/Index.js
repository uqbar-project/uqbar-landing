import React from "react";
import ilustracion02 from "./ilustracion02.svg";
import mercadopago from "./mercadopago.svg";
import styles from "./Index.module.css";

export default function Donaciones() {
  return (
    <div className={styles["donaciones"]} id="Donaciones">
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["contentLeft"]}>
            <h2>Donaciones</h2>
            <p className={styles["destacado"]}>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong>
              Donec volutpat elit sit amet auctor tempus. Vivamus dapibus lectus
              at purus euismod volutpat. Ut aliquet massa nec dolor iaculis
              rutrum.
            </p>
            <p>
              <strong>Aceptamos donaciones a través de MercadoPago</strong>.
              Seleccioná un monto o donanos lo que puedas a través de estos
              links:
            </p>
            <div className={styles["linksMercadoPago"]}>
              <a href="#">$100</a>
              <a href="#">$200</a>
              <a href="#">$500</a>
              <a href="#">$1000</a>
              <a href="#">Otro monto</a>
            </div>
            <div className={styles["logoMercadoPago"]}>
              <img src={mercadopago} alt="Mercado Pago" />
            </div>
          </div>
          <div className={styles["contentRight"]}>
            <img src={ilustracion02} alt="Donaciones" />
          </div>
        </div>
      </div>
    </div>
  );
}
