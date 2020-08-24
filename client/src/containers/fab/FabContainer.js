import React from "react";
import { connect } from "react-redux";

import Fab from "../../components/fab/Fab";

const FabContainer = menusStatus => {
  return <Fab menusStatus={menusStatus} />;
};

const mapStateToProps = state => ({
  menusActive: state.fab.menusActive,
  mapButtonActive: state.fab.mapButtonActive,
  locationButtonActive: state.fab.locationButtonActive,
  listButtonActive: state.fab.listButtonActive,
  commentButtonActive: state.fab.commentButtonActive,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FabContainer);
