import Modal from '../modal/modal.js';
import '../../style/projects.css';

const projects = [
  {
    name: 'Conference page',
    description: 'This is a conference page for a beer company, that has a home and an about me page. The page announces the next beer conference hosted by the company. Javascript, CSS, and HTML were used for this project.',
    short_d: 'This is a conference page for a beer company, that has a home and an about me page.',
    live: 'https://splendorous-granita-62d939.netlify.app',
    github: 'https://github.com/hamid-murambiwa/JavaScript-capstone-project---Conference-page',
    image: 'https://raw.githubusercontent.com/hamid-murambiwa/home-page-image/master/home-page.png',
    tags: ['HTML', 'CSS', 'Javascript', 'NPM'],
    key: 0,
  },
  {
    name: 'Metrics web app',
    description: 'This is a mobile web application to check a list of metrics (numeric values) and is built using React and Redux. Data is fetched from the TheDogApi, displayed and filtered on two pages. The web app has a home page and a details page.',
    short_d: 'This is a mobile web application to check a list of metrics (numeric values) and is built using React and Redux.',
    live: 'https://622d9a1334cc7f237fa38cbe--confident-babbage-e8362d.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/Metrics-web-app',
    image: 'https://user-images.githubusercontent.com/71644515/147221304-37df1997-d2eb-4076-be5e-5dbdbb957654.png',
    tags: ['React', 'Redux', 'CSS', 'Javascript'],
    key: 1,
  },
  {
    name: 'IP ADDRESS TRACKER',
    description: "Ip address tracker fetches location data using an ip address then displays the location on an interactive map. It also uses the the user's ip address to fetch and display the user's location on the map.",
    short_d: 'Ip address tracker fetches location data using an ip address',
    live: 'https://development--enchanting-pithivier-4f097c.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/IP-Address-Tracker',
    image: 'https://user-images.githubusercontent.com/71644515/166159411-9953ba4e-5ff7-47af-8111-371e247b08d6.png',
    tags: ['Webpack', 'CSS', 'Javascript', 'HTML'],
    key: 2,
  },
  {
    name: 'Recipe App',
    description: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
    short_d: 'The Recipe app keeps track of all your recipes, ingredients, and inventory.',
    live: 'https://awe-recipe-app.herokuapp.com/',
    github: 'https://github.com/hamid-murambiwa/Recipe-app',
    image: 'https://user-images.githubusercontent.com/71644515/158960785-73a0f514-01fa-4e3d-a2d4-b1d9202b70da.png',
    tags: ['Ruby on rails', 'Postgresql', 'CSS', 'Ruby'],
    key: 3,
  },
  {
    name: 'Math magicians Project',
    description: 'Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote. Javascript, React, CSS, and HTML were used for this project.',
    short_d: 'Math magicians" is a website for all fans of mathematics.',
    live: 'https://mm-calculator.herokuapp.com/',
    github: 'https://github.com/hamid-murambiwa/Magic-Calculator',
    image: 'https://raw.githubusercontent.com/hamid-murambiwa/Calculator-Img/main/Screenshot%202021-12-01%20at%2010.31.09.png',
    tags: ['React', 'CSS', 'Javascript', 'HTML'],
    key: 4,
  },
  {
    name: 'Space Hub',
    description: "A SpaceX missions and rockets web application made with React, Redux and APIs. This project was created by Hamid Murambiwa and Karel van Oordt for Microverse's module 3.",
    short_d: 'A SpaceX missions and rockets web application made with React, Redux and APIs.',
    live: 'https://spacehub-karel-hamid.herokuapp.com/',
    github: 'https://github.com/karelvanoordt/Rockets-GP',
    image: 'https://raw.githubusercontent.com/karelvanoordt/Rockets-GP/dev/space-1.png',
    tags: ['Webpack', 'CSS', 'Javascript', 'HTML'],
    key: 5,
  },
];

function Projects() {
  return (
    <div id='projects' className="projects-con">
      <div className="heading-con">
        <h1>Projects</h1>
      </div>
      <section className="projects-section">
        <div className="grid">
        {projects.map(project => (
          <div className="grid-item">
            <div className="card-title">
            <h2>{project.name}</h2>
            </div>
            <div className="proj-img-con">
            <img className="proj-img" src={project.image} alt={project.name} />
            </div>
            <div className="proj-info">
            <p>{project.short_d}</p>
            </div>
            <Modal project={project}/>
          </div>
        ))}
        </div>
        </section>
    </div>
  );
}

export default Projects;