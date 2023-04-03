import React from "react";
import { Link } from "react-router-dom";

import "./Reports.css";

const Reports = () => {

  const buttonStyle = {
    textDecoration: "none",
  };
  
  return (
    <>
      <div className="sidenav">
      <Link to={"/Reports/Monthly"} style={buttonStyle}>Monthly</Link>
      <Link to={"/Reports/Yearly"} style={buttonStyle}>Yearly</Link>
      </div>
    </>
  );
};

export default Reports;
