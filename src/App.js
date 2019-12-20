import React from "react";
import Home from "./Components/Home/Home";
import TTT from "./Components/Tick-Tack-Toe/TTT";
import RPS from "./Components/Rock-Paper-scissors/RPS";
import GG from "./Components/Guessing-Game/GG";
import AGC from "./Components/Adventure-Game/AGC";
import "./Styles/TTTGameStyle.css";
import "./Styles/HomeStyle.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router basename="/quezGames">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tic-tac-toe" component={TTT} />
        <Route path="/rock-paper-scissors" component={RPS} />
        <Route path="/guess-game" component={GG} />
        <Route path="/adventure" component={AGC} />
        <Redirect exact to="/" />
      </Switch>
    </Router>
  );
}

export default App;
