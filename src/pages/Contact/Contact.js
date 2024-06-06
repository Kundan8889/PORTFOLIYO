import React, { useState } from "react";
import { toast } from 'react-toastify';
import "./Contact.css";
import ContactImg from "./Contact_img.webp";
import { GrLinkedin } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaInstagramSquare } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        // Show an alert directly in the UI
        toast.error("Please provide all fields");
      }
      const res = await axios.post('/api/v1/portfoliyo/sendEmail', { name, email, msg });
      if (res.data.success) {
        // Show a success message directly in the UI
        toast.success(res.data.message);
      } else {
        // Show an error message directly in the UI
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <img className="image" src={ContactImg} alt="Contact" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card2 d-flex card border-0 px-4 py-2">
              <div className="row">
                <div className="row">
                  <h6> Contact with
                    <GrLinkedin color="blue" size={27} className="ms-2" />
                    <IoLogoGithub color="black" size={34} className="ms-2" />
                    <TbBrandLeetcode color="#c39e0c" size={34} className="ms-2" />
                    <FaInstagramSquare color="#e04763" size={34} className="ms-2" />
                  </h6>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Write your message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <button className="button" onClick={handleSubmit}>
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
