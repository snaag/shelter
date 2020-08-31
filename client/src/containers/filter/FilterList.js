import { connect } from "react-redux";
import FilterList from "../../components/filter/FilterList";

const mapStateToProps = state => ({
  shelters: state.filter.shelters,
  error: state.filter.error,
});

export default connect(mapStateToProps)(FilterList);
