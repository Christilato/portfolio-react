import React from "react";
import "../header/header.css";

const styles = {
    header: {
        fontSize:" xxx-large",
        color: "#FFB4A2",
    },
};

function Header () {
    const title = "Christi Rose Lato"

    return (
    <div className="header">
        <header> {title} </header>
    </div>
    );
};

export default Header;