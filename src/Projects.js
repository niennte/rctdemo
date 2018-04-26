import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";
import { TransitionGroup, Transition } from 'react-transition-group';



class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            animations: []
        };

        this.addToFaveList = this.addToFaveList.bind(this);
        this.removeFromFaveList = this.removeFromFaveList.bind(this);
    }
    componentDidMount() {
        this._renderProjects(this.props.projects, this.props.faves);
    }
    componentWillReceiveProps(nextProps) {
        this._renderFaves(nextProps.projects, nextProps.faves);
    }

    _renderFaves(projects, faves) {
        this.setState({
            // calculate previous and next ids
            projects: projects.map((p, i, ps) => {

                p.nextProject = ps[i+1] ? ps[i+1].id : false;
                p.prevProject = ps[i-1] ? ps[i-1].id : false;
                p.isFaved = faves.faveList.indexOf(p.id) > -1;
                return p;
            })
        });
    }

    _renderProjects(projects, faves) {
        this.setState(
            {
                // calculate previous and next ids
                projects: projects.map((p, i, ps) => {
                    console.log(faves);
                    p.nextProject = ps[i+1] ? ps[i+1].id : false;
                    p.prevProject = ps[i-1] ? ps[i-1].id : false;
                    p.isFaved = faves.faveList.indexOf(p.id) > -1;
                    return p;
                }),
                // set animations
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

    addToFaveList(e) {
        this.props.onAdd(e.target.dataset.id);
    }

    removeFromFaveList(e) {
        this.props.onRemove(e.target.dataset.id);
        return false;
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
                                outputRange: ["100px", "0px"]
                            })},0)
                            `,
                            backgroundImage: `url(${p.image})`
                        };
                        return (
                            <Transition
                                timeout={timeout}
                                key={i}
                                onEnter={this.handleEnter}
                                onExit={this.handleExit}
                                appear
                            >
                                <Animated.div
                                    className={`project-grid-item ${
                                        p.isFaved ? " isFaved " : " isNotFaved"
                                    }`} style={style}>

                                    {
                                        p.isFaved ?
                                            <button
                                                className="faveButton isFavedButton"
                                                title="remove from favorites"
                                                data-id={p.id}
                                                onClick={this.removeFromFaveList} >
                                                &hearts;
                                            </button> :
                                            <button
                                                className="faveButton isNotFavedButton"
                                                title="add to favorites"
                                                data-id={p.id}
                                                onClick={this.addToFaveList}>
                                                &#9825;
                                            </button>
                                    }

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