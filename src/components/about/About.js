import React from "react";
import "../about/about.css";

const styles = {
    
}


function About () {

    const bio = 'Hi there! My name is Christi Lato and I really enjoy work that allows me to put on my creative hat as well as problem solving'
    const aboutMe = 'As a recent graduate of Northwestern University coding bootcamp, I am now pursuing a position a Front-End Development role. Having experience in a full stack course has prepared me to fully understand all that it takes to create a beautiful site. ' 

    
    return (
    <div className="about">
        <h1>About Me</h1>
        <p> {bio} </p>
        <p>{aboutMe}</p>

    </div>
    );
};

export default About;