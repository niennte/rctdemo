import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>


        <AnimatedRoutes>
          <Route exact path="/" component={Home} />
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
        </AnimatedRoutes>
      </div>
    );
  }
}

export default App;
