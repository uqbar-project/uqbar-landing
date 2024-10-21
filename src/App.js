import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/header/Index.js";
import Inicio from "./components/inicio/Index.js";
import Donaciones from "./components/donaciones/Index.js";
import Proyectos from "./components/proyectos/Index.js";
import Talleres from "./components/talleres/Index.js";
import Equipo from "./components/equipo/Index.js";
import Contacto from "./components/contacto/Index.js";
import Eventos, { EventosActuales } from "./components/eventos/Index.js";
import Ideas from "./components/ideas/Index.jsx";
import Subscribe from "./components/subscribe/Index.jsx";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import headerEventos from "./components/eventos/header-eventos.png";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/eventos" component={Eventos} />
          <Route path="/ideas" component={Ideas} />
          <Route path="/subscribe" component={Subscribe} />
          {/* Este parche se agregó el 16/11/22 porque salió un newsletter con un link erróneo, eventualmente debería eliminarse. */}
          <Redirect from='/suscribe' to="/subscribe" />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <Fragment>
      <Inicio />
      {/* <EventosActualesForHome /> */}
      <Talleres />
      <Proyectos />
      <Equipo />
      <Donaciones />
      <Contacto />
    </Fragment>
  )
}

function EventosActualesForHome() {
  return (
    <div className="container">
      <div className={"header projectLogo"}>
        <Link to="/eventos">
          <img src={headerEventos} alt="Eventos" />
        </Link>
      </div>
      <EventosActuales />
    </div>
  )
}

export default App;
