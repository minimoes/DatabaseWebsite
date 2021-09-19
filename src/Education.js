import React, { Component } from 'react';

import './Education.css';
//import EDUCATION from './Education.json';

export default class Education extends Component {

    render() {
        return (<div >
            <Forms />
            <main>
                <h1> Education </h1>
                <section className="Schoollogo">
                    <img src="Images/UWmechlogo.png" alt="Mechanical Engineering logo" />
                    <img src="Images/GreenRiverCollege.png" alt="Green River logo" />
                </section>
                <section className="feature">
                    <img src="Images/mechanicalarm.jpg" alt="Mechanical Engineering Arm" />
                    <p>Biomechanics
                    </p>
                    <img className="mobile" src="Images/GRCScenery.jpg" alt="Green River Campus" />
                    <p className="mobile">Campus Life</p>
                    <img className="Desktop" src="Images/GRCScenery.jpg" alt="Green River Campus" />
                    <p className="Desktop">Campus Life</p>
                </section>
            </main>

        </div >);
    }
}


export class Forms extends Component {
    constructor() {
        super();
        this.state = { UsedTable: '', table: '', name: '', password: '', topic: 'GET', date: '', message: [], error: '' };
    }

    UserName = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    SubmitForm = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:5000/form', {
            method: 'POST',
            headers: ({
                'content-type': 'application/json'
            }),
            body: JSON.stringify({
                UsedTable: this.state.UsedTable,
                name: this.state.name,
                password: this.state.password,
                date: this.state.date
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({ message: 'form submitted and added to table'  });
            })
            .catch((error) => {
                console.log("Error", error);
            });
    }

    Topics = (e) => {
        this.setState({ topic: e.target.value });
    }

    createTable = () => {
        console.log({ table: this.state.table });
        if (this.state.topic === 'POST') {

            fetch(" http://127.0.0.1:5000/table", {
                method: 'POST',
                headers: ({
                    'content-type': 'application/json'
                }),
                body: JSON.stringify({ table: this.state.table })
            }).then((res) => res.json())
                .then((data) => console.log(data))
                .catch((error) => {
                    console.log("Error", error);
                });
        }
        else if (this.state.topic === 'DELETE') {
            console.log(this.state)
            fetch(" http://127.0.0.1:5000/table", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ table: this.state.table })
            }).then((res) => res.json())
                .then((data) => console.log(data))
                .catch((error) => {
                    console.log("Error", error);
                });


        } else {
            this.setState({ error: 'Cannot Do Action' });
        }


    }

    render() {
        return (<div>

            <div>
                <input type="text" name="table" value={this.state.table} placeholder="Enter a Table Name" onChange={this.UserName}></input>
                <button type="button" onClick={this.createTable}>Create a Table</button>
            </div>
            <div>
                <label>Type of Method</label>
                <select value={this.state.topic} onChange={this.Topics}>
                    <option value="GET">GET</option>
                    <option value="POST">Add</option>
                    <option value="PUT">Update</option>
                    <option value="DELETE">REmove</option>
                </select>

            </div>
            <div></div>
            <form className="forms" onSubmit={this.SubmitForm}>
                <div>
                    <label>UserName </label>
                    <input type="text" name="name" placeholder="userName" value={this.state.name} onChange={this.UserName} required></input>
                </div>
                <div>
                    <label>password </label>
                    <input type="text" name="password" value={this.state.password} placeholder="password" onChange={this.UserName} required></input>
                    <input type="date" name="date" value={this.state.date} placeholder="date" onChange={this.UserName} required></input>
                </div>

                <div>
                    <label>Table Used</label>
                    <input type="text" name="UsedTable" value={this.state.UsedTable} placeholder="Table" onChange={this.UserName} required></input>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.Topics}>
                        <option value="GET">GET</option>
                        <option value="POST">Add</option>
                        <option value="PUT">Update</option>
                        <option value="DELETE">REmove</option>
                    </select>

                </div>

                <div>
                    <button type="submit">Submit</button>
                    <p> {this.state.message}</p>
                </div>
            </form>

            <div>
                <p> {this.state.error}</p>
            </div>

        </div>


        )
    };

}
