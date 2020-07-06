import React, { Component } from "react";
import Filter from "../components/filter/Filter";
import MapContainer from "../containers/map/MapContainer";
import "../styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Filter />
        <MapContainer />
      </div>
    );
  }
}

export default Home;
