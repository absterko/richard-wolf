import React from "react";
import Navigation from "./components/Navigation";
import "./App.scss";
import About from "./components/About";
import { Slide, Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
      <Fade cascade>
        <header>
          <Navigation />
        </header>
      </Fade>
      <Slide triggerOnce>
        <main className="content">
          <About />
        </main>
      </Slide>
    </div>
  );
}

export default App;
