import React, { Component } from "react";

import Login from "../containers/login/Login";
import Filter from "../components/filter/Filter";
import MapContainer from "../containers/map/MapContainer";
import FabContainer from "../components/fab/Fab";

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
