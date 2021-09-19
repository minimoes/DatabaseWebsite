import React, { Component } from 'react';

import './Hobbies.css';

export default class Hobbies extends Component {


    constructor() {
        super();
        this.state = { origin: [] };
    }


    turnOff() {
        fetch(" http://127.0.0.1:5000/switch", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "status": "off"
            })

        }).then((res) => res.text())
            .then((data) => { 
            this.setState({origin: data})
            console.log(data)
            });
    }

    turnOn() {
        fetch(" http://127.0.0.1:5000/switch", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "status": "on"
            })

        }).then((res) => res.text())
            .then((data) =>  {
            this.setState({ origin: data})
            console.log(data)
            });

    }
    render() {
        return (
            <div>
                <div><p>machine is: {this.state.origin}</p></div>
                <button type='button' onClick={() => this.turnOff()}>Off</button>
                <button type='button' onClick={() => this.turnOn()}>On</button>
            </div>
        )}
/*
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
    }*/
}