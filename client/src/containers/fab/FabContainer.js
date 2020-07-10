import React from "react";
import { connect } from "react-redux";

import Fab from "../../components/fab/Fab";

const FabContainer = menusStatus => {
  return <Fab menusStatus={menusStatus} />;
};

const mapStateToProps = state => ({
  menusActive: state.fabReducer.menusActive,
  mapButtonActive: state.fabReducer.mapButtonActive,
  locationButtonActive: state.fabReducer.locationButtonActive,
  listButtonActive: state.fabReducer.listButtonActive,
  commentButtonActive: state.fabReducer.commentButtonActive
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FabContainer);
