import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import { useState } from "react"; 

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
    ];
    <Skills skills={skills} />
    const education = [
      {
      year: "2028",
      program: "College",
      school: "USTP - CDO Campus"
      },
      {
      year: "2024",
      program: "Senior High School",
      school: "Gusa Regional Science High School - X"
      },
      {
        year: "2022",
        program: "High School",
        school: "Philippine Southfield School"
        },
        {
        year: "2018",
        program: "Elementary",
        school: "Golden Cedar Christian Academy"
        },
        {
          year: "2012",
          program: "Kindergarten",
          school: "Golden Cedar Christian Academy"
          }
      ];
      
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Header />
      <About />
      <Skills skills={skills}/>
      <Education education={education} /> 
      <Contact />
    </div>
  );
}

export default App;

