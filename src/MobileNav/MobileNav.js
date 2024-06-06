import React, { useState } from "react";
import "./MobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FcHome } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { Link } from "react-scroll";

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    const handleManuClick=()=>{
        setOpen(false);
    }

    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ? (
                        <AiOutlineMenuUnfold size={30} className="mobile-nav-icon" onClick={handleOpen} />
                    ) : (
                        <GiHamburgerMenu size={30} className="mobile-nav-icon" onClick={handleOpen} />
                    )}
                    <span className="mobile-nav-title">My portfolio App</span>
                </div>
                {open && (
                    <div className="mobile-nav-menu">
                        <div className='nav-items'>
                            <div className='nav-link'>
                                <Link to="/" spy={true} smooth={true} offset={-100} duration={100} onClick={handleManuClick}>
                                    <FcHome /> Home
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleManuClick}>
                                    <FcAbout /> About Me
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleManuClick}>
                                    <FcGraduationCap /> Education
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to="skills" spy={true} smooth={true} offset={-100} duration={100} onClick={handleManuClick}>
                                    <GiSkills /> Skills
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100} onClick={handleManuClick}>
                                    <FcVideoProjector /> Projects
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to="experience" spy={true} smooth={true} offset={-100} duration={100} onClick={handleManuClick}>
                                    <FcReadingEbook /> Experience
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleManuClick}>
                                    <IoMdContact /> Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MobileNav;
