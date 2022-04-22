import Header from './header/header';
import Services from './services/services';
import About from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Publication from './publication/publication';
import Footer from './footer/footer';

function AppContainer() {
    return (
        <div>
          <Header />
          <About />
          <Services />
          <Publication />
          <Projects />
          <Contact />
          <Footer />
        </div>
    );
}

export default AppContainer;