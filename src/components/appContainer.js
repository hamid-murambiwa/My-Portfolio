import Header from './header/header';
import Services from './services/services';
import About from './about/about';
import Projects from './projects/projects';

function AppContainer() {
    return (
        <div>
          <Header />
          <About />
          <Services />
          <Projects />
        </div>
    );
}

export default AppContainer;