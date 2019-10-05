import React from "react";
import "./App.css";
import Header from "./components/header/Index.js";
import Inicio from "./components/inicio/Index.js";
import Donaciones from "./components/donaciones/Index.js";
import Proyectos from "./components/proyectos/Index.js";
import Equipo from "./components/equipo/Index.js";
import Contacto from "./components/contacto/Index.js";


function App() {
  return (
    <div className="app">
      <Header/>
      <Inicio/>
      <Donaciones/>
      <Proyectos/>
      <Equipo/>
      <Contacto/>
    </div>
  );
}

export default App;
