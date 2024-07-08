import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Work from "./components/Work/work";
import Contact from "./components/Contact/contact";
import './sass/main.scss'
import skillData from "./database/skilldata";
import projectData from "./database/projectdata";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills data={skillData}/>
      <Work data={projectData}/>
      <Contact/>
    </div>
  );
}

export default App;
