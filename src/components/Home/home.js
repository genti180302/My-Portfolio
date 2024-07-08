import React from "react";
import portfolioImage from '../../images/portfolio.png'
import './home.scss'
import {Link} from 'react-scroll'

const Home = () => {
    // const [isHovering, setIsHovering] = useState(false);

    return(
        <>
            <section className='all-home-section' id='home'>
                <div className='Text-info'>
                    <h1>I'm a Frontend Developer </h1>
                    <p>I started learning Frontend Development five months ago, and I love working with technologies
                        like React and Sass. Building dynamic interfaces with React and creating scalable stylesheets
                        with Sass is a lot of fun.</p>
                    <Link to='about' smooth={true} duration={1200}>
                        <button className='button-info'> About me!</button>
                    </Link>
                </div>
                <div className='img-info'>
                <img src={portfolioImage} alt='comic'/>
            </div>
            </section>
        </>
    )
}

export default Home;