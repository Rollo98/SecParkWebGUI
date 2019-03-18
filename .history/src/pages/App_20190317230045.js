import React from "react";
import Header from "../components/Header";

export default props => {
  return (
    <div>
      <Header />
      <div className="container col-xl-4 col-lg-5 col-md-6 col-xs-10">
        {props.children}
      </div>
    </div>
  );
};
