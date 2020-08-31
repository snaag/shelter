import { connect } from "react-redux";
import { filterActions } from "../../reducers/filter.reducer";
import { fabActions } from "../../reducers/fab.reducer";
import FilterCondition from "../../components/filter/FilterCondition";

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
      dispatch(filterActions.getShelters(params));
    },
    dispatchConditions: conditions => {
      return dispatch(filterActions.setState({ conditions }));
    },
    changeButtonsStatus: menusActive =>
      dispatch(fabActions.setState({ menusActive })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCondition);
