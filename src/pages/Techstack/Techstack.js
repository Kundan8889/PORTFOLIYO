import React from "react";
import "./Techstack.css";
// import { BsFiletypeHtml } from "react-icons/bs";
import { TechstackList } from "../../utils/TechStackList";
const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="skills">
        <h2 className=" col-12 mt-3 mb-1 text-center text-uppercase"> Programming skills </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 including programming language,frameworks,databases,front-end and
          back-end tools,and API
        </p>
        <br />
        <br />
        <div className="row">
          {TechstackList.map((tech,index) => (
            <div key={index} className="col-md-3">
              <div className="card md-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Techstack;
