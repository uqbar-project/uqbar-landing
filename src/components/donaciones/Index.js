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
              Todo el trabajo que realizamos en Uqbar se sostiene gracias al 
              aporte de tiempo y ganas de sus integrantes. Para mover sus engranajes, 
              para invitar a quienes quieren participar pero no se lo pueden permitir, 
              todo aporte adicional es bienvenido. Los fondos donados serán utilizados 
              para entregar becas a alumnas y alumnos que desean aportar en nuestros proyectos, 
              para el equipo que nos da una mano con las redes y la administración, 
              para la divulgación de contenidos y para mantener viva la parte administrativa 
              de la fundación.
            </p>
            <p>
              <strong>Aceptamos donaciones a través de MercadoPago</strong>. Podés donarnos en dos modalidades: una única vez o en formato de suscripción mensual. Ambas formas nos ayudan a continuar nuestra labor :)
             
            </p>
            <h3>Donaciones de única vez</h3>
            <p>A través de esta opción nos harás una única donación en el monto que selecciones más abajo.</p>
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
            <h3>Donación mensual</h3>
            <p>Te invitamos a donar en base a una suscripción mensual de alguno de estos montos. ¡Toda ayuda nos sirve para continuar!</p>
            <div className={styles["linksMercadoPago"]}>
              <a
                mp-mode="dftl"
                href="https://www.mercadopago.com/mla/debits/new?preapproval_plan_id=86becb39fe1b442d8caa57bffa3d14fd"
                name="MP-payButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                $100
              </a>
              <a
                mp-mode="dftl"
                href="http://mpago.la/4fkm8P"
                name="MP-payButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                $200
              </a>
              <a
                mp-mode="dftl"
                href="https://www.mercadopago.com/mla/debits/new?preapproval_plan_id=69587702784c4752903c06161892c2e1"
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
