import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import { projectsData } from "../data/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {
          projectsData.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
