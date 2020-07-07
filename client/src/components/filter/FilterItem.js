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

    if (this.props.shelter === this.props.currentShelter) {
      this.props.onItemClick({});
      this.setState({ currentShelter: {} });
    } else {
      this.props.onItemClick(this.props.shelter);
      this.setState({
        currentShelter: this.props.shelter,
      });
    }
  }

  render() {
    let shelter = this.props.shelter;
    let sexType;
    if (shelter.SEX_TYPE === "M") {
      sexType = <img src={icon.male} alt="M" />;
    } else if (shelter.SEX_TYPE === "F") {
      sexType = <img src={icon.female} alt="F" />;
    } else if (shelter.SEX_TYPE === "ALL") {
      sexType = [
        <img src={icon.male} alt="M" key="M" />,
        <img src={icon.female} alt="F" key="F" />,
      ];
    }

    return (
      <div>
        <div className="filter-list__item" onClick={this.handleItemClick}>
          <div className="filter-list__item__name">{shelter.RESTARER_NM}</div>
          <div className="filter-list__item__tel">
            <a href={`tel:${shelter.CONTCT_NO}`}>
              <img src={icon.phone} alt="call" name="call" />
            </a>
          </div>
          <div className="filter-list__item__sex-type">{sexType}</div>
          <div className="filter-list__item__period">{shelter.BYPERD_TYPE}</div>
        </div>
        {this.props.shelter === this.props.currentShelter && (
          <FilterItemDetail shelter={this.props.shelter} />
        )}
      </div>
    );
  }
}

export default FilterItem;
