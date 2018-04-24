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

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: projectData,
            faves: {
                faveList:[],
                title: ''
            },
            modal: false,
            copiedValue: '',
            copied: false
        }

        this.addToFaveList = this.addToFaveList.bind(this);
        this.removeFromFaveList = this.removeFromFaveList.bind(this);
        this.loadCustomFaves = this.loadCustomFaves.bind(this);

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    addToFaveList(projectId) {
        this.setState((prevState) => {

                prevState.faves.faveList.push(parseInt(projectId, 10));
                console.log(prevState.faves.faveList);
                return {
                    faves: {faveList: prevState.faves.faveList}
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
                    )}
            };
        });
    }

    loadCustomFaves(faves) {
        let faveList = Array.from(faves.faveList);

        if (Array.isArray(faveList)) {
            this.setState({
                faves: {
                    faveList: faveList.map( (f) => parseInt(f) )},
                    title: faves.title
            });
        }
    }

    render() {

        let navLink = "";
        if (this.state.faves.faveList && this.state.faves.faveList.length) {
            for (let i = 0; i < this.state.faves.faveList.length; i++) {
                navLink += "&hearts;";
            }
        }


        let favesURL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/faves?${JSON.stringify(this.state.faves)}`;

        return (
            <div className="App wrapper">
                <div className="topBar">
                    <NavLink className="homeLink" exact to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                    {
                        this.state.faves.faveList && this.state.faves.faveList.length ?
                            <span className="faveNav">
                                <NavLink className="faveLink" to="/faves">
                                    <span dangerouslySetInnerHTML={{__html: navLink }}></span>
                                </NavLink>
                                <button className="shareFaveLink" onClick={this.toggle}>
                                    <svg x="0px" y="0px" viewBox="0 0 473.932 473.932" width="17" height="17" fill="currentcolor">
                                        <path d="M385.513,301.214c-27.438,0-51.64,13.072-67.452,33.09l-146.66-75.002
                c1.92-7.161,3.3-14.56,3.3-22.347c0-8.477-1.639-16.458-3.926-24.224l146.013-74.656c15.725,20.924,40.553,34.6,68.746,34.6
                c47.758,0,86.391-38.633,86.391-86.348C471.926,38.655,433.292,0,385.535,0c-47.65,0-86.326,38.655-86.326,86.326
                c0,7.809,1.381,15.229,3.322,22.412L155.892,183.74c-15.833-20.039-40.079-33.154-67.56-33.154
                c-47.715,0-86.326,38.676-86.326,86.369s38.612,86.348,86.326,86.348c28.236,0,53.043-13.719,68.832-34.664l145.948,74.656
                c-2.287,7.744-3.947,15.79-3.947,24.289c0,47.693,38.676,86.348,86.326,86.348c47.758,0,86.391-38.655,86.391-86.348
                C471.904,339.848,433.271,301.214,385.513,301.214z"></path>
                                    </svg>
                                </button>
                                <Modal
                                    isOpen={this.state.modal}
                                    toggle={this.toggle}
                                    onClosed={() => this.setState({copied: false})}
                                    className="shareLinkModal">
                                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                        <textarea
                                            rows="3"
                                            style={{width: "100%", textAlign: "center"}}
                                            defaultValue={favesURL} >
                                        </textarea>
                                    </ModalBody>
                                    <ModalFooter>
                                        <CopyToClipboard
                                            text={favesURL}
                                            onCopy={() => this.setState({copied: true})}>
                                            <Button color="primary" >Copy Link</Button>
                                        </CopyToClipboard>

                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>

                                        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                                    </ModalFooter>
                                </Modal>
                            </span>
                                :
                            ""
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

                    <Route
                        path="/about" component={About}
                        />

                    <Route
                        path="/contact" component={Contact}
                        />

                    <Route
                        path="/"
                        component={Home}/>

                </AnimatedRoutes>
            </div>
        );
    }
}

export default App;
