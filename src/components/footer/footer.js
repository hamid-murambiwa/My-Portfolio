import Fade from 'react-reveal/Fade';
import img from '../../style/images/name.svg';
import img1 from '../../style/images/linkedin.png';
import img2 from '../../style/images/github.png';
import img3 from '../../style/images/twitter.png';
import img4 from '../../style/images/angelist.png';
import '../../style/footer.css';

function Footer() {
  return (
    <div className="footer-con">
      <Fade left>
      <footer className="desk-footer">
      <section className="footer-title-con">
        <div className="title-text">
          <img src={img} alt="My name" className="name-img-2" />
          <h3>Full Stack Developer</h3>
        </div>
      </section>
      <section className="f-t-c-2">
        <div className="Pages">
            <h3>Pages</h3>
            <a href="#header">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#publications">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contact</a>
        </div>
        <div className="loc-info">
          <h3>Contact</h3>
          <p>machipisajunior@gmail.com</p>
          <p>Kempton Park CBD, South Africa</p>
        </div>
        <div className="socials">
          <a href="https://linkedin.com/in/hamid-murambiwa/"><img src={img1} alt="LinkedIn icon" className="social-img" /></a>
          <a href="https://twitter.com/Hamid87789454/"><img src={img3} alt="Twitter icon" className="social-img" /></a>
          <a href="https://angel.co/u/hamid-murambiwa"><img src={img4} alt="Angelist icon" className="social-img" /></a>
          <a href="https://github.com/hamid-murambiwa/"><img src={img2} alt="Github icon" className="social-img" /></a>
        </div>
      </section>
      </footer>
      <div className="copyright">
        <p>Developed by Hamid Murambiwa © copyright 2022.</p>
      </div>
      </Fade>
    </div>
  );
}

export default Footer;