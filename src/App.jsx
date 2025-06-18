import { BrowserRouter as Router } from 'react-router-dom';
import {  About, Contact, Footer, Header, Hero, Projects, Certifications, Skills} from "./components";

const App = () => {
  return (
    <Router>
      <div className="bg-primary text-white">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;