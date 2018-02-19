import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";
import { TransitionGroup, Transition } from 'react-transition-group';

/*
TODO:
Finalize behavior:
- re-render in componentWillReceiveProps + update URL to match
- props need to take precedence over the URL

Rename Faves into Faves ))
 */

class Faves extends Component {
    constructor(props) {
        super(props);
        // todo: handle JSON.parse errors (URL can be anything)
        // first check to see if props provide a faveList
        // handle no projects found scenario
        this.state = {
            projects: [],
            faves: JSON.parse(decodeURI(props.match.params.faveList)),
            animations: []
        };
    }
    componentDidMount() {
        this._renderProjects(this.props.projects);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.projects.length) {
            this._renderProjects(nextProps.projects);
        }
    }

    _renderProjects(projects) {


        /*
        TODO
        move this into setState callback
         */
        const projectsToRender = projects.filter(function(p) {
                return this.indexOf(p.id) > -1;
            },
            this.state.faves.faveList
        );

        this.setState(
            {
                projects: projectsToRender,
                animations: projectsToRender.map((_, i) => new Animated.Value(0))
            },
            () => {
                Animated.stagger(
                    100,
                    this.state.animations.map(anim =>
                            Animated.spring(anim, { toValue: 1 })
                    )
                ).start();
            }
        );
    }

    render() {

        const timeout = { enter: 300, exit: 200 };

        return (
            <div className="page projects">
                <h1>Faved Projects</h1>
                <TransitionGroup component="section">
                    {this.state.projects.map((p, i) => {
                        const style = {
                            opacity: this.state.animations[i],
                            transform: Animated.template`
                                translate3d(0,${this.state.animations[i].interpolate({
                                inputRange: [0, 1],
                                outputRange: ["12px", "0px"]
                            })},0)
                            `
                        };
                        return (
                            <Transition
                                timeout={timeout}
                                key={i}
                                onEnter={this.handleEnter}
                                onExit={this.handleExit}
                                appear
                                >
                                <Animated.div style={style}>
                                    <Link to={`/projects/${p.id}`}>
                                        {p.title}-{p.id}
                                    </Link>
                                </Animated.div>
                            </Transition>
                        );
                    })}
                </TransitionGroup>
            </div>
        );
    }
}

export default withRouter(Faves);