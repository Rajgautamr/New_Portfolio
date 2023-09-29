import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Contact from './components/contact us/Contact';
import Skills from './components/skills/Skills';
import Texture from './components/Texture/Texture';
function App() {
  return (
    <div>
      <Texture />
      <Navbar />
      <Hero />
      <Projects />
      <Skills/>
      <Contact />
    </div>

  );
}

export default App;
