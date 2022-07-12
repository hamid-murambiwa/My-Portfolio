import Modal from '../modal/modal.js';
import '../../style/projects.css';

const projects = [
  {
    name: 'Strut',
    description: 'A simple app with an online store for furniture items',
    short_d: 'A simple app with an online store for furniture items',
    live: 'https://strutfurniture.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/Strut',
    image: 'https://user-images.githubusercontent.com/71644515/178300073-a102aa44-31a8-4cf1-b0b4-71e9ecd51d4c.png',
    tags: ['Javascript', 'React', 'Ruby on rails', 'Ruby'],
    key: 0,
  },
  {
    name: 'Sailvation app',
    description: 'A web application made with Ruby on Rails + React that allows users to book their favourite cruises and destinations',
    short_d: 'A simple app that allows users to reserve cruise ships to various locations',
    live: 'https://sailvation.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/sailvation-app-frontend',
    image: 'https://user-images.githubusercontent.com/71644515/174386958-c637b8be-a659-45a6-a9ff-f075159c9989.png',
    tags: ['Javascript', 'React', 'Ruby on rails', 'Ruby'],
    key: 1,
  },
  {
    name: 'Recipe App',
    description: 'The recipe app allows users to view various recipes & prepare good tasty meals.',
    short_d: 'The Recipe app keeps track of all your recipes, ingredients, and inventory.',
    live: 'https://awe-recipe-app.herokuapp.com/',
    github: 'https://github.com/hamid-murambiwa/Recipe-app',
    image: 'https://user-images.githubusercontent.com/71644515/169563249-239f2c2b-89f4-402a-b849-2141fb768766.png',
    tags: ['Ruby on rails', 'Postgresql', 'CSS', 'Ruby'],
    key: 2,
  },
  {
    name: 'Math magicians Project',
    description: 'Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote. Javascript, React, CSS, and HTML were used for this project.',
    short_d: 'Math magicians" is a website for all fans of mathematics.',
    live: 'https://maths-magician-app.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/Magic-Calculator',
    image: 'https://user-images.githubusercontent.com/71644515/166466491-1b361f8d-e7a8-4879-a2d9-1712c1cd6a9f.png',
    tags: ['React', 'CSS', 'Javascript', 'HTML'],
    key: 3,
  },
  {
    name: 'IP ADDRESS TRACKER',
    description: "Ip address tracker fetches location data using an ip address then displays the location on an interactive map. It also uses the the user's ip address to fetch and display the user's location on the map.",
    short_d: 'Ip address tracker fetches location data using an ip address',
    live: 'https://ip-address-tracker-application.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/IP-Address-Tracker',
    image: 'https://user-images.githubusercontent.com/71644515/166159411-9953ba4e-5ff7-47af-8111-371e247b08d6.png',
    tags: ['React', 'CSS', 'Javascript', 'HTML'],
    key: 4,
  },
  {
    name: 'Budget App',
    description: 'This is a mobile web application, that allows you to manage your budget. The budget app lists all transactions associated with a category, and this allows the user to see how much money the user has spent.',
    short_d: 'A simple budget app',
    live: 'https://coolest-budget-app.herokuapp.com/',
    github: 'https://github.com/hamid-murambiwa/Budget-App',
    image: 'https://user-images.githubusercontent.com/71644515/171601517-12c276e2-dce2-4a2f-b0de-c7c321e5a552.png',
    tags: ['Ruby on Rails', 'Postgresql', 'Ruby', 'Bootstrap'],
    key: 5,
  },
  {
    name: 'Metrics web app',
    description: 'This is a mobile web application to check a list of metrics (numeric values) and is built using React and Redux. Data is fetched from the TheDogApi, displayed and filtered on two pages. The web app has a home page and a details page.',
    short_d: 'This is a mobile web application to check a list of metrics (numeric values) and is built using React and Redux.',
    live: 'https://dogbreeds-app.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/Metrics-web-app',
    image: 'https://user-images.githubusercontent.com/71644515/147221304-37df1997-d2eb-4076-be5e-5dbdbb957654.png',
    tags: ['React', 'Redux', 'CSS', 'Javascript'],
    key: 6,
  },
  {
    name: 'Conference page',
    description: 'This is a conference page for a beer company, that has a home and an about me page. The page announces the next beer conference hosted by the company. Javascript, CSS, and HTML were used for this project.',
    short_d: 'This is a conference page for a beer company, that has a home and an about me page.',
    live: 'https://conference-page.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/JavaScript-capstone-project---Conference-page',
    image: 'https://raw.githubusercontent.com/hamid-murambiwa/home-page-image/master/home-page.png',
    tags: ['HTML', 'CSS', 'Javascript', 'NPM'],
    key: 7,
  },
  {
    name: 'Space Hub',
    description: "A SpaceX missions and rockets web application made with React, Redux and APIs. This project was created by Hamid Murambiwa and Karel van Oordt for Microverse's module 3.",
    short_d: 'A SpaceX missions and rockets web application made with React, Redux and APIs.',
    live: 'https://spacehub-karel-hamid.herokuapp.com/',
    github: 'https://github.com/karelvanoordt/Rockets-GP',
    image: 'https://raw.githubusercontent.com/karelvanoordt/Rockets-GP/dev/space-1.png',
    tags: ['Webpack', 'CSS', 'Javascript', 'HTML'],
    key: 8,
  },
  {
    name: 'Rock Paper Scissors',
    description: "A simple rock paper scissors game",
    short_d: 'A simple rock paper scissors game',
    live: 'https://development--comfy-empanada-125d36.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/rock-paper-scissors-game',
    image: 'https://user-images.githubusercontent.com/71644515/175320848-7d7d1b0c-2251-4522-aa04-fd653a24420b.png',
    tags: ['React', 'CSS', 'Javascript'],
    key: 9,
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