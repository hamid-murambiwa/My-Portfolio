import Header from './header/header';
import Services from './services/services';
import About from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';

function AppContainer() {
    return (
        <div>
          <Header />
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
    );
}

export default AppContainer;