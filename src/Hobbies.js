import React, { Component } from 'react';

import './Hobbies.css';

export default class Hobbies extends Component {

    render() {
        return <div>        <main>


            <h1>Hobbies</h1>
            <img src="Images/uwrov logo.png" alt="ROV club Logo" />

            <div>
                <h2>Hiking</h2>
                <img src="Images/AnneteLakeMap.png" alt="Annette Lake" />
                <video src="Images/AnnetteLake View.mp4" loop controls width="300" ></video>
            </div>

        </main></div>;
    }
}