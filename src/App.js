import React from "react";
import "./App.css";
import Header from "./components/header/Index.js";
import Inicio from "./components/inicio/Index.js";
import Donaciones from "./components/donaciones/Index.js";
import Proyectos from "./components/proyectos/Index.js";
import Talleres from "./components/talleres/Index.js";
import Equipo from "./components/equipo/Index.js";
import Contacto from "./components/contacto/Index.js";
import Eventos, { Eventos2022 } from "./components/eventos/Index.js";
import Ideas from "./components/ideas/Index.jsx";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import logo from "./components/header/logo.svg";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/eventos">
            <Eventos />
          </Route>
          <Route path="/ideas">
            <Ideas />
          </Route>
          <Route path="/">
            <Inicio />
            <div className="container">
              <h1>
                <a href="/eventos">
                  <img src={logo} alt="Logo Uqbar" />
                  Próximos Eventos
                </a>
              </h1>
              <Eventos2022 />
            </div>
            <Talleres />
            <Proyectos />
            <Equipo />
            <Donaciones />
            <Contacto />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
