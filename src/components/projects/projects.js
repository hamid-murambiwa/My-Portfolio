import Modal from '../modal/modal.js';
import '../../style/projects.css';

const projects = [
  {
    name: 'Conference page',
    description: 'This is a conference page for a beer company, that has a home and an about me page. The page announces the next beer conference hosted by the company. Javascript, CSS, and HTML were used for this project.',
    live: 'https://splendorous-granita-62d939.netlify.app',
    github: 'https://github.com/hamid-murambiwa/JavaScript-capstone-project---Conference-page',
    image: 'https://raw.githubusercontent.com/hamid-murambiwa/home-page-image/master/home-page.png',
    tags: ['HTML', 'CSS', 'Javascript', 'NPM'],
    key: 0,
  },
  {
    name: 'Recipe App',
    description: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
    live: 'https://awe-recipe-app.herokuapp.com/',
    github: 'https://github.com/hamid-murambiwa/Recipe-app',
    image: 'https://user-images.githubusercontent.com/71644515/158960785-73a0f514-01fa-4e3d-a2d4-b1d9202b70da.png',
    tags: ['Ruby on rails', 'Postgresql', 'CSS', 'Ruby'],
    key: 1,
  },
  {
    name: 'Math magicians Project',
    description: 'Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote. Javascript, React, CSS, and HTML were used for this project.',
    live: 'https://mm-calculator.herokuapp.com/',
    github: 'https://github.com/hamid-murambiwa/Magic-Calculator',
    image: 'https://raw.githubusercontent.com/hamid-murambiwa/Calculator-Img/main/Screenshot%202021-12-01%20at%2010.31.09.png',
    tags: ['React', 'CSS', 'Javascript', 'HTML'],
    key: 2,
  },
  {
    name: 'Space Hub',
    description: "A SpaceX missions and rockets web application made with React, Redux and APIs. This project was created by Hamid Murambiwa and Karel van Oordt for Microverse's module 3.",
    live: 'https://spacehub-karel-hamid.herokuapp.com/',
    github: 'https://github.com/karelvanoordt/Rockets-GP',
    image: 'https://raw.githubusercontent.com/karelvanoordt/Rockets-GP/dev/space-1.png',
    tags: ['Webpack', 'CSS', 'Javascript', 'HTML'],
    key: 3,
  },
  {
    name: 'Metrics web app',
    description: 'This is a mobile web application to check a list of metrics (numeric values) and is built using React and Redux. Data is fetched from the TheDogApi, displayed and filtered on two pages. The web app has a home page and a details page.',
    live: 'https://622d9a1334cc7f237fa38cbe--confident-babbage-e8362d.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/Metrics-web-app',
    image: 'https://user-images.githubusercontent.com/71644515/147221304-37df1997-d2eb-4076-be5e-5dbdbb957654.png',
    tags: ['React', 'Redux', 'CSS', 'Javascript'],
    key: 4,
  },
  {
    name: 'Chez Restaurant',
    description: 'This project Chez Programmeur Restaurant is a Restaurant website (SPA) that allows users to add comments, likes and reserve. This project is part of the Microverse curriculum Module 2 Block 5 Capstone Week. The main objective is about building your own web application based on an external API. You will select an API that provides data about a topic that you like and then build the webapp around it.',
    live: 'https://sja-capstone-chezprogrammer.netlify.app/',
    github: 'https://github.com/sja-thedude/Capstone-2-Group-Project',
    image: 'https://raw.githubusercontent.com/sja-thedude/Capstone-2-Group-Project/dev/app_screenshot1.png',
    tags: ['Webpack', 'CSS', 'Javascript', 'HTML'],
    key: 5,
  },
];

function Projects() {
  return (
    <div id='y' className="projects-con">
      <div className="heading-con">
        <h1>Projects</h1>
      </div>
      <section className="projects-section">
        <ul>
        {projects.map(project => (
          <li style={{backgroundImage: `url(${project.image})`}}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            <Modal project={project}/>
          </li>
          
        ))}
        </ul>
        </section>
    </div>
  );
}

export default Projects;