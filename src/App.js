import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.css'; //import css file!

import Education from './Education';
import Project from './Project';
import Hobbies from './Hobbies';
import Home from './Home';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null };
    }

    render() {
            return  (
                
                <div >
                    <header className="background" >
                        <div>
                            <Navigation />
                        </div>
                    </header>

                    <div className="col-9">
                        <Switch>
                            <Route exact path="/" component={Home}/>
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



class Navigation extends Component {

    render() {
        return (
            <nav className="navigation">
                <ul className="nav-list">
                    <li><NavLink exact to="/" activeClassName={"activeLink"}>Home</NavLink></li>
                    <li><NavLink to="/Project" activeClassName={"activeLink"}>Projects</NavLink></li>
                    <li><NavLink to="/Education" activeClassName={"activeLink"}>Education</NavLink></li>
                    <li><NavLink to="/Hobbies" activeClassName={"activeLink"}> Hobbies</NavLink></li>
                </ul>
            </nav>
        );
    }
}


















export default App;