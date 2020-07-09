import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import Signout from "./pages/Signout";
import "./styles/App.css";
import "./styles/Signin.css";
import "./styles/Signup.css";
import "./styles/Signout.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/signout" component={Signout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
