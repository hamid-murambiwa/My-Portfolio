import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';
import img1 from '../../style/images/linkedin.png';
import img2 from '../../style/images/github.png';
import img3 from '../../style/images/twitter.png';
import img4 from '../../style/images/angelist.png';
import img5 from '../../style/images/logo.svg';
import img6 from '../../style/images/name.svg';
import img7 from '../../style/images/hamburger.png';
import '../../style/header.css';
import resume from '../../style/resume.pdf'

function Header() {
  const [isActive, setIsActive] = useState(false);
    return (
        <div className="header-con">
          <header className="desk-header">
            <div className="header-logo">
            <Zoom>
                <img src={img5} alt="logo" className="logo" />
            </Zoom>
            </div>
            <nav className="navigation">
              <li>
                <a href="/" className="home">Home</a>
              </li>
              <li>
                <a href="#about" onclick={window.location.href = '#about'}>About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#publications">Publications</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contacts">Contact</a>
              </li>
            </nav>
            <div className="socials">
              <a href="https://linkedin.com/in/hamid-murambiwa/"><img src={img1} alt="LinkedIn icon" className="social-img" /></a>
              <a href="https://twitter.com/Hamid87789454/"><img src={img3} alt="Twitter icon" className="social-img" /></a>
              <a href="https://angel.co/u/hamid-murambiwa"><img src={img4} alt="Angelist icon" className="social-img" /></a>
              <a href="https://github.com/hamid-murambiwa/"><img src={img2} alt="Github icon" className="social-img" /></a>
            </div>
          </header>
          <header className="mobile-header">
          <Menu className='menu-icon' menuButton={
          <MenuButton
            onClick={() => { setIsActive(!isActive); }}
          >
            <img src={img7} className={isActive ? 'hamburger h-active' : 'hamburger h-inactive'} alt="hamburger" />
          </MenuButton>}>
            <MenuItem><a href="#header">Home</a></MenuItem>
            <MenuItem><a href="#about">About</a></MenuItem>
            <MenuItem><a href="#services">Services</a></MenuItem>
            <MenuItem><a href="#publications">Publications</a></MenuItem>
            <MenuItem><a href="#projects">Projects</a></MenuItem>
            <MenuItem><a href="#contacts">Contact</a></MenuItem>
          </Menu>
          </header>
          <section id="header" className="title-con">
            <div className="con">
              <div className="sub-con">
              <Bounce right>
              <div className="title-text">
                <img src={img6} alt="My name" className="name-img" />
              </div>
              </Bounce>
              <div className="role">
                <h1>Full Stack Developer</h1>
              </div>
              <Slide left>
              <div className="description">
                <p>I am a software enthusiast, I can help you develop web applications. Check out some of my work in the Projects section.  If you like what you see and have a project you need coded, don’t hesitate to contact me. I am very excited to work with you!</p>
              </div>
              </Slide>
              <div className="button-con">
                <a
                  href={resume}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  <button className="download-btn">
                    Download CV
                  </button>
                </a>
              </div>
              <div className="message-con">
                <p>
                  Currently open to new work opportunities !
                </p>
              </div>
              </div>
            </div>
          </section>
        </div>
    );
}

export default Header;
