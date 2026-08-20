import { QuestionsContext } from "../context/QuestionsContext";
import Filter from "../Filter/Filter";
import { useContext } from "react";



const Skills = () => {
  const { skills, setSkills, skillsData } = useContext(QuestionsContext)

  const { data } = skillsData;

  return <Filter title="Навыки" data={data} setSelectedFilters={setSkills} selectedFilters={skills}/>;
};

export default Skills;
