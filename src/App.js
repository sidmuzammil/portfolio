import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import "./App.css"
import {BrowserRouter as Router , Routes, Route,Link} from "react"


function App() {
  return (
    <div className="App">
    <Navbar/>
    <section><Intro/></section>
    <section><Skills/></section>
    <section><Works/></section>
    <section><Contact/></section>
    <Footer/>
    </div>
  );
}

export default App;
