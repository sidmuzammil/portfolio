import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import {BrowserRouter as Router , Routes, Route,Link} from "react"


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Skills/>
    <Works/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
