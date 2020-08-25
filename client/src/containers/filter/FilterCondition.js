import { connect } from "react-redux";
import { filterActions } from "../../reducers/filter.reducer";
import { fabActions } from "../../reducers/fab.reducer";
import FilterCondition from "../../components/filter/FilterCondition";
import * as filterApi from "../../api/filter.api";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    getAndDispatchShelters: async conditions => {
      let params = "";
      for (let field in conditions) {
        for (let value of conditions[field]) {
          params += `${field}=${value}&`;
        }
      }

      try {
        const {
          data: { shelters },
        } = await filterApi.getShelters(params);
        return dispatch(filterActions.setFilteredShelters(shelters));
      } catch (err) {
        if (err.response && err.response.status === 404) {
          return dispatch(filterActions.setFilteredShelters(["empty"]));
        }
      }
    },
    dispatchConditions: conditions => {
      return dispatch(filterActions.setFilterConditions(conditions));
    },
    changeButtonsStatus: status =>
      dispatch(fabActions.changeButtonsStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCondition);
