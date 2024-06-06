import React from "react";
import portfolioImage from '../../images/portfolio.png'
import './home.scss'

const Home = () => {
    return(
        <>
            <section className='all-home-section'>
                <div className='Text-info'>
                    <h1>I'm a Frontend Developer </h1>
                    <p>I started learning Frontend Development five months ago, and I love working with technologies
                        like React and Sass. Building dynamic interfaces with React and creating scalable stylesheets
                        with Sass is a lot of fun.</p>
                    <button className='button-info'> About me!</button>
                </div>
                <div className='img-info'>
                <img style={{width:'300px',height:'400px',paddingBottom:'200px'}} src={portfolioImage} alt='comic'/>
            </div>
            </section>
        </>
    )
}

export default Home;