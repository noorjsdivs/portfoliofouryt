import React from 'react';
import Title from "./Title";
import { MdWork } from "react-icons/md";
import { experienceData } from '../data/data';
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {experienceData.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
