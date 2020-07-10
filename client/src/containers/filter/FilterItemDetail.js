import { connect } from "react-redux";
import FilterItemDetail from "../../components/filter/FilterItemDetail";

const mapStateToProps = state => ({
  shelter: state.filterReducer.currentShelter,
});

export default connect(mapStateToProps)(FilterItemDetail);
