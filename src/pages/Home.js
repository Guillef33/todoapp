import React from "react";

import Header from "../global/Header";

import Hero from "../assets/hero.webp";

import RegisterInput from "./RegisterInput";

import "./Home.css";

function Home() {
  return (
    <div className="main-section-container">
      <Header />
      <div className="home-section-container">
        <div className="home-section-title">
          <h1>Trello helps teams move work forward.</h1>
          <p>
            Collaborate, manage projects, and reach new productivity peaks. From
            high rises to the home office, the way your team works is
            unique—accomplish it all with Trello.
          </p>
          <RegisterInput />
        </div>
        <div className="home-section-image">
          <img src={Hero} alt="home-main" className="home-main-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
