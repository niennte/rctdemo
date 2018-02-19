import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";
import { Link } from "react-router-dom";

class ProjectItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project: {},
            animate: new Animated.Value(0)
        };
    }

    componentWillReceiveProps(nextProps) {
        this._renderProject(nextProps.projects);
    }

    _renderProject(projects) {
        let project = projects.filter(p => {
            return (parseInt(p.id, 10) === parseInt(this.props.match.params.id, 10));
        });
        if (project.length) {
            this.setState({ project: project[0] });
            setTimeout(
                () =>
                    Animated.spring(this.state.animate, { toValue: 1 }).start(),
                375
            );
        }
    }

    render() {
        const { project: { title, body, id } } = this.state;
        const goBackStyle = {
            transform: Animated.template`
                translate3d(${this.state.animate.interpolate({
                inputRange: [0, 1],
                outputRange: ["-24px", "0px"]
            })},0,0)
            `,
            opacity: Animated.template`${this.state.animate}`
        };

        return (
            <div className="page project-item">
                <Animated.span style={goBackStyle} className="goBack">
                    <a
                        onClick={e => {
                            e.preventDefault();
                            this.props.history.goBack();
                        }}
                    >
                        ←
                    </a>
                </Animated.span>
                <h1>{title}</h1>
                <p>{body}</p>


                <Animated.span style={goBackStyle} className="goBack">
                    <Link to ={`/projects/${id-1}`} >
                        ←
                    </Link>
                </Animated.span>
                <Animated.span style={goBackStyle} className="goBack">
                    <Link to ={`/projects/${id+1}`} >
                        ←
                    </Link>
                </Animated.span>


            </div>
        );
    }
}

export default ProjectItem;