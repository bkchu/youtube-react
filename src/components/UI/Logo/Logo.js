import React from "react";
import instatubeLogo from "../../../Instatube_Favicon.svg";

const logo = props => {
  return (
    <div className="Logo">
      <img onClick={props.clicked} src={instatubeLogo} alt="logo" />
    </div>
  );
};

export default logo;
