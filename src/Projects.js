import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";
import { TransitionGroup, Transition } from 'react-transition-group';

/*

TODO
- save faves from props to state,
- when rendering, mark faved projects as such (eg, with a heart)
- add an "unfave" button (eg an x), set a call a handler from App
 */

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
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
        this.setState(
            {
                projects: projects,
                animations: projects.map((_, i) => new Animated.Value(0))
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
                <h1>Projects</h1>
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

export default withRouter(Projects);