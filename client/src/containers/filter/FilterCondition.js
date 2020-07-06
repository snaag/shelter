import { connect } from "react-redux";
import axios from "axios";
import {
  setFilteredShelters,
  setFilterConditions,
  changeButtonsStatus
} from "../../actions/index";
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
        .get("http://localhost:4000/shelter" + params)
        .then(({ data }) => {
          return dispatch(setFilteredShelters(data.shelters));
        })
        .catch(({ response }) => {
          if (response.status === 404) {
            return dispatch(setFilteredShelters([]));
          }
        });
    },
    dispatchConditions: conditions => {
      return dispatch(setFilterConditions(conditions));
    },
    changeButtonsStatus: status => dispatch(changeButtonsStatus(status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCondition);
