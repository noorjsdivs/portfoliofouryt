import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import { skilldata } from "../data/data";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        {
          skilldata.map((item)=>(
            <SkillsInput key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  );
};

export default Skills;
