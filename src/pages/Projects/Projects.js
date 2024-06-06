import React from 'react';
import projectImg1 from './ecom.png'; 
import projectImg2 from './social-media.webp'; 
import projectImg3 from './img3.png'; 
import './Projects.css';
const Projects = () => {
  return (
    <>
    <div className="container project" id='projects'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>My Projects</h2>
      <hr />
      <p className="pb-3 text-center">
        "These are my latest projects showcasing my expertise in the MERN stack, where I've leveraged MongoDB, Express.js, React, and Node.js to build responsive and scalable web applications."
      </p>
      
      <div className="row" id='ads'>
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className='card-notify-badge'>Full Stack</span>
              <img src={projectImg1} className='img1' alt="project1" />
            </div>
            <div className='card-image-overlay m-auto mt-4'>
              <span className='card-details-badge'>Node js</span>
              <span className='card-details-badge'>React js</span>
              <span className='card-details-badge'>Express js</span>
              <span className='card-details-badge'>Mongodb</span>
            </div>
            <div className='card-body'>
              <div className='ad-title'>
                <h5 className='text-uppercase'>Ecommerce Website</h5>
              </div>
              <a className='ad-btn' href="#">View</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className='card-notify-badge'>X-Clone</span>
              <img src={projectImg2} className='img2' alt="project1" />
            </div>
            <div className='card-image-overlay m-auto mt-4'>
              <span className='card-details-badge'>Node js</span>
              <span className='card-details-badge'>React js</span>
              <span className='card-details-badge'>Express js</span>
              <span className='card-details-badge'>Mongodb</span>
            </div>
            <div className='card-body'>
              <div className='ad-title'>
                <h5 className='text-uppercase'>X-Clone</h5>
              </div>
              <a className='ad-btn' href="#">View</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className='card-notify-badge'>Gallery-App</span>
              <img src={projectImg3} className='img3' alt="project1" />
            </div>
            <div className='card-image-overlay m-auto mt-4'>
              <span className='card-details-badge'>Node js</span>
              <span className='card-details-badge'>React js</span>
              <span className='card-details-badge'>Express js</span>
              <span className='card-details-badge'>Mongodb</span>
            </div>
            <div className='card-body'>
              <div className='ad-title'>
                <h5 className='text-uppercase'>Gallery-App</h5>
              </div>
              <a className='ad-btn' href="#">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Projects;
