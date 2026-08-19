import { QuestionsContext } from "../context/QuestionsContext";
import Filter from "../Filter/Filter";
import { useContext, useEffect, useState } from "react";

const url = "https://api.yeatwork.ru/skills";

const Skills = () => {
  const { skills, setSkills } = useContext(QuestionsContext)
  const [skillsData, setSkillsData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => setSkillsData(data))
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const { data } = skillsData;

  return <Filter title="Навыки" data={data} setSelectedFilters={setSkills} selectedFilters={skills}/>;
};

export default Skills;
