import React from "react";
import Navigation from "./components/Navigation";
import "./App.scss";
import Main from "./components/Main";
import { Slide, Fade } from "react-awesome-reveal";

const App: React.FC = () => {
  return (
    <div className="App">
      <Fade cascade>
        <header>
          <Navigation />
        </header>
      </Fade>
      <Slide triggerOnce>
        <main className="content">
          <Main />
        </main>
      </Slide>
    </div>
  );
};

export default App;
