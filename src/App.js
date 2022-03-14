import { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.scss";
import Header from "./Header";
import About from "./Sections/About";
import Home from "./Sections/Home";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";

function App() {
  const [title, setTitle] = useState("Adrian Tut - Web & Software Development");

  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header setTitle={setTitle} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
