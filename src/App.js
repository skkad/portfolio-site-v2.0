import React from "react";
import './App.css';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import ContactBar from "./Component/ContactBar";
import Home from "./Sections/Home/home";
import About from "./Sections/About/about";
import Experience from "./Sections/Experience/experience";
// import Projects from "./Sections/Projects/projects";
import Contact from "./Sections/Contact/contact";
import Skills from "./Sections/Skills/skills";


function App() {
  return (
    <main className="App">
       <Navbar />
      <div className="app_section_container">
        <Home/>
        <About/>
        <Experience />
        {/*<Projects/>*/}
        <Skills/>
        <Contact/>
      </div>
      <ContactBar />
      <Footer /> 
      {/* <Heading index={2} heading="Hello World"/> */}
    </main>
  );
}

export default App;


