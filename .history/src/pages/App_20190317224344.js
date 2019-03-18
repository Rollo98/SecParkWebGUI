import React from "react";
import Header from "../components/Header";
import "App.scss";

export default props => {
  return (
    <div>
      <Header />
      <div className="container">{props.children}</div>
    </div>
  );
};
