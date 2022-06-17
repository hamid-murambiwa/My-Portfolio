import Fade from 'react-reveal/Fade';
import img from '../../style/images/1_zqL9ycu7ZyXAQdlA7Y5lpg.jpeg';
import img2 from '../../style/images/1_XqGNOhP-zBMFdDsQu8j-4A.png';
import '../../style/publication.css';

function Publication() {
  return (
    <div id="publications" className="publication-con">
      <div className="heading-con">
        <h1>Publications</h1>
      </div>
      <div className="publication-card-con">
      <Fade left>
        <a href='https://medium.com/@machipisajunior/the-dos-and-don-ts-of-procrastination-6654446abdfa' className="card">
          <div className="card-img-con">
            <img src={img} alt="publication" className="card-img" />
          </div>
          <div className="card-text">
            <h2>The DO’s and DON’Ts of procrastination</h2>
            <p>When you procrastinate, you waste time that you could be investing in something meaningful. If you can overcome this fierce enemy, you will be able to accomplish more and in doing so better utilize the potential that life has to offer</p>
          </div>
        </a>
        </Fade>
        <Fade left>
        <a href='https://medium.com/@machipisajunior/my-experience-with-software-development-so-far-the-ups-and-downs-of-software-development-36f7220170aa' className="card">
          <div className="card-img-con">
            <img src={img2} alt="publication" className="card-img" />
          </div>
          <div className="card-text">
            <h2>My experience with software development so far. The ups and downs of software development.</h2>
            <p>The one thing software development has improved is my reading skills. Reading and problem-solving are the main activities in learning software development and at first, I had a hard time keeping up but I am slowly improving.</p>
          </div>
        </a>
        </Fade>
      </div>
    </div>
  );
}

export default Publication;