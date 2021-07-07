import React, {Component} from 'react';
import './Home.css';


class Home extends Component {
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

            </div>
        );
    }
}



export default Home;