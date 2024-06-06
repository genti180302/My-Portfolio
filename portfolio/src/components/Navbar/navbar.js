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
                            <Link to='home' smooth={true} duration={1200}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='about' smooth={true} duration={1200}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='skills' smooth={true} duration={1200}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to='work' smooth={true} duration={1200}>
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link to='contact' smooth={true} duration={1200}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='Icons-Style'>
                <a href={'https://github.com/genti180302?tab=repositories'}><FaGithub
                    style={{fontSize: '35px', color: 'white'}}/></a>
                <a href={'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'}><FaLinkedin
                    style={{fontSize: '35px', color: 'white'}}/></a>
                <a href="mailto:gentian_1@live.at">
                    <HiOutlineMail style={{fontSize: '35px', color: 'white'}}/>
                </a>
            </div>
        </>
    )
}

export default Navbar;