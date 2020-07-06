import React from "react";

const Fab = props => {
  const { menusStatus } = props;
  const {
    menusActive,
    mapButtonActive,
    locationButtonActive,
    listButtonActive,
    commentButtonActive
  } = menusStatus;

  const menuType = {
    location: {
      id: 0,
      iconClassName: "fa-compass"
    },
    map: {
      id: 1,
      iconClassName: "fa-map"
    },
    list: {
      id: 2,
      iconClassName: "fa-list"
    },
    comment: {
      id: 3,
      iconClassName: "fa-comment-alt"
    }
  };

  const createButton = type => {
    const { id, iconClassName } = type;
    return (
      <div class="fab fab-icon-holder">
        <i class={`fas ${iconClassName}`}></i>
      </div>
    );
  };

  return (
    <>
      {menusActive && (
        <div class="fab-container">
          {mapButtonActive && createButton(menuType.map)}
          {locationButtonActive && createButton(menuType.location)}
          {listButtonActive && createButton(menuType.list)}
          {commentButtonActive && createButton(menuType.comment)}
        </div>
      )}
    </>
  );
};

export default Fab;
