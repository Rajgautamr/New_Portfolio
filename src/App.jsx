import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Contact from './components/contact us/Contact';
import reportWebVitals from './reportWebVitals'; 
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>

  );
}

export default App;
