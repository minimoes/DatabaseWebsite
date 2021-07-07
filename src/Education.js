import React, { Component } from 'react';

import './Education.css';
//import EDUCATION from './Education.json';

export default class Education extends Component {

    render() {
        return (<div >
            <main>
            <h1> Education </h1>
            <section className="Schoollogo">
                <img src="Images/uw MECH E logo.png" alt="Mechanical Engineering logo" />
                <img src="Images/GreenRiverCollege.png" alt="Green River logo" />
            </section>
            <section className="feature">
                <img src="Images/mechanical arm.jpg" alt="Mechanical Engineering Arm" />
                <p>Biomechanics
                </p>
                <img className="mobile" src="Images/GRC Scenery.jpg" alt="Green River Campus" />
                <p className="mobile">Campus Life</p>
                <img className="Desktop" src="Images//GRC Scenery.jpg" alt="Green River Campus" />
                <p className="Desktop">Campus Life</p>
            </section>
</main>
        </div >);
    }
}