import React from "react";
import './about.scss'


const About = () => {
    return(
        <>
            <section className='all-about-section' id='about'>
                <h1 className='about-title'>About</h1>
                <div className='about-text-flex'>
                    <p className='about-text-1'> Hi. I'm Gentian Latifi, nice to meet you. Please take a look around</p>
                    <p className='about-text-2'>I'm a passionate learner and aspiring Frontend Developer. Over the past few months, I've
                        immersed myself in the world of web development, focusing on creating user interfaces with React
                        and Sass. I enjoy building dynamic and responsive web designs that offer great user experiences
                        across all devices.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About;