import React from "react";
import Header from "../components/Header";

export default props => {
  return (
    <div>
      <Header />
      <div className="container text-center mt-4 col-xl-4 col-lg-6 col-md-8 col-sm-10 col-xs-12">
        {props.children}
      </div>
    </div>
  );
};
