import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Work from "./components/Work/work";
import Contact from "./components/Contact/contact";
import './sass/main.scss'
<<<<<<< HEAD
import skillData from "./database/skilldata";
import projectData from "./database/projectdata";
=======
import data from "./database/data";
>>>>>>> origin/main

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
<<<<<<< HEAD
      <Skills data={skillData}/>
      <Work data={projectData}/>
      <Contact/>
=======
      <Skills data={data}/>
      {/*<Work/>*/}
      {/*<Contact/>*/}
>>>>>>> origin/main
    </div>
  );
}

export default App;
