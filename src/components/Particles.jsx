import React, { Component } from 'react';
import Particles from 'react-tsparticles';

export default class TSParticles extends Component {
    constructor(props) {
        super(props);
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit(main) {
        // react-tsparticles initialized
    }

    particlesLoaded(container) {
        // react-tsparticles container handler
    }

    render() {
        return (
            <Particles
                id='tsparticles'
                init={this.particlesInit}
                loaded={this.particlesLoaded}
                options={{
                    backgroundMode: {
                        enable: true,
                    },
                    background: {
                        color: {
                            value: '#242424',
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onClick: {
                                enable: false,
                                mode: 'push',
                            },
                            onHover: {
                                enable: false,
                                mode: 'repulse',
                            },
                            resize: false,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#888888',
                        },
                        links: {
                            color: '#888888',
                            distance: 100,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 0.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: false,
                }}
            />
        );
    }
}
