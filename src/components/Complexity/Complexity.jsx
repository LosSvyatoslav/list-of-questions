import { useContext } from "react";
import Filter from "../Filter/Filter";
import { QuestionsContext } from "../context/QuestionsContext";

const data = [{title: "1-3", values: [1, 2, 3]}, {title: "4-6" , values: [4, 5, 6]}, {title: "7-8", values: [7, 8]}, {title: "9-10", values: [9, 10]}]

const Complexity = () => {
  const {complexity, setComplexity } = useContext(QuestionsContext)
  return <Filter title="Уровень сложности" data={data} setSelectedFilters={setComplexity} selectedFilters={complexity} />;
};

export default Complexity;
