import React, {Component} from 'react';
import './Home.css';

import data from './Projects.json'
class Home extends Component {

    constructor() {
        super();
        this.state = {origin: data}; 
    }


    handler(e) {
        console.log(e)
    }
    lefty(name) {
        let newList = this.state.origin.filter((item) => 
            item.name !== name
        )
        this.setState( {origin: newList})
    };

    submity() {
        fetch("http://127.0.0.1:5000/a", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "hi": "er"
            })

        }).then((res) => res.text())
        .then((data) => console.log(data))
         .catch((error) => {
                console.log("Error", error);
            })

    }
    render() {
        return (
            <div>

                <section className="features">
                    <figure>
                        <img src="Images/Portrait.jpg" alt="self-portrait" />
                        <figcaption>Tyler Freitas</figcaption>
                    </figure>
                    <p>My name is Tyler and this website is a little about me</p>
                    

                </section>
            {/*
                <button type="submit" onClick={this.submity}> submit</button>
<div>{this.state.origin.map((item) => {
                return (
                <div key={item.name}>

                    <h1>{item.Img}</h1>
                    <button type='button' onClick={() => this.lefty(item.name)}>remove</button>
                </div>
 
                );
                })}</div>

*/}

            </div>
        );
    }
}



export default Home;
