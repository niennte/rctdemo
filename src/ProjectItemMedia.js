import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { PopupboxContainer, PopupboxManager } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

import ReactPlayer from 'react-player';

class ProjectItemMedia extends Component {

    constructor(props) {
        super(props);
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
        const content = <img src={e.target.dataset.src} />

        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: e.target.dataset.title
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    render() {

        const {
            project: {
                title,
                body,
                posterImage,
                video
                }
            } = this.state;

    return(

            <div className="right column">

                {video &&
                    <ReactPlayer
                        className="videoPlayer projectItemMedia"
                        width="540px"
                        url={video.url}
                        controls="true"
                        fileConfig={{ attributes: { poster: posterImage && posterImage.src } }}
                        />
                }


                {posterImage && !video &&
                <img
                    className="posterImage projectItemMedia"
                    src={posterImage.src}
                    data-src={posterImage.src}
                    data-title={`${title}. ${body}`}
                    onClick={this.openPopupbox} />
                }

            </div>


        );
    }
}

export default ProjectItemMedia;