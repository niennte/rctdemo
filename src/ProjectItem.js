import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";
import { Link } from "react-router-dom";
import ProjectItemLinks from './ProjectItemLinks';
import ProjectItemMedia from './ProjectItemMedia';

class ProjectItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project: {},
            isFaved: false,
            animate: new Animated.Value(0),
            referredBy: "projects" // default
        };

        this.addToFaveList = this.addToFaveList.bind(this);
        this.removeFromFaveList = this.removeFromFaveList.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            referredBy : nextProps.location.pathname.split('/')[1]
        });
        this._renderProject(nextProps.projects, nextProps.faves);
    }

    _renderProject(projects, faves) {
        let project = projects.filter(p => {
            return (parseInt(p.id, 10) === parseInt(this.props.match.params.id, 10));
        });
        if (project.length) {
            this.setState({ project: project[0] });
            this.setState({ isFaved: faves.faveList.indexOf(this.state.project.id) > -1});
            setTimeout(
                () =>
                    Animated.spring(this.state.animate, { toValue: 1 }).start(),
                575
            );
        }
    }

    addToFaveList(e) {
        this.props.onAdd(e.target.dataset.id);
    }

    removeFromFaveList(e) {
        this.props.onRemove(e.target.dataset.id);
        return false;
    }


    render() {

        const {
            project: {
                id,
                title,
                body,
                nextProject,
                prevProject
                },
            referredBy } = this.state;

        const { isFaved } = this.state;

        const goBackStyle = {
            transform: Animated.template`
                translate3d(0, ${this.state.animate.interpolate({
                inputRange: [0, 1],
                outputRange: ["-14px", "0px"]
            })},0)
            `,
            opacity: Animated.template`${this.state.animate}`
        };

        const prevStyle = {
            transform: Animated.template`
                translate3d(${this.state.animate.interpolate({
                inputRange: [0, 1],
                outputRange: ["-24px", "0px"]
            })},0,0)
            `,
            opacity: Animated.template`${this.state.animate}`
        };

        const nextStyle = {
            transform: Animated.template`
                translate3d(${this.state.animate.interpolate({
                inputRange: [0, 1],
                outputRange: ["24px", "0px"]
            })},0,0)
            `,
            opacity: Animated.template`${this.state.animate}`
        };

        return (
            <div className="page project-item">

                <Animated.span style={goBackStyle} className="inlineNav goBack backLink">
                    <Link to={`/${referredBy}`} title={`back to ${referredBy}`}>
                        &#x2191;
                    </Link>
                </Animated.span>

                {
                    isFaved ?
                        <button
                            className="faveButton isFavedButton"
                            title="remove from favorites"
                            data-id={id}
                            onClick={this.removeFromFaveList} >
                            &hearts;
                        </button> :
                        <button
                            className="faveButton isNotFavedButton"
                            title="add to favorites"
                            data-id={id}
                            onClick={this.addToFaveList}>
                            &#9825;
                        </button>
                }

                <nav className="inlineNav">
                    { prevProject ?
                        <Animated.span style={prevStyle} className="goBack inlineNav prevLink">
                            <Link to={`/${referredBy}/${prevProject}`} title="previous project">
                                &#x27F5;
                            </Link>
                        </Animated.span>
                        :""
                    }
                    { nextProject ?
                         <Animated.span style={nextStyle} className="goBack inlineNav nextLink">
                            <Link to={`/${referredBy}/${nextProject}`} title="next project">
                                &#x27F6;
                            </Link>
                        </Animated.span>
                        :""
                    }
                </nav>

                <section className="header">
                <header>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </header>
                </section>

                <section className="content">
                    <div className="left column">
                        <ProjectItemLinks project={this.state.project} />
                    </div>

                    <ProjectItemMedia project={this.state.project} />
                </section>
            </div>


        );
    }
}

export default ProjectItem;