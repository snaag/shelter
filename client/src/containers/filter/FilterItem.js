import { connect } from "react-redux";
import FilterItem from "../../components/filter/FilterItem";
import { filterActions } from "../../reducers/filter.reducer";

const mapStateToProps = state => ({
  currentShelter: state.filter.currentShelter,
});

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: currentShelter => {
      return dispatch(filterActions.setState({ currentShelter }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
