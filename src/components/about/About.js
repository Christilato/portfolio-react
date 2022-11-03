import React from "react";
import "../about/about.css";
import Card from 'react-bootstrap/Card';

const styles = {
    
    h1 : {
        color: "#9d7a81",
    },
};


function About () {

    const bio = 'Hi there! My name is Christi Lato and I really enjoy work that allows me to put on my creative hat as well as problem solving'
    const aboutMe = 'As a recent graduate of Northwestern University coding bootcamp, I am now pursuing a position a Front-End Development role. Having experience in a full stack course has prepared me to fully understand all that it takes to create a beautiful site. ' 

    
    return (
    <div className="about">
        <Card>
            <Card.Body>
        <h1 id= "about">About Me</h1>
            <p> {bio} </p>
            <p>{aboutMe}</p>
            </Card.Body>
        </Card>
    </div>
    );
};

export default About;