import Fade from 'react-reveal/Fade';
import img1 from '../../style/images/me.jpeg';
import img2 from '../../style/images/linkedin.png';
import img3 from '../../style/images/github.png';
import img4 from '../../style/images/twitter.png';
import img5 from '../../style/images/angelist.png';
import '../../style/about.css';

function About() {
  return (
    <div id="about" className="about-con">
        <div className="heading-con">
            <h1>About</h1>
        </div>
      <div class='second-con'>
    <Fade left>
      <div className="about-img-con">
      <img src={img1} alt="My name" className="n-img" />
      <div className="name-con">
        <h2>Hamid Murambiwa</h2>
      </div>
      <div className="socials">
        <a href="https://linkedin.com/in/hamid-murambiwa/"><img src={img2} alt="LinkedIn icon" className="social-img" /></a>
        <a href="https://twitter.com/Hamid87789454/"><img src={img4} alt="Twitter icon" className="social-img" /></a>
        <a href="https://angel.co/u/hamid-murambiwa"><img src={img5} alt="Angelist icon" className="social-img" /></a>
        <a href="https://github.com/hamid-murambiwa/"><img src={img3} alt="Github icon" className="social-img" /></a>
      </div>
    </div>
      <div className="about-text">
        <p>
          Hi! My name is Hamid. I am a student majoring in software development at Microverse Inc. I am interested in both front-end designing and back-end development. I have completed several web projects throughout my course. There, I designed and tested web pages and web applications.  Your team produces industry-leading products in web development, and I would love to be a part of your sustainable work culture. I’d love it if you went through my resume and considered me for an interview.

        <ul>
          <li>
            Front-End: JavaScript, React, Redux, jQuery, HTML5, CSS3
          </li>
          <li>
            Back-End: Ruby, Rails, MySQL
          </li>
          <li>
            Tools & Methods: Git, GitHub, Heroku, Netlify, Mobile/Responsive Development, RSpec, TDD, Chrome Dev Tools
          </li>
          <li>
            Professional: Remote Pair-Programming, Teamwork, Mentoring
          </li>
          <li>
            Looking for a developer? Let's schedule a Zoom meeting! Send me an email at @machipisajunior@gmail.com
          </li>
        </ul>
        </p>
      </div>
    </Fade>
    </div>
    </div>
  );
}

export default About;