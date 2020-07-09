import React, { Component } from "react";

import Login from "../containers/login/Login";
import Filter from "../components/filter/Filter";
import MapContainer from "../containers/map/MapContainer";
import FabContainer from "../containers/fab/FabContainer";

import "../styles/Login.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Login />
        <Filter />
        <MapContainer />
        <FabContainer />
      </div>
    );
  }
}

export default Home;
