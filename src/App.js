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
import FaveNav from './FaveNav.js';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: projectData,
            faves: {
                faveList:[],
                title: "Some projects from Irin's portfolio: "
            }
        };

        this.addToFaveList = this.addToFaveList.bind(this);
        this.removeFromFaveList = this.removeFromFaveList.bind(this);
        this.loadCustomFaves = this.loadCustomFaves.bind(this);

    }

    addToFaveList(projectId) {
        this.setState((prevState) => {

                prevState.faves.faveList.push(parseInt(projectId, 10));
                return {
                    faves: {
                        faveList: prevState.faves.faveList,
                        title: prevState.faves.title
                    }
                };
            }
        );
    }

    removeFromFaveList(projectId) {
        this.setState((prevState) => {
            return {
                faves: {
                    faveList: prevState.faves.faveList.filter(
                            id => parseInt(id, 10) !== parseInt(projectId, 10)
                    ),
                    title: prevState.faves.title
                }
            };
        });
    }

    loadCustomFaves(faves) {
        let faveList = Array.from(faves.faveList);

        if (Array.isArray(faveList)) {
            this.setState({
                faves: {
                    faveList: faveList.map( (f) => parseInt(f, 10) )},
                    title: faves.title
            });
        }
    }

    render() {

        return (
            <div className="App wrapper">
                <div className="topBar">
                    <NavLink className="homeLink" exact to="/">Irin P.</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    {
                        this.state.faves.faveList && this.state.faves.faveList.length ?
                            <FaveNav faves={this.state.faves} /> : ""
                    }
                </div>

                <AnimatedRoutes>

                    <Route
                        exact
                        path="/projects"
                        render={ (props) => (
                            <Projects
                                {...props}
                                onAdd={this.addToFaveList}
                                onRemove={this.removeFromFaveList}
                                projects={this.state.projects}
                                faves={this.state.faves} />
                        )} />

                    <Route
                        exact
                        path="/projects/:id"
                        render={ (props) => (
                            <ProjectItem
                                {...props}
                                onAdd={this.addToFaveList}
                                onRemove={this.removeFromFaveList}
                                projects={this.state.projects}
                                faves={this.state.faves} />
                        )} />

                    <Route
                        exact
                        path="/faves"
                        render={ (props) => (
                            <Faves
                                {...props}
                                onUpdate={this.loadCustomFaves}
                                faves={this.state.faves}
                                projects={this.state.projects} />
                        )} />

                    <Route
                        path="/faves/:id"
                        render={ (props) => (
                            <ProjectItem
                                {...props}
                                onAdd={this.addToFaveList}
                                onRemove={this.removeFromFaveList}
                                faves={this.state.faves}
                                projects={this.state.projects} />
                        )} />

                    <Route path="/about" component={About} />

                    <Route path="/contact" component={Contact} />

                    <Route path="/" component={Home}/>

                </AnimatedRoutes>
            </div>
        );
    }
}

export default App;
