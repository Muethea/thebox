import React from "react";
import project1 from "../layout/imgs/project1.png";
import project2 from "../layout/imgs/project2.png";
import project3 from "../layout/imgs/project3.png";
import project4 from "../layout/imgs/project4.png";
const Projects = () => {
  return (
    <div>
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
    </div>
  );
};

export default Projects;
