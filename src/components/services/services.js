import Fade from 'react-reveal/Fade';
import img1 from '../../style/images/machine-learning.png';
import img2 from '../../style/images/content.png';
import img3 from '../../style/images/game-development.png';
import img4 from '../../style/images/web-design.png';
import '../../style/services.css';

function Services() {
  return (
    <div id="services" className="services-con">
        <div className="heading-con">
          <h1>WHAT I DO</h1>
        </div>
        <div className="services">
            <div className="s-text-con">
              <h2>&#11088; Services</h2>
            </div>
          <ul>
            <Fade left>
            <li>
              <div className="service-img-con">
                <img src={img1} alt="Web Development" className="service-img" />
              </div>
              <div className="service-text-con">
                <h3>Machine Learning</h3>
                <p>I can write algorithms for website development features. I am familiar with hypothesis testing, data modeling, and mathematics.</p>
              </div>
            </li>
          </Fade>
          <Fade left>
            <li>
              <div className="service-img-con">
                <img src={img2} alt="Web Development" className="service-img" />
              </div>
              <div className="service-text-con">
                <h3>Article Writing</h3>
                <p>I write Software Documentation. Have a look at some of my published articles in the featured section.</p>
              </div>
            </li>
          </Fade>
          <Fade left>
            <li>
              <div className="service-img-con">
                <img src={img3} alt="Web Development" className="service-img" />
              </div>
              <div className="service-text-con">
                <h3>Game Development</h3>
                <p>I have good skills in game development, mainly focusing on browser game applications.</p>
              </div>
            </li>
            </Fade>
            <Fade left>
            <li>
              <div className="service-img-con">
                <img src={img4} alt="Web Development" className="service-img" />
              </div>
              <div className="service-text-con">
                <h3>UI/UX Design</h3>
                <p>A good developer is a good designer, flexibility means more opportunities. I have elegant skills in UI/UX design.</p>
              </div>
            </li>
            </Fade>
          </ul>
        </div>
        <section className="s-t-con">
          <div className='skils-con'>
            <div className='s-t-heading-con'>
              <h2>&#11088; Technologies</h2>
            </div>
              <Fade left>
            <div className='s-t-text-con'>
            <ul>
              <li>JavaScript</li>
              <li>React/Redux</li>
              <li>TypeScript</li>
              <li>BootStrap</li>
              <li>Ruby</li>
              <li>Ruby On Rails</li>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>Jest Testing Library</li>
              <li>React-Testing-Library</li>
            </ul>
            <ul>
              <li>PostgreSql</li>
              <li>MySql</li>
              <li>Webpack</li>
              <li>GitHub / Git / GitFlow</li>
              <li>Test Driven Development</li>
              <li>Heruko and Netlify Deployment</li>
            </ul>
            </div>
            </Fade>
          </div>
          <div className='technologies-con'>
            <div className='s-t-heading-con'>
              <h2>&#11088; Skills</h2>
            </div>
              <Fade left>
            <div className='s-t-text-con'>
            <ul>
              <li>Communication</li>
              <li>Collaboration</li>
              <li>Teamwork</li>
              <li>Problem Solving</li>
              <li>Algorithms</li>
              <li>Data Structures</li>
              <li>Strong English ( Written and Verbal )</li>
              <li>Emotional Intelligence</li>
              <li>Strong Work Ethic</li>
              <li>Professionalism</li>
            </ul>
            </div>
            </Fade>
          </div>
        </section>
    </div>
  );
}

export default Services;