import { connect } from "react-redux";
import FilterItemDetail from "../../components/filter/FilterItemDetail";

const mapStateToProps = state => ({
  shelter: state.filter.currentShelter,
});

export default connect(mapStateToProps)(FilterItemDetail);
