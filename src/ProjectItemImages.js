import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { PopupboxContainer, PopupboxManager } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

class ProjectItemImages extends Component {

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            project: props.project,
            photoIndex: 0,
            isOpen: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            project: nextProps.project
        });
    }


    openPopupbox(e) {
        const content = <img src={e.target.dataset.src} />;

        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'Meow!\n Im multi line'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    render() {

        const {
            project: {
                posterImage
                }
            } = this.state;

    return(

            <div className="right column">
                
                {posterImage &&
                <img
                    className="projectItemPoster"
                    src={posterImage.src}
                    data-src={posterImage.src}
                    onClick={this.openPopupbox} />
                }

            </div>


        );
    }
}

export default ProjectItemImages;