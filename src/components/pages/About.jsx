import React from "react";
import imgAbout from "../layout/imgs/about.png";
const About = () => {
  return (
    <div>
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
            We’ve matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </p>
          <button>More on Our History</button>
        </div>
      </section>
    </div>
  );
};

export default About;
