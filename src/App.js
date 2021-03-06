import React from "react";
import "./App.css";
import Header from "./components/header/Index.js";
import Inicio from "./components/inicio/Index.js";
import Donaciones from "./components/donaciones/Index.js";
import Proyectos from "./components/proyectos/Index.js";
import Talleres from "./components/talleres/Index.js";
import Equipo from "./components/equipo/Index.js";
import Contacto from "./components/contacto/Index.js";
import Eventos from "./components/eventos/Index.js";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/eventos">
            <Eventos/>
          </Route>
          <Route path="/">
            <Inicio/>
            <Talleres/>
            <Proyectos/>
            <Equipo/>
            <Donaciones/>
            <Contacto/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
