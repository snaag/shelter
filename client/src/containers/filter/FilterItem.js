import { connect } from "react-redux";
import FilterItem from "../../components/filter/FilterItem";
import { setCurrentShelter } from "../../actions/index";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onItemClick: () => {
      return dispatch(setCurrentShelter(ownProps.shelter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
