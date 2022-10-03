import React from "react";
import { BiBuildings } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { MdElectricalServices } from "react-icons/md";
import { MdArchitecture } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
const Services = () => {
  return (
    <div>
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
    </div>
  );
};

export default Services;
