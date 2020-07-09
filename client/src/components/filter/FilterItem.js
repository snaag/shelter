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
    const sexType = shelter.SEX_TYPE;
    const sexTypesSplit = {
      M: ["male"],
      F: ["female"],
      ALL: ["male", "female"],
    };

    const koToEngByprd = {
      일시: "awhile",
      단기: "short",
      중장기: "mid-and-long",
    };

    return (
      <div className="filter-list__item" onClick={this.handleItemClick}>
        <div className="filter-list__item__name">{shelter.RESTARER_NM}</div>
        <div className="filter-list__item__about">
          <div className="filter-list__item__about__type">
            <div
              className={`filter-list__item__about__type__period--${
                koToEngByprd[shelter.BYPERD_TYPE]
              }`}
            />
            {sexTypesSplit[sexType].map(sex => (
              <div className={`filter-list__item__about__type__sex__${sex}`} />
            ))}
          </div>
          <div className="filter-list__item__about__call">
            <a href={`tel:${shelter.CONTCT_NO}`}>
              <img src={icon.phone} alt="" />
            </a>
          </div>
        </div>

        {this.props.shelter === this.props.currentShelter && (
          <FilterItemDetail shelter={this.props.shelter} />
        )}
      </div>
    );
  }
}

export default FilterItem;
