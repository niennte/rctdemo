import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";
import { TransitionGroup, Transition } from 'react-transition-group';
import './Projects.css';


class Faves extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            faves: [],
            animations: [],
            msg: "No favorites yet. Please click some hearts ",
            title: "Faved Projects" // default
        };
    }

    componentWillMount() {
        let search = this.props.location.search.replace("?", "");
        if (search) {
            try {
                const faveListParam = JSON.parse(decodeURI(search));
                this.props.onUpdate(faveListParam);
                if (faveListParam.title) {
                    this.setState({
                        title: faveListParam.title
                    });
                }
            } catch(e) {
                console.log(e);
                this.setState({
                    msg: "Couldn't extract favorites from URL. Please check the URL or click some hearts "
                });
            }
        }
    }

    componentDidMount() {
        this.setState( {
            faves: this.props.faves
        });

        if (this.state.faves.length) {
            this._renderProjects(this.state.projects);
        }
    }

    componentWillReceiveProps(nextProps) {

        this.setState( (prevState) => {
            return {
                faves: nextProps.faves.faveList && nextProps.faves.faveList.length ?
                    nextProps.faves.faveList :
                    prevState.faves,
                title: nextProps.faves.title ?
                    nextProps.faves.title :
                    prevState.title,
            };
        });

        if (this.state.faves.length) {
            this._renderProjects(nextProps.projects);
        }
    }

    _renderProjects(projects) {

        const projectsToRender = projects.filter(function(p, i, ps) {
                return this.indexOf(p.id) > -1;
            },
            this.state.faves
        );

        this.setState(
            {
                // add previous and next links
                projects: projectsToRender.map((p, i, ps) => {
                    p.nextProject = ps[i+1] ? ps[i+1].id : false;
                    p.prevProject = ps[i-1] ? ps[i-1].id : false;
                    return p;
                }),
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

                <h1>{this.state.title}</h1>

                {!this.state.projects.length ?
                    <section>
                        {this.state.msg}
                        <br />
                        <Link to="/projects" title="Projects">
                            here
                        </Link>.
                    </section>
                    : null
                }

                <TransitionGroup component="section">
                    {this.state.projects.map((p, i) => {
                        const style = {
                            opacity: this.state.animations[i],
                            transform: Animated.template`
                                translate3d(0,${this.state.animations[i].interpolate({
                                inputRange: [0, 1],
                                outputRange: ["12px", "0px"]
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
                                <Animated.div className="project-grid-item" style={style}>
                                    <Link to={`/faves/${p.id}`}>
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