import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Rishitha Alla</h1>
        <p>Student | Web Developer | Tech Enthusiast</p>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hi! I'm Rishitha, a passionate web developer and student at KL
            University. I enjoy designing modern, user-friendly websites and
            exploring the latest web technologies.
          </p>
        </section>

        <section id="projects">
          <h2>My Projects</h2>
          <div className="projects">
            <div className="project-card">
              <h3>Weather App</h3>
              <p>
                A responsive app showing real-time weather updates using an API.
              </p>
            </div>
            <div className="project-card">
              <h3>Student Portal</h3>
              <p>
                A dashboard for managing student attendance and grades
                efficiently.
              </p>
            </div>
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>This site itself — built with React, Flexbox, and Grid!</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Rishitha Alla | KL Student Portal Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
