import React, { Component } from "react";

import Filter from "../components/filter/Filter";
import MapContainer from "../containers/map/MapContainer";
import FabContainer from "../containers/fab/FabContainer";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Filter />
        <MapContainer />
        <FabContainer />
      </div>
    );
  }
}

export default Home;
