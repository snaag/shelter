import React, { Component } from "react";
import FilterItemDetail from "./FilterItemDetail";
import icon from "../../assets/icon";

class FilterItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentShelter: {},
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event) {
    if (event.target.name === "call") return;

    this.props.onItemClick(this.props.shelter);
    if (Object.keys(this.state.currentShelter).length === 0) {
      this.setState({
        currentShelter: this.props.shelter,
      });
    } else {
      this.setState({ currentShelter: {} });
    }
  }

  render() {
    let shelter = this.props.shelter;
    let sexType;
    if (shelter.SEX_TYPE === "M") {
      sexType = <img src={icon.male} alt="" />;
    } else if (shelter.SEX_TYPE === "F") {
      sexType = <img src={icon.female} alt="" />;
    } else if (shelter.SEX_TYPE == "ALL") {
      sexType = [
        <img src={icon.male} alt="" />,
        <img src={icon.female} alt="" />
      ];
    }

    return (
      <div>
        <div className="filter-list__item" onClick={this.handleItemClick}>
          <div className="filter-list__item__name">{shelter.RESTARER_NM}</div>
          <div className="filter-list__item__tel">
            <a href={`tel:${shelter.CONTCT_NO}`}>
              <img src={icon.phone} alt="" name="call" />
            </a>
          </div>
          <div className="filter-list__item__sex-type">{sexType}</div>
          <div className="filter-list__item__period">{shelter.BYPERD_TYPE}</div>
        </div>
        <FilterItemDetail shelter={this.state.currentShelter} />
      </div>
    );
  }
}

export default FilterItem;
