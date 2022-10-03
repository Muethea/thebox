import React from "react";
import service from "../layout/imgs/Vector.png";
import design from "../layout/imgs/Vector2.png";
import imgAbout from "../layout/imgs/about.png";
import project1 from "../layout/imgs/project1.png";
import project2 from "../layout/imgs/project2.png";
import project3 from "../layout/imgs/project3.png";
import project4 from "../layout/imgs/project4.png";
import { BiBuildings } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { MdElectricalServices } from "react-icons/md";
import { MdArchitecture } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiOutlineColumnHeight } from "react-icons/ai";

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
              <i>
                {" "}
                <BiBuildings />
              </i>
              <hr className="linha" />
              <h2>Construction</h2>
            </div>
            <div className="card back">
              <i>
                {" "}
                <BsArrowLeftRight />
              </i>

              <hr className="linha" />
              <h2>Renovation</h2>
            </div>
            <div className="card font">
              <i>
                {" "}
                <FaHandshake />
              </i>

              <hr className="linha" />
              <h2>Consultation</h2>
            </div>
          </div>
          <div className="cards2 container">
            <div className="card  back">
              <i>
                {" "}
                <BiBriefcase />
              </i>

              <hr className="linha" />
              <h2>Repair Services</h2>
            </div>
            <div className="card font">
              <i>
                {" "}
                <MdArchitecture />
              </i>
              <hr className="linha" />
              <h2>Architecture</h2>
            </div>
            <div className="card back">
              <i>
                {" "}
                <MdElectricalServices />
              </i>
              <hr className="linha" />
              <h2>Electric</h2>
            </div>
          </div>
        </section>

        <section className="experience ">
          <div className="cardsexperience">
            <div className="experience1 container">
              <div className="card ">
                <h2>123</h2>
                <p className="arrow">
                  <i>
                    <AiOutlineColumnHeight />
                  </i>
                  Projects Completed
                </p>
              </div>
              <div className="card card2">
                <h2>84</h2>
                <p className="arrow">
                  <i>
                    <AiOutlineColumnHeight />
                  </i>
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="experience2 container">
              <div className="card  ">
                <h2>30</h2>
                <p className="arrow">
                  <i>
                    {" "}
                    <AiOutlineColumnHeight />
                  </i>
                  Years in Business
                </p>
              </div>
              <div className="card ">
                <h2>37</h2>
                <p className="arrow">
                  <i>
                    {" "}
                    <AiOutlineColumnHeight />
                  </i>{" "}
                  Awards Win
                </p>
              </div>
            </div>
          </div>

          <div className="infoexperience">
            <h1>30 Years Experience</h1>
            <p>
              Our company has been the leading provided construction services to
              clients throughout the USA since 1988.
            </p>
            <button>Contact Us</button>
          </div>
        </section>

        <section className="section3">
          <div className="info container">
            <div>
              <h2>Free consultation with exceptional quality</h2>
            </div>
            <div className="btn">
              <button>Get your consultation</button>
            </div>
          </div>
        </section>
        <section className="section4">
          <div className="projects container">
            <div className="inf">
              <h2>Projects</h2>
              <div className="linkproject">
                <button>
                  {" "}
                  <a href="all" className="all">
                    All
                  </a>
                </button>
                <button>
                  {" "}
                  <a href="comercial" className="inative">
                    {" "}
                    Commercial
                  </a>
                </button>
                <button>
                  {" "}
                  <a href="residential" className="inative">
                    {" "}
                    Residential
                  </a>
                </button>
                <button>
                  {" "}
                  <a href="other" className="inative">
                    {" "}
                    Other
                  </a>
                </button>
              </div>
            </div>

            <div className="projects">
              <div className="project12">
                <div className="projects1">
                  <img src={project1} alt="" />
                </div>
                <div className="projects2">
                  <img src={project2} alt="" />
                </div>
              </div>
              <div className="project">
                <div className="projects3">
                  <img src={project3} alt="" />
                </div>
                <div className="projects4">
                  <img src={project4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services ">
          <h1>What can us do for you?</h1>
          <p>
            We are ready to work on a project of any complexity, whether it’s
            commercial or residential.
          </p>

          <div className="form">
            <form action="#" method="post">
              <div className="names">
                <input
                  className="inpt"
                  type="text"
                  name="txtname"
                  id=""
                  placeholder="Your Name*"
                />
                <input
                  className="inpt"
                  type="email"
                  name="txtemail"
                  id=""
                  placeholder="Email*"
                />
              </div>
              <div className="reasonNumber">
                <input
                  className="inpt"
                  type="text"
                  name="txtcontact"
                  id=""
                  placeholder="Reason for Contacting*"
                />
                <input
                  className="inpt"
                  type="number"
                  name="txtnumber"
                  id=""
                  placeholder="Phone"
                />
              </div>
              <div className="area">
                <textarea
                  name=""
                  id=""
                  cols="72"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>

              <input className="btnsub" type="submit" value="Submit" />
            </form>
          </div>
        </section>
        <section className="section5 ">
          <h1>What can us do for you?</h1>
          <p>
          
          </p>

          <div className="form"></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
