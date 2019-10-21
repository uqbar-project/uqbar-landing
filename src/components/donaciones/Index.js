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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </strong>
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
              <a
                mp-mode="dftl"
                href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=459677732-ca60b8ed-ba7c-4675-82cd-f2276b7c0b27"
                name="MP-payButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                $100
              </a>
              <a
                mp-mode="dftl"
                href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=459677732-892b033e-e35b-4863-bcf1-46ebd5f92ed1"
                name="MP-payButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                $200
              </a>
              <a
                mp-mode="dftl"
                href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=459677732-b4aba3ee-b849-4440-9e3d-9f6649cea277"
                name="MP-payButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                $500
              </a>
              <a
                mp-mode="dftl"
                href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=459677732-830f85e7-13bb-499a-97c6-1cd1c0c75cbc"
                name="MP-payButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                $1000
              </a>
              
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
