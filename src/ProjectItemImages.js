import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProjectItemImages extends Component {

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

        console.log(this.state);

        const {
            project: {
                posterImage
                }
            } = this.state;


        return(


            <div className="right column">
        <img src="/img/placeholder.jpg"/>
        <img src="/img/placeholder-2.jpg"/>
        <img src="/img/placeholder.jpg"/>
            </div>


        );
    }
}

export default ProjectItemImages;