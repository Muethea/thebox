import React from "react";
import service from "../layout/imgs/Vector.png";
import design from "../layout/imgs/Vector2.png";
import imgAbout from "../layout/imgs/about.png";

import "./styles/style.css";

const Home = () => {
  return (
    <div>
      <header id="homeHEader">
        <div className="container">
          <h1>Building things is our mission.</h1>
        </div>
      </header>

      <main>
        <section className="section1">
          <h1>Our Reputation</h1>
          <div className="cards container">
            <div className="card1 card">
              <img src={service} alt="" />
              <h2>Best Services</h2>
              <p>
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </div>
            <div className="card1 card">
              <img src={service} alt="" />
              <h2>Best Teams</h2>
              <p>Cursus semper tellus volutpat aliquet lacus. </p>
            </div>
            <div className="card1 card">
              <img src={design} alt="" />
              <h2>Best Designs</h2>
              <p>Ultricies at ipsum nunc, tristique nam lectus.</p>
            </div>
          </div>
        </section>
        <section className="section2 ">
          <div className="img">
            <img src={imgAbout} alt="" />
          </div>
          <div className="cardAbout">
            <h1>About us</h1>
            <p>
              For more than 30 years we have been delivering world-class
              construction and we’ve built many lasting relationships along the
              way.
            </p>
            <p>
              {" "}
              We’ve matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S.
            </p>
            <button>More on Our History</button>
          </div>
        </section>
        <section className="services ">
          <h1>Services</h1>

          <div className="cards1 container">
            <div className="card font">
              <hr className="linha" />
              <h2>Construction</h2>
            </div>
            <div className="card back">
              <hr className="linha" />
              <h2>Renovation</h2>
            </div>
            <div className="card font">
              <hr className="linha" />
              <h2>Consultation</h2>
            </div>
          </div>
          <div className="cards2 container">
            <div className="card  back">
              <hr className="linha" />
              <h2>Repair Services</h2>
            </div>
            <div className="card font">
              <hr className="linha" />
              <h2>Architecture</h2>
            </div>
            <div className="card back">
              <hr className="linha" />
              <h2>Electric</h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
