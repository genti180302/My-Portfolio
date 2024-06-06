import React from "react";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import './navbar.scss'

const Navbar = () => {

    return(
        <>
            <div className='navbar-flex'>
                <div className='portfolio-title'>
                    GL
                </div>
                <div className='portfolio-wholeBox'>
                    <ul className='portfolio-items'>
                        <li className='portfolio-item'>
                            <Link to='home' smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='about' smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='skills' smooth={true} duration={500}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to='work' smooth={true} duration={500}>
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link to='contact' smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='Icons-Style'>
                <a href={'https://github.com/genti180302?tab=repositories'}><FaGithub style={{fontSize:'35px',color:'white'}}/></a>
                <a href={'https://github.com/genti180302?tab=repositories'}><FaLinkedin style={{fontSize:'35px',color:'white'}}/></a>
                <a href={'https://github.com/genti180302?tab=repositories'}><HiOutlineMail style={{fontSize:'35px',color:'white'}}/></a>
            </div>
        </>
    )
}

export default Navbar;