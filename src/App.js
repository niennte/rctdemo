import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import AnimatedRoutes from "./AnimatedRoutes";

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Faves from './Faves';
import ProjectItem from './ProjectItem';
import Contact from './Contact';
import projectData from './projectData.js';


/*
TODO
- refactor TopBar into a component
- expect faves to be received as props
    if none provided, don't render the Faves link
    if provided, configure link to reflect change
- add "fave" button to the ProjectItem
    make a handler here, bind it, and pass it to ProjectItem
    have ProjectItem call it when "fave" button is clicked
- need a method to iterate through projects and and update their status as faved
    keep track of the state in the app (or in topBar?)
    ? either feed faves into Projects via props, or mark projects up as faved
- feed faves into Projects via props, make a handler to un-fave, bind, pass to Projects via props
 */

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: projectData,
            faves: {faveList:[1,3,7]}
        }
    }

    render() {

        return (
            <div className="App wrapper">
                <div className="topBar">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to={`/faves/${JSON.stringify(this.state.faves)}`} style={{marginLeft: "auto"}}>Faves</NavLink>
                </div>


                <AnimatedRoutes>
                    <Route
                        exact
                        strict
                        path="/projects"
                        render={ (props) => (
                    <Projects
                        projects={this.state.projects} />
                )}
                        />


                    <Route
                        exact
                        strict
                        path="/projects/:id"
                        render={ (props) => (
                    <ProjectItem
                        {...props}
                        projects={this.state.projects} />
                )}
                        />


                    <Route
                        path="/faves/:faveList"
                        render={ (props) => (
                    <Faves
                        {...props}
                        faves={this.state.faves}
                        projects={this.state.projects} />
                )}
                        />



                    <Route
                        path="/about" component={About}
                        />

                    <Route
                        path="/contact" component={Contact}
                        />
                    <Route exact path="/" component={Home}/>
                </AnimatedRoutes>
            </div>
        );
    }
}

export default App;
