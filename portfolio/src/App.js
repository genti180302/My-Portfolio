import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Work from "./components/Work/work";
import Contact from "./components/Contact/contact";
import './sass/main.scss'
import data from "./database/data";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills data={data}/>
      {/*<Work/>*/}
      {/*<Contact/>*/}
    </div>
  );
}

export default App;
