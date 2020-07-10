import { connect } from "react-redux";
import FilterKeyword from "../../components/filter/FilterKeyword";

const mapStateToProps = state => ({
  conditions: state.filterReducer.conditions,
});

export default connect(mapStateToProps)(FilterKeyword);
