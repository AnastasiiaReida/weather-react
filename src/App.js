import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vancuver" />
        <footer>
          This project was coded by Anastasiia Reida and is{" "}
          <a href="https://github.com/AnastasiiaReida/weather" target="_blank">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://639f292757a0d306721b5f21--radiant-gnome-5c3612.netlify.app/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
