import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {
    FacebookShareButton,
    FacebookShareCount,
    FacebookIcon,

    GooglePlusShareButton,
    GooglePlusShareCount,
    GooglePlusIcon,

    LinkedinShareButton,
    LinkedinCount,
    LinkedinIcon,

    TelegramShareButton,
    TelegramCount,
    TelegramIcon,

    WhatsappShareButton,
    WhatsappCount,
    WhatsappIcon,

    EmailShareButton,
    EmailIcon
} from 'react-share';

class FaveNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            copied: false,
            faves: props.faves
        };

        this.toggle = this.toggle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            faves: nextProps.faves
        });
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {

        let navLink = "";
        if (this.state.faves.faveList && this.state.faves.faveList.length) {
            for (let i = 0; i < this.state.faves.faveList.length; i++) {
                navLink += "&hearts;";
            }
        }

        let favesURL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/faves?${JSON.stringify(this.state.faves)}`;
        let favesTitle = this.state.faves.title;

        return (
            <span className="faveNav">
                <NavLink className="faveLink" to="/faves">
                    <span dangerouslySetInnerHTML={{__html: navLink }}></span>
                </NavLink>
                <button className="shareFaveLink" onClick={this.toggle}>
                    <svg x="0px" y="0px" viewBox="0 0 473.932 473.932" width="17" height="17" fill="currentcolor">
                        <path d="M385.513,301.214c-27.438,0-51.64,13.072-67.452,33.09l-146.66-75.002
c1.92-7.161,3.3-14.56,3.3-22.347c0-8.477-1.639-16.458-3.926-24.224l146.013-74.656c15.725,20.924,40.553,34.6,68.746,34.6
c47.758,0,86.391-38.633,86.391-86.348C471.926,38.655,433.292,0,385.535,0c-47.65,0-86.326,38.655-86.326,86.326
c0,7.809,1.381,15.229,3.322,22.412L155.892,183.74c-15.833-20.039-40.079-33.154-67.56-33.154
c-47.715,0-86.326,38.676-86.326,86.369s38.612,86.348,86.326,86.348c28.236,0,53.043-13.719,68.832-34.664l145.948,74.656
c-2.287,7.744-3.947,15.79-3.947,24.289c0,47.693,38.676,86.348,86.326,86.348c47.758,0,86.391-38.655,86.391-86.348
C471.904,339.848,433.271,301.214,385.513,301.214z">
                        </path>
                    </svg>
                </button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    onClosed={() => this.setState({copied: false})}
                    className="shareLinkModal"
                    style={{
                        textAlign: "center"
                    }}>
                    <ModalHeader toggle={this.toggle}>
                        Save or share favorites:<br/>
                    </ModalHeader>
                    <ModalBody>
                        <textarea
                            rows="2"
                            style={{width: "100%", textAlign: "center"}}
                            defaultValue={favesURL} >
                        </textarea>

                        <div className="socialShare" style={{
                        display: "flex",
                        justifyContent: "center"
                        }}>
                            <FacebookShareButton url={favesURL} title={favesTitle}>
                                <FacebookIcon/>
                            </FacebookShareButton>
                            <GooglePlusShareButton url={favesURL} title={favesTitle}>
                                <GooglePlusIcon/>
                            </GooglePlusShareButton>
                            <LinkedinShareButton url={favesURL} title={favesTitle}>
                                <LinkedinIcon/>
                            </LinkedinShareButton>
                            <WhatsappShareButton url={favesURL} title={favesTitle}>
                                <WhatsappIcon/>
                            </WhatsappShareButton>
                            <TelegramShareButton url={favesURL} title={favesTitle}>
                                <TelegramIcon/>
                            </TelegramShareButton>
                            <EmailShareButton url={favesURL} title={favesTitle}>
                                <EmailIcon/>
                            </EmailShareButton>
                        </div>
                    </ModalBody>
                    <ModalFooter style={{
                        display: "flex",
                        justifyContent: "center"
                        }}>

                        <CopyToClipboard
                            text={favesURL}
                            onCopy={() => this.setState({copied: true})}>
                            <Button color="primary" >Copy Link</Button>
                        </CopyToClipboard>

                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>

                        {this.state.copied ? <span style={{color: 'red'}}>Link copied!</span> : null}

                    </ModalFooter>
                </Modal>
            </span>
        );
    }

}

export default FaveNav;