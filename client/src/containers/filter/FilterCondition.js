import { connect } from "react-redux";
import axios from "axios";
import { filterActions } from "../../reducers/filter.reducer";
import { fabActions } from "../../reducers/fab.reducer";
import FilterCondition from "../../components/filter/FilterCondition";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    getAndDispatchShelters: async conditions => {
      let params = "?";
      for (let field in conditions) {
        for (let value of conditions[field]) {
          params += `${field}=${value}&`;
        }
      }
      axios
        .get(
          `http://ec2-3-129-24-234.us-east-2.compute.amazonaws.com:4000/shelter${params}`
        )
        .then(({ data }) => {
          return dispatch(filterActions.setFilteredShelters(data.shelters));
        })
        .catch(err => {
          if (err.response && err.response.status === 404) {
            return dispatch(filterActions.setFilteredShelters(["empty"]));
          }
        });
    },
    dispatchConditions: conditions => {
      return dispatch(filterActions.setFilterConditions(conditions));
    },
    changeButtonsStatus: status =>
      dispatch(fabActions.changeButtonsStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCondition);
