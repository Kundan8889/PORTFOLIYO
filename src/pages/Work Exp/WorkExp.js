import React from 'react'
import './WorkExp.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GrUserWorker } from "react-icons/gr";
const WorkExp = () => {
  return (
    <>
    
    <div className='work' id='experience'>
    <div className='container  work-exp'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            Works Expreance
        </h2>
        <hr />
        <VerticalTimeline lineColor='darkgreen'>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'dark-yellow', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<GrUserWorker/>}
  >
    <h3 className="vertical-timeline-element-title"> Full Stack Developer </h3>
    <h4 className="vertical-timeline-element-subtitle">MITS, Gwalior</h4>
    <p>  
I am a MERN stack developer with experience creating a gallery app, portfolio website, and e-commerce platform.
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
    </div>
    </div>
    </>
  )
}
export default WorkExp
