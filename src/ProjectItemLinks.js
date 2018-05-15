import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProjectItemLinks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project: props.project
        };
    }

    componentWillReceiveProps(nextProps) {
       this.setState({
           project: nextProps.project
       });
    }

    render() {

        const {
            project: {
                tech,
                github,
                demos
                }
            } = this.state;


        return(
            <dl>
                <dt>Stack: </dt>
                <dd>
                    <ul>
                        {tech && tech.length ?
                            tech.map((item, i) => {
                                return(
                                    <li
                                        key={i}
                                        >{item}</li>
                                )
                            }) : ""
                        }
                    </ul>
                </dd>

                <dt>{"{demos}"}</dt>
                <dd>
                    <ul>
                        {demos && demos.length ?
                            demos.map((item, i) => {
                                return(
                                    <Link
                                        key={i}
                                        to={item.URL}
                                        target="_blank"
                                        >
                                        {item.label}
                                    </Link>
                                )
                            }) : "This project has no demo."
                        }
                    </ul>
                </dd>

                <dt>{"{code}"}</dt>
                <dd>
                    <ul>
                        {github && github.length ?
                            github.map((item, i) => {
                                return(
                                    <Link
                                        key={i}
                                        to={item.URL}
                                        target="_blank"
                                        >
                                        {item.label}
                                    </Link>
                                )
                            }) : "This project has no code."
                        }
                    </ul>
                </dd>
            </dl>
        );
    }
}

export default ProjectItemLinks;