import React, { Component } from "react";
import { cities, cityCodes } from "../../data/city";

class FilterCondition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fold: false,
      conditions: {
        SEX_TYPE: [],
        BYPERD_TYPE: [],
        SIGUN_CD: [],
      },
    };

    this.foldToggle = this.foldToggle.bind(this);
    this.handleClickSexType = this.handleClickCondition("SEX_TYPE").bind(this);
    this.handleClickPeriods = this.handleClickCondition("BYPERD_TYPE").bind(
      this
    );
    this.handleClickCities = this.handleClickCondition("SIGUN_CD").bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  foldToggle() {
    this.setState({
      fold: !this.state.fold,
    });
  }

  handleClickCondition(condition) {
    return event => {
      let conditions = [...this.state.conditions[condition]];
      let target = event.target;

      let idx = conditions.indexOf(target.title);
      if (idx > -1) {
        conditions.splice(idx, 1);
        target.style = "background-color: ''";
      } else {
        target.style = "background-color: lightgreen";
        conditions.push(target.title);
      }
      let newState = {};
      newState.conditions = {
        SEX_TYPE: this.state.conditions.SEX_TYPE,
        BYPERD_TYPE: this.state.conditions.BYPERD_TYPE,
        SIGUN_CD: this.state.conditions.SIGUN_CD,
      };
      newState.conditions[condition] = conditions;
      this.setState(newState);
    };
  }

  handleButtonClick() {
    this.setState({
      fold: true,
    });
    this.props.getAndDispatchShelters(this.state.conditions);
    this.props.dispatchConditions(this.state.conditions);
  }

  render() {
    return (
      <div className="filter-condition">
        <div
          className="filter-condition--fold-button"
          onClick={this.foldToggle}
        >
          <span>검색 필터</span>
        </div>
        <div
          className={`filter-condition--${this.state.fold ? "fold" : "unfold"}`}
        >
          <div className="filter-condition__sex">
            <div className="filter-condition__sex__title">
              <span>[성별]</span>
            </div>
            <div className="filter-condition__sex__type">
              <div
                className="filter-condition__sex__type--male"
                title="M"
                onClick={this.handleClickSexType}
              >
                <img />
              </div>
              <div
                className="filter-condition__sex__type--female"
                title="F"
                onClick={this.handleClickSexType}
              >
                <img />
              </div>
            </div>
          </div>
          <div className="filter-condition__period">
            <div className="filter-condition__period__title">
              <span>[기간]</span>
            </div>
            <div
              className="filter-condition__period__type--daily"
              title="일시"
              onClick={this.handleClickPeriods}
            >
              일시
            </div>
            <div
              className="filter-condition__period__type--short"
              title="단기"
              onClick={this.handleClickPeriods}
            >
              단기
            </div>
            <div
              className="filter-condition__period__type--mid-long"
              title="중장기"
              onClick={this.handleClickPeriods}
            >
              중장기
            </div>
          </div>
          <div className="filter-condition__city">
            <div className="filter-condition__city__title">
              <span>[지역]</span>
            </div>
            <div className="filter-condition__city__list">
              {cities.map((city, i) => (
                <div
                  className="filter-condition__city__list__element"
                  key={cityCodes[i]}
                  title={cityCodes[i]}
                  onClick={this.handleClickCities}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
          <button
            className="filter-condition__filter-button"
            onClick={this.handleButtonClick}
          >
            검색
          </button>
        </div>
      </div>
    );
  }
}

export default FilterCondition;
