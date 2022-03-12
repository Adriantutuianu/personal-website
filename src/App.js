import "./App.scss";
import About from "./Sections/About";
import Home from "./Sections/Home";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";

function App() {
  return (
    <div className="App">
      <About />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
