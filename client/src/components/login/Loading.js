import React from "react";

const Loading = ({ message }) => {
  return (
    <div className="loading-container">
      <h1>{message}</h1>
      <h1 className="dot1">.</h1>
      <h1 className="dot2">.</h1>
      <h1 className="dot3">.</h1>
    </div>
  );
};

export default Loading;
