import { connect } from "react-redux";
import FilterKeyword from "../../components/filter/FilterKeyword";

const mapStateToProps = state => ({
  conditions: state.filter.conditions,
});

export default connect(mapStateToProps)(FilterKeyword);
