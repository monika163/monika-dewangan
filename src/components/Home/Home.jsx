import React from "react";
import "./Home.css";
import profileImg from '../../assets/monika-3.jpg'
import resume from '../../assets/Monika_Dewangan.pdf'

export default function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="image-container">
          <div className="profile-picture">
            <img src={profileImg} alt="monika" />
          </div>
        </div>

        <div className="intro">
          <h1>Monika &nbsp;Dewangan</h1>
          <h6>Front-end Developer</h6>
          <div className="buttons-wrapper">
            <button><a href="#about">About me</a></button>
            <button className="resume"><a href={resume} target="_blank" rel="noopener noreferrer">Resume &nbsp;<span className="iconify" data-icon="fa-solid:file-download" data-inline="false"></span></a></button>
          </div>
        </div>
        <div className="social-media-icons">
          <div className="vertical-line"></div>
          <a href="https://www.linkedin.com/in/monika-dewangan-78a427149/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/monika163" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square"></i></a>
          <div className="vertical-line"></div>
        </div>
      </div>
    </div>
  );
}
