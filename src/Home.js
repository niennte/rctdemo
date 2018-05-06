import React, { Component } from "react";
import { Link } from "react-router-dom";
import SVGAnimationFrontEnd from './SVGs/SVGAnimationFrontEnd';
import SVGAnimationBackEnd from './SVGs/SVGAnimationBackEnd';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            frontendLink: {
                faveList: [2,4,5,6,8],
                title: 'Some frontend projects'
            },
            backendLink: {
                faveList: [3,11,12],
                title: 'Some backend projects'
            },
            frontEndAnimationId: "earsUp",
            backEndAnimationId: "curlTail"
        };
    }

    render() {

        return(

            <div className="page">

                <h2 className="muted statement">I Build</h2>
                <h3 className="muted illustration">
                    <Link className="frontends"
                        to={`/faves?${JSON.stringify(this.state.frontendLink)}`}
                        title={this.state.frontendLink.title}
                        onMouseOver={ () => document.getElementById(this.state.frontEndAnimationId).beginElement() }
                        onMouseOut={ () => document.getElementById(this.state.frontEndAnimationId).endElement() } >

                        <SVGAnimationFrontEnd animationId={this.state.frontEndAnimationId} />
                        <span className="text">Frontends</span>

                    </Link>

                    &nbsp; &amp; &nbsp;

                    <Link
                      className="backends"
                      to={`/faves?${JSON.stringify(this.state.backendLink)}`}
                      title={this.state.backendLink.title}
                      onMouseOver={ () => document.getElementById(this.state.backEndAnimationId).beginElement() }
                      onMouseOut={ () => document.getElementById(this.state.backEndAnimationId).endElement() } >

                      <SVGAnimationBackEnd animationId={this.state.backEndAnimationId} />
                      <span className="text">Backends</span>

                    </Link>
                    .
                </h3>

                <h1 className="muted tagLine">I am a
                    &nbsp;
                    <Link
                        className="someFunWithHover"
                        to='/projects'
                        title='My portfolio projects'
                        onMouseOver={ () =>  {
                            // SVG/SMIL animation DOM
                            document.getElementById(this.state.frontEndAnimationId).beginElement();
                            document.getElementById(this.state.backEndAnimationId).beginElement();
                          }
                        }
                        onMouseOut={ () =>  {
                            // SVG/SMIL animation DOM
                            document.getElementById(this.state.frontEndAnimationId).endElement();
                            document.getElementById(this.state.backEndAnimationId).endElement();
                          }
                        } >
                        <span className="fullStack">Full Stack</span>
                    </Link>
                  &nbsp;
                  Web Developer.
                </h1>
            </div>

        );
    }
}

export default Home;
