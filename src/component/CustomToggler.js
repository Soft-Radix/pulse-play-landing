import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function CustomToggler() {
  return (
    <div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#basic-navbar-nav"
      >
        {/* Using Font Awesome icon */}
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}

export default CustomToggler;
