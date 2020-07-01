import React, { Component } from "react";
import Shelter from "./Shelter";
import "../../styles/Map.css";

class Map extends Component {
  render() {
    return (
      <div className="map">
        <Shelter />
      </div>
    );
  }
}

export default Map;
