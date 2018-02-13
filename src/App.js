import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import AnimatedRoutes from "./AnimatedRoutes";

import Home from './Home';
import About from './About';
import Projects from './Projects';
import ProjectItem from './ProjectItem';
import Contact from './Contact';
import projectData from './projectData.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: projectData
        }
    }

  render() {
    return (
      <div className="App wrapper">
        <div className="topBar">
            <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>


        <AnimatedRoutes>
            <Route
                path="/projects"
                render={ (props) => (
                    <Projects
                        {...props}
                        projects={this.state.projects} />
                )} 
            />
            <Route
                path="/project/:id"
                render={ (props) => (
                    <ProjectItem
                        {...props}
                        projects={this.state.projects} />
                )} 
            />
            <Route
                path="/about" component={About}
            />

            <Route
                path="/contact" component={Contact}
            />
          <Route exact path="/" component={Home} />
        </AnimatedRoutes>
      </div>
    );
  }
}

export default App;
