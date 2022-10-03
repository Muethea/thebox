import React from "react";

const Services = () => {
  return (
    <div>
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
    </div>
  );
};

export default Services;
