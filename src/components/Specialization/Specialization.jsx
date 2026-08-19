import { QuestionsContext } from "../context/QuestionsContext";
import Filter from "../Filter/Filter";
import { useContext, useEffect, useState } from "react";

const url = "https://api.yeatwork.ru/specializations";

const Specialization = () => {
  const { specializationId, setSpecializationId } = useContext(QuestionsContext)
  const [specialization, setSpecialization] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => setSpecialization(data))
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const { data } = specialization;

  return <Filter title="Специализация" data={data} setSelectedFilters={setSpecializationId} selectedFilters={specializationId} multiple={false}/>;
};

export default Specialization;
