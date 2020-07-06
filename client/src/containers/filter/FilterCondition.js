import { connect } from "react-redux";
import axios from "axios";
import { setFilteredShelters, setFilterConditions } from "../../actions/index";
import FilterCondition from "../../components/filter/FilterCondition";
import { SHELTER_API_KEY } from "../../config/apiKey";

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
      let response = await axios.get("http://localhost:4000/shelter" + params);
      let shelters = response.data.shelters;
      return dispatch(setFilteredShelters(shelters));
    },
    dispatchConditions: conditions => {
      return dispatch(setFilterConditions(conditions));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterCondition);
