import React, { Component } from "react";
import Filter from "../components/filter/Filter";
import Map from "../components/map/Map";
import "../styles/Home.css";

const sampleShelterLocations = [
  { lat: 37.3951694, lng: 126.9220125 },
  { lat: 37.3806979, lng: 126.9521182 },
  { lat: 37.3766991, lng: 126.9562531 }
];

const sampleShelterDetails = [
  {
    sexType: "남,여",
    restAreaName: "안양시 일시청소년쉼터 민들레 뜨락",
    byperedType: "일시"
  },
  {
    sexType: "남",
    restAreaName: "안양시남자단기청소년쉼터 FOR YOU",
    byperedType: "단기"
  },
  {
    sexType: "여",
    restAreaName: "안양시 여자중장기청소년쉼터 호숙",
    byperedType: "중장기"
  }
];
class Home extends Component {
  render() {
    return (
      <div className="home">
        <Filter />
        <Map
          shelterLocations={sampleShelterLocations}
          details={sampleShelterDetails}
        />
      </div>
    );
  }
}

export default Home;
