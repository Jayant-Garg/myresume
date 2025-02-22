import './App.css';
import Header from './components/header'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from "./components/Projects";
import WorkEx from './components/WorkEx'
import Education from './components/Education'
import Testimonials from './components/Testimonials'
import ContactMe from './components/ContactMe'

function App() {
  return (
    <div className="App">
      {/* hello j */}
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <WorkEx />
      <Education />
      <Testimonials />
      <ContactMe />
      <div className='bg-black py-16'></div>
    </div>
  );
}

export default App;
