import React from 'react';

function Contact () {
    const email = "Christilato@gmail.com"
    const github = "https://github.com/Christilato"
    const linkedin = "https://www.linkedin.com/in/christilato/"

    return (
        <div className='contact'>
            <h2>Contact Me:</h2>
            <div>
            <h3><a href="christilato@gmail.com">{email}</a></h3>
            <h3><a href="https://github.com/Christilato">{github}</a></h3>
            <h3><a href="https://www.linkedin.com/in/christilato/">{linkedin}</a></h3>
            </div>
        </div>
    );
};

export default Contact;