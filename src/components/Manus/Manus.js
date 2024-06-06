import React from 'react'
import './Manus.css'
import profileImg from './PHOTO.png'
import { FcHome } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import {Link} from "react-scroll";
import Zoom from 'react-reveal/Zoom';

// toggel ko destructure kardenge
const Manus=({toggel})=>{
  return (
    <>
    {toggel ? (
      <>
      <Zoom>
      <div className='navbar-profile-pic'>
     <img src={profileImg} alt='profile-pic'/>
    </div>
    </Zoom>
    <div className='nav-item'>
      <div className='nav-item'>
        <div className='nav-link'>
          <Link to="/"  spy={true} smooth={true} offset={-100} duration={100} >
        < FcHome />
          Home
          </Link>
        </div>
        <div className='nav-link'>
        <Link to="about"  spy={true} smooth={true} offset={-100} duration={100} >
        < FcAbout />
          About Me
          </Link>
        </div>
        <div className='nav-link'>
        <Link to="education"  spy={true} smooth={true} offset={-100} duration={100} >
        < FcGraduationCap />
        Education
          </Link>
        </div>
        <div className='nav-link'>
        <Link to="skills"  spy={true} smooth={true} offset={-100} duration={100} >
          < GiSkills />
          Skills
          </Link>
        </div>
        <div className='nav-link'>
        <Link to="projects"  spy={true} smooth={true} offset={-100} duration={100} >
        < FcVideoProjector />
        Projects
          </Link>
        </div>
        <div className='nav-link'>
        <Link to="experience"  spy={true} smooth={true} offset={-100} duration={100} >
        < FcReadingEbook />
        Experience
          </Link>
        </div>
      
        <div className='nav-link'>
        <Link to="contact"  spy={true} smooth={true} offset={-100} duration={100} >
        < IoMdContact />
        Contact
          </Link>
        </div>
      </div>
    </div>
    </>
    ):(
      <div className='nav-item'>
      <div className='nav-item'>
        <div className='nav-link'>
        <Link to="/"  spy={true} smooth={true} offset={-100} duration={100} >
        < FcHome />
          </Link>
          
        </div>
        <div className='nav-link'>
        <Link to="about"  spy={true} smooth={true} offset={-100} duration={100} >
        < FcAbout />
          </Link>
          
        </div>
        <div className='nav-link'>
        <Link to="education"  spy={true} smooth={true} offset={-100} duration={100} >
        < FcGraduationCap />
          </Link>
        
        </div>
        <div className='nav-link'>
        <Link to="projects"  spy={true} smooth={true} offset={-100} duration={100} >
        < FcVideoProjector />
          </Link>
        
        </div>
        <div className='nav-link'>
        <Link to="experience"  spy={true} smooth={true} offset={-100} duration={100} >
        < FcReadingEbook />
          </Link>
        
        </div>
        <div className='nav-link'>
        <Link to="skills"  spy={true} smooth={true} offset={-100} duration={100} >
          < GiSkills />
          </Link>
          
        </div>
        <div className='nav-link'>
        <Link to="contact"  spy={true} smooth={true} offset={-100} duration={100} >
        < IoMdContact />
          </Link>
        
        </div>
      </div>
    </div>
    )
    }
    </>
  )
}


export default Manus;
