import img1 from '../../style/images/machine-learning.png';
import img2 from '../../style/images/content.png';
import img3 from '../../style/images/monitor.png';
import img4 from '../../style/images/web-design.png';
import '../../style/services.css';

function Services() {
  return (
    <div className="services-con">
        <div className="heading-con">
          <h1>WHAT I DO</h1>
        </div>
        <div className="services">
          <ul>
            <li>
              <div className="service-img-con">
                <img src={img1} alt="Web Development" className="service-img" />
              </div>
              <div className="service-text-con">
                <h2>Machine Learning</h2>
                <p>I can write algorithms for website development features. I am familiar with hypothesis testing, data modeling, and mathematics.</p>
              </div>
            </li>
            <li>
              <div className="service-img-con">
                <img src={img2} alt="Web Development" className="service-img" />
              </div>
              <div className="service-text-con">
                <h2>Article Writing</h2>
                <p>I write Software Documentation. Have a look at some of my published articles in the featured section.</p>
              </div>
            </li>
            <li>
              <div className="service-img-con">
                <img src={img3} alt="Web Development" className="service-img" />
              </div>
              <div className="service-text-con">
                <h2>Data Analytics</h2>
                <p>I can help you develop web applications. Check out some of my work in the Projects section.</p>
              </div>
            </li>
            <li>
              <div className="service-img-con">
                <img src={img4} alt="Web Development" className="service-img" />
              </div>
              <div className="service-text-con">
                <h2>UI/UX Design</h2>
                <p>A good developer is a good designer, flexibility means more opportunities. I have elegant skills in UI/UX design.</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Services;