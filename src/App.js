import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Componentes
import BadgeBeta from "./components/BadgeBeta";
import Welcome from "./components/Welcome";
import GiveInfo from "./components/GiveInfo";
import Information from "./components/Information";
import StarRating from "./components/StarRating";
// CSS
import "./App.css";

function App() {
    return (
        <div className="contenedor">
            <BadgeBeta />
            <Router>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/GiveInfo" component={GiveInfo} />
                    <Route exact path="/Information" component={Information} />
                    <Route exact path="/rating" component={StarRating} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
