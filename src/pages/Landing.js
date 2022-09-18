import React from "react";

import Header from "../global/Header";

import Hero from '../assets/hero.webp'


function Landing() {
  return (
    <>
      <Header />
      <div className="main-section">
        <div>
          <h1>Trello helps teams move work forward.</h1>
          <p>
            Collaborate, manage projects, and reach new productivity peaks. From
            high rises to the home office, the way your team works is
            unique—accomplish it all with Trello.
          </p>
        </div>
        <div>
          <img src={Hero} alt="hero-main" className="hero-main-image" />
        </div>
      </div>
      <RegisterInput />
    </>
  );
}

export default Landing;
