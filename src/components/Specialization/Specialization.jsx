import { QuestionsContext } from "../context/QuestionsContext";
import Filter from "../Filter/Filter";
import { useContext} from "react";

const Specialization = () => {
  const { specializationId, setSpecializationId, specialization } = useContext(QuestionsContext)

  const { data } = specialization;


  return <Filter title="Специализация" data={data} setSelectedFilters={setSpecializationId} selectedFilters={specializationId} multiple={false}/>;
};

export default Specialization;
