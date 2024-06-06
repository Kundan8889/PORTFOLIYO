import React from 'react'
import './About.css'
import  profileImg   from './downloa.jpeg'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
            <img src={profileImg} alt='profile-pic'/>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
               <h1> About me </h1> 
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus illum perspiciatis inventore dolorum at, quae est quod iure, sapiente ea nemo magni dignissimos natus enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem ea dignissimos voluptatum, pariatur quasi velit alias, odit iste, modi sunt repudiandae.ri et ad id commodi consectetur distinctio illum iste! Laudantium maxime minus cum molestias eaque? Ratione eaque corrupti praesentium illo fugiat, molestias earum.mem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime dolorem saepe, placeat rerum mollitia repellat, sequi deserunt perspiciatis excepturi et ad id commodi consectetur distinctio illum iste! Laudantium maxime minus cum molestias eaque? Ratione eaque corrupti praesentium illo fugiat, molestias earum. </p>
            </div>
        </div>
    </div>
  )
}
export default About
