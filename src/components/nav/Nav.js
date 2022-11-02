import React from "react";
import "../nav/nav.css"

const styles = {
  
}

function Nav () {
    return (
        <>
        <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-nav">
            <a className="nav-link active"></a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Portfolio</a>
            <a className="nav-link" href="#">Contact</a>
            <a className="nav-link" href="#">Resume</a>
          </div>
        </div>
        </nav>
        </>
  );
};

export default Nav;