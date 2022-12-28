import '../App.css';
import '../fonts/muli.light.ttf';
import Fader from './Fader';
import IntroText from './IntroText';
import Typewriter from 'typewriter-effect'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './NavBar';
import React, { useEffect } from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Content from './Content';



const Base = ({ component }) => {

    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    useEffect(() => {
        document.title = "Bobby Morck - Home"
        return () => { }
    }, [])


    return (
        <div className="fade-in2">
            <Particles className="h-56"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#FFFBF0",
                        },
                        opacity: 0.5,
                    },
                    fpsLimit: 120,
                    fullScreen: false,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            repulse: {
                                distance: 50,
                                duration: 5,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#cfcfcf",
                        },
                        links: {
                            color: "#cfcfcf",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Fader text="Bobby Morck"></Fader>
            <IntroText />
            <Navbar />
            {component}
        </div>
    );
}

export default Base;