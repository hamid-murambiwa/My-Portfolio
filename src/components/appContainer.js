import Header from './header/header';
import Services from './services/services';
import About from './about/about';

function AppContainer() {
    return (
        <div>
          <Header />
          <About />
          <Services />
        </div>
    );
}

export default AppContainer;