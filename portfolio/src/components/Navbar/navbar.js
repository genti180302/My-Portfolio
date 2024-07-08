import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import { IoAccessibilitySharp } from "react-icons/io5";
import './navbar.scss'

const Navbar = () => {
    const[isActive, setIsActive] = useState(false);


    const handleClick = () => {
        setIsActive(!isActive)
    }


    return(
        <>
            <div className='navbar-flex'>
                <div className='portfolio-title'>
                    GL
                </div>
    
                    <div className="ham-menu">
                            <span onClick={handleClick}>
                                {!isActive ? true : false }
                                <CiMenuBurger/>
                            </span>
                    </div>
                <div className='portfolio-wholeBox'>
                    <ul className='portfolio-items'>
                        <li className='portfolio-item'>
                            <Link to='home' smooth={true} duration={1200}>
                                Home
                            </Link>
                        </li>
                        <li className='portfolio-item'>
                            <Link to='about' smooth={true} duration={1200}>
                                About
                            </Link>
                        </li>
                        <li className='portfolio-item'>
                            <Link to='skills' smooth={true} duration={1200}>
                                Skills
                            </Link>
                        </li>
                        <li className='portfolio-item'>
                            <Link to='work' smooth={true} duration={1200}>
                                Work
                            </Link>
                        </li>
                        <li className='portfolio-item'>
                            <Link to='contact' smooth={true} duration={1200}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
            <div className={`portfolio-wholeBox-phone ${!isActive ? '' : 'active'}`}>
                    <ul className='portfolio-items-phone'>
                        <li className='portfolio-item-phone'>
                            <Link to='home' smooth={true} duration={1200}>
                                Home
                            </Link>
                        </li>
                        <li className='portfolio-item-phone'>
                            <Link to='about' smooth={true} duration={1200}>
                                About
                            </Link>
                        </li>
                        <li className='portfolio-item-phone'>
                            <Link to='skills' smooth={true} duration={1200}>
                                Skills
                            </Link>
                        </li>
                        <li className='portfolio-item-phone'>
                            <Link to='work' smooth={true} duration={1200}>
                                Work
                            </Link>
                        </li>
                        <li className='portfolio-item-phone'>
                            <Link to='contact' smooth={true} duration={1200}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div> 
            </div>
            <div className='Icons-Style'>
                <a href={'https://github.com/genti180302?tab=repositories'}><FaGithub
                    style={{ color: 'white'}}/></a>
                <a href={'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'}><FaLinkedin
                    style={{ color: 'white'}}/></a>
                <a href={'/Bewerbungsmappe.pdf'}>
                    <IoAccessibilitySharp style={{ color: 'white'}}/>
                </a>
            </div>
        </>
    )
}

export default Navbar;



/* <div className={`portfolio-wholeBox-phone ${!isActive ? 'active' : ''}`}>
                    <ul className='portfolio-items-phone'>
                        <li className='portfolio-item-phone'>
                            <Link to='home' smooth={true} duration={1200}>
                                Home
                            </Link>
                        </li>
                        <li className='portfolio-item-phone'>
                            <Link to='about' smooth={true} duration={1200}>
                                About
                            </Link>
                        </li>
                        <li className='portfolio-item-phone'>
                            <Link to='skills' smooth={true} duration={1200}>
                                Skills
                            </Link>
                        </li>
                        <li className='portfolio-item-phone'>
                            <Link to='work' smooth={true} duration={1200}>
                                Work
                            </Link>
                        </li>
                        <li className='portfolio-item-phone'>
                            <Link to='contact' smooth={true} duration={1200}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div> */