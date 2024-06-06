import React from 'react';
import './Educatins.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi"

function Education() {
  return (
    <>
      <div className=" education" id='education'>
        <h2 className=" col-12 mt-3 mb-1 text-center text-uppercase"> Educations Details </h2>
        <hr />
        <VerticalTimeline>
        <VerticalTimelineElement
 className="vertical-timeline-element--work"
 contentStyle={{background:"#white", color:'#fff'}}
 contentArrowStyle={{borderRight:"7px solid #ec407a"}}
 date="2021 - 2025"
 iconStyle={{ background: '#5e35b1', color: '#fff' }}
   
   icon={<PiStudentBold />}
   >
    <h3 className="vertical-timeline-element-title">BTECH</h3>
    <h4 className="vertical-timeline-element-subtitle">MITS GWALIOR, IN</h4>
    <p>
    Pursuing Bachelor of Technology in IT Software Engineering. My discipline involves patience and hard work.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   className="vertical-timeline-element--work"
   contentStyle={{background:"#white", color:'#fff'}}
   contentArrowStyle={{borderRight:"7px solid #ec407a"}}
   date="2021 - 2025"
   iconStyle={{ background: '#5e35b1', color: '#fff' }}
   icon={<FaSchool />}
   >
    <h3 className="vertical-timeline-element-title">SCHOOL</h3>
    <h4 className="vertical-timeline-element-subtitle">Govt.Model H. S. School Khachrod ,dis.:- UJJAIN, IN</h4>
    <p>
    Completed High School Education with a focus on IT Software Engineering. My discipline involves my dedication to hard work.
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
    </div>
    </>
  )
}

export default Education
