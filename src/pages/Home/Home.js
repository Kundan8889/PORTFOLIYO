import React from 'react';
import './Home.css';
import { useTheme } from '../Techstack/ThemeContext';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/KUNDAN RATHORE RESUME .pdf';
import { GiMoon } from "react-icons/gi";
import { FiSun } from "react-icons/fi";

function Home() {
  const [theme,setTheme]=useTheme();
  // handle theme
  const handleTheme=()=>{
    setTheme((prevState)=>(prevState==='light' ? 'dark' :'light'));
  }
  return (
   
    <div className='container-fluid home-container' id='/'>
      <div className='theme-btn' onClick={handleTheme}>{theme==='light' ? <GiMoon size={30}/> : <FiSun size={30}/>}</div>
      <div className='container home-content '>
        <h2>Hey!👋 I am a </h2>
        <h1>
          <Typewriter
            options={{
              strings: [
                "Mern Stack Developer!",
                "Full Stack Developer!",
                "React.js Developer!"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="home-buttons">
          <a className='btn btn-hire' href="https://api.whatsapp.com/send?phone=8889802264" rel='noreferrer' target='_blank'>Hire Me</a>
          <a className='btn btn-cv' href={Resume} download='KUNDAN_RATHORE_RESUME.pdf'>My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
