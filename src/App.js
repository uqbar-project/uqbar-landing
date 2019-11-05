import React, {Component} from "react";
import "./App.css";
import Header from "./components/header/Index.js";
import Inicio from "./components/inicio/Index.js";
import Donaciones from "./components/donaciones/Index.js";
import Proyectos from "./components/proyectos/Index.js";
import Equipo from "./components/equipo/Index.js";
import Contacto from "./components/contacto/Index.js";
import Eventos from "./components/eventos/Index.js";
import {PageView, initGoogleAnalytics} from './components/tracking/Index.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  componentDidMount() {
    initGoogleAnalytics('UA-44697942');
    PageView();
  }

  render(){
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
            <Donaciones/>
            <Proyectos/>
            <Equipo/>
            <Contacto/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
