import { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./sections/About";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const [title, setTitle] = useState("Adrian Tut - Web & Software Development");

  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header setTitle={setTitle} />
      <Home setTitle={setTitle} />
      <About setTitle={setTitle} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
