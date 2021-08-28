import React, { Component} from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.css'; //import css file!

import Education from './Education';
import Project from './Project';
import Hobbies from './Hobbies';
import Home from './Home';


class App extends Component {
    constructor() {
       super();
       this.state = {peep: []};
    }


/*
componentDidMount() {
    fetch(" http://127.0.0.1:5000/").then((res) => res.json())
        .then((data) => {
            this.setState({peep:data});
        })

}

rendering = ((routerProps) => {
    return <PetList {...routerProps} pets={this.state.peep}/>
    }); */


render() {
    return (
        <div>
            <header className="background" >
                <div>
                    <Navigation />
                </div>

            </header>            
    
            <div className="col-9">
                <Switch>
                   {/* <Route exact path="/" render={this.rendering} />*/}
                    <Route exact path="/" component={Home} />
                    <Route path="/Project" component={Project} />
                    <Route path="/Education" component={Education} />
                    <Route path="/Hobbies" component={Hobbies} />
                    <Redirect to="/"></Redirect>
                </Switch>
            </div>
        </div>

    )

}
}
/*
class PetList extends Component {

    render() {
        let pets = this.props.pets || []; //handle if not provided a prop
        let petCards = pets.map((item) => {
            return <div key={item.name}>
                <img className="card-img-top" src={item.Img} alt={item.name} />
            </div>
        });

        console.log(petCards);

        return (
            <div>
                <h2>Dogs for Adoption</h2>
                <div className="card-deck">
                    {petCards}
                </div>
            </div>
        );
    }
}
*/


class Navigation extends Component {

    render() {
        return (
            <nav className="navigation">
                <ul className="nav-list">
                    <li><NavLink exact to="/" className="home" activeClassName={"activeLink"}>Home</NavLink></li>
                    <li><NavLink to="/Project" className="project" activeClassName={"activeLink"}>Projects</NavLink></li>
                    <li><NavLink to="/Education" className="edu" activeClassName={"activeLink"}>Education</NavLink></li>
                    <li><NavLink to="/Hobbies" className = "hob" activeClassName={"activeLink"}> Hobbies</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default App;



/*
return (

 <div>{d}</div>
);
//console.log(card);*/

/*    fetch(" http://127.0.0.1:5000/", {
    method: 'POST',
    headers: ({
        'content-type': 'application/json'
    }),
    body: JSON.stringify({
        "do":"wonderful"
    })

    }).then((res) => res.json())
        .then((data) => console.log(data))


    fetch(" http://127.0.0.1:5000/", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "hi": "weird"
        })

    }).then((res) => res.json())
        .then((data) => console.log(data))

            fetch(" http://127.0.0.1:5000/", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "hi": "you"
        })

    }).then((res) => res.json())
        .then((data) => console.log(data))
 */