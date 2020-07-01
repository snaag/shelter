import React, { Component } from "react";
import Filter from "../components/filter/Filter";
import Map from "../components/map/Map";
import "../styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Filter />
        <Map />
      </div>
    );
  }
}

export default Home;
