import { connect } from "react-redux";
import FilterItem from "../../components/filter/FilterItem";
import { setCurrentShelter } from "../../actions/index";

const mapStateToProps = state => ({
  currentShelter: state.filterReducer.currentShelter,
});

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: shelter => {
      return dispatch(setCurrentShelter(shelter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
