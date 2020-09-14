import React, { Component } from "react";

import Filter from "../components/filter/Filter";
import Map from "../components/map/Map";

import Fab from "../components/Fab";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Filter />
        <Map />
        <Fab />
      </div>
    );
  }
}

export default Home;
