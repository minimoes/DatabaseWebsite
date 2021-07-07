import React, { Component } from 'react';
import Items from './Projects.json';
import './Project.css';

class Project extends Component {

    render() {
        return <div > <main>
            <h1> Mechanical Projects</h1>
            <ProjectList items={Items}/>
            {/*}
            <section className="mechlogos">
                <img src="Images/Solidworks Logo.png" alt="Solidworks logo" />
                <img src="Images/fusion-logo.png" alt="Fusion 360 logo" />
            </section>
            <section className="mechProjects">
                <figure className="solid">
                    <img src="Images/Bike's Render View.jpg" alt="Render Solidworks Bike" />
                    <figcaption> Motorbike</figcaption>
                </figure>
                <figure className="milk">
                    <img src="Images/Milk cartoon.png" alt="fusion 360 milk carton" title="milk" />
                    <figcaption> milk cartoon</figcaption>
                </figure>
            </section>

            <h1>Coding Projects</h1>

            <section className="software">
                <img src="Images/Python Logo.png" alt="python logo" />
                <img src="Images/matlab logo.png" alt="matlab logo" />
            </section>

            <section className="codeProjects">
                <figure>
                    <img src="Images/JuliaVase Render.PNG" alt="Render of Julia Vase" />
                    <figcaption> Julia Vase</figcaption>
                </figure>
                <video src="Images/DoublePendulum.mp4" controls width="500" ></video>
            </section>
    */}
        </main></div >;
    }
}

class ProjectList extends Component {
    render() {
    let Cards = this.props.items.map((single) => {
        return <ProjectItems items={single} />
    });
    return (<div> {Cards} </div>
    );
}
}


class ProjectItems extends Component {

    render() {
        let work = this.props.items;
        return (
            <div className="projectHead">
                <img className="proj-img-top" src={work.Img} alt={work.name} />
                <div className="proj-body">
                    <p className="project-text">{work.name}</p>
                </div>
            </div >
        );
    }
}





export default Project;