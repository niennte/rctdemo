import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch } from 'react-router-dom';
import * as Animated from 'animated/lib/targets/react-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import './AnimatedRoutes.css';

class AnimatedRoutes extends Component {
    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired,
        }).isRequired,
        children: PropTypes.node.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            animate: new Animated.Value(0),
            location: props.location
        };

        // handleEnter = () => {...} would do the same thing, with no biding:
        this.handleEnter = this.handleEnter.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }

    handleEnter() {
        setTimeout(() => {
            Animated.spring(this.state.animate, {toValue: 1}).start();
        }, 300);
    }

    handleExit() {
        Animated.spring(this.state.animate, {toValue: 0}).start();

        setTimeout(() => {
            this.setState({
                location: this.props.location,
            });
        }, 200);
    }

    render() {
        const {
            children,
            } = this.props;

        const {
            location,
            animate
            } = this.state;

        const currentKey = this.props.location.pathname.replace(/[/]/g, '-');

        const timeout = {enter: 300, exit: 200};

        const interpolation = (
            animate.interpolate({
                inputRange: [0, 1],
                outputRange: ['12px', '0px'],
            })
        );

        const style = {
            opacity: Animated.template`${animate}`,
            transform: Animated.template`translate3d(0, ${interpolation}, 0)`,
        };


        const locationName = this.props.location.pathname;
        let pageName = locationName.replace(/[\d./]/g, '');
        const isProjectItem = locationName.split('/')[2];
        if (isProjectItem) {
            pageName += ` projectItem projectItem-${isProjectItem}`;
        }

        return (
            <TransitionGroup component="main" className={pageName}>
                <Transition
                    key={currentKey}
                    timeout={timeout}
                    onEnter={this.handleEnter}
                    onExit={this.handleExit}
                    appear
                    >
                    <Animated.div className="animated-page-wrapper" style={style}>
                        <Switch location={location}>
                            {children}
                        </Switch>
                    </Animated.div>
                </Transition>
            </TransitionGroup>
        );
    }
}

export default withRouter(AnimatedRoutes);
