import { connect } from "react-redux";
import axios from "axios";
import { setFilteredShelters, setFilterConditions } from "../../actions/index";
import FilterCondition from "../../components/filter/FilterCondition";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    getAndDispatchShelters: async () => {
      let response = await axios.get(
        "https://openapi.gg.go.kr/YoungBoyAndGirsRestArea",
        {
          params: {
            key: "ba44afec8b374581bf2df0cb0c577cf0",
            Type: "json",
            SIGUN_NM: "성남시"
          }
        }
      );
      let shelters = response.data.YoungBoyAndGirsRestArea[1].row;
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
