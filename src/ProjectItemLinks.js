import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProjectItemLinks extends Component {

    constructor(props) {
        super(props);

        console.log(props);

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
                kind,
                tech,
                github,
                demos,
                relatedProjects
                },
            referredBy } = this.state;

            console.log(this.state);


        if (kind && kind.length) {
            // rename Links into Meta
            // <ProjectItemTextList list={kind} />
            // <ProjectItemLinkList list={kind} />
        }


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

                <dt>{"{demo}"}</dt>
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
                            }) : ""
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
                            }) : ""
                        }
                    </ul>
                </dd>
            </dl>
        );
    }
}

export default ProjectItemLinks;