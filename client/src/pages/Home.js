import React, { Component } from "react";

import Filter from "../components/filter/Filter";
import Map from "../components/map/Map";

import FabContainer from "../components/fab/Fab";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Filter />
        <Map />
        <FabContainer />
      </div>
    );
  }
}

export default Home;
