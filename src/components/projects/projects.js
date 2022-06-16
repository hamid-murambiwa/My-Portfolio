import Modal from '../modal/modal.js';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const projects = [
  {
    name: 'Recipe App',
    description: 'The recipe app allows users to view various recipes & prepare good tasty meals.',
    short_d: 'The Recipe app keeps track of all your recipes, ingredients, and inventory.',
    live: 'https://awe-recipe-app.herokuapp.com/',
    github: 'https://github.com/hamid-murambiwa/Recipe-app',
    image: 'https://user-images.githubusercontent.com/71644515/169563249-239f2c2b-89f4-402a-b849-2141fb768766.png',
    tags: ['Ruby on rails', 'Postgresql', 'CSS', 'Ruby'],
    key: 0,
  },
  {
    name: 'Math magicians Project',
    description: 'Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote. Javascript, React, CSS, and HTML were used for this project.',
    short_d: 'Math magicians" is a website for all fans of mathematics.',
    live: 'https://dev--dainty-sunflower-17208d.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/Magic-Calculator',
    image: 'https://user-images.githubusercontent.com/71644515/166466491-1b361f8d-e7a8-4879-a2d9-1712c1cd6a9f.png',
    tags: ['React', 'CSS', 'Javascript', 'HTML'],
    key: 1,
  },
  {
    name: 'IP ADDRESS TRACKER',
    description: "Ip address tracker fetches location data using an ip address then displays the location on an interactive map. It also uses the the user's ip address to fetch and display the user's location on the map.",
    short_d: 'Ip address tracker fetches location data using an ip address',
    live: 'https://development--enchanting-pithivier-4f097c.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/IP-Address-Tracker',
    image: 'https://user-images.githubusercontent.com/71644515/166159411-9953ba4e-5ff7-47af-8111-371e247b08d6.png',
    tags: ['React', 'CSS', 'Javascript', 'HTML'],
    key: 2,
  },
  {
    name: 'Conference page',
    description: 'This is a conference page for a beer company, that has a home and an about me page. The page announces the next beer conference hosted by the company. Javascript, CSS, and HTML were used for this project.',
    short_d: 'This is a conference page for a beer company, that has a home and an about me page.',
    live: 'https://splendorous-granita-62d939.netlify.app',
    github: 'https://github.com/hamid-murambiwa/JavaScript-capstone-project---Conference-page',
    image: 'https://raw.githubusercontent.com/hamid-murambiwa/home-page-image/master/home-page.png',
    tags: ['HTML', 'CSS', 'Javascript', 'NPM'],
    key: 3,
  },
  {
    name: 'Metrics web app',
    description: 'This is a mobile web application to check a list of metrics (numeric values) and is built using React and Redux. Data is fetched from the TheDogApi, displayed and filtered on two pages. The web app has a home page and a details page.',
    short_d: 'This is a mobile web application to check a list of metrics (numeric values) and is built using React and Redux.',
    live: 'https://confident-babbage-e8362d.netlify.app/',
    github: 'https://github.com/hamid-murambiwa/Metrics-web-app',
    image: 'https://user-images.githubusercontent.com/71644515/147221304-37df1997-d2eb-4076-be5e-5dbdbb957654.png',
    tags: ['React', 'Redux', 'CSS', 'Javascript'],
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
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {projects.map(project => (
          <SwiperSlide>
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
          </SwiperSlide>
        ))}
        </Swiper>
        </section>
    </div>
  );
}

export default Projects;