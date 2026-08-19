import { useContext } from "react";
import Filter from "../Filter/Filter";
import { QuestionsContext } from "../context/QuestionsContext";

const data = [{title: 1, id: 1}, {title: 2, id: 2}, {title: 3, id: 3}, {title: 4, id: 4}, {title: 5, id: 5}]

const Rating = () => {
  const { rating, setRating } = useContext(QuestionsContext)
  return <Filter title="Рейтинг" data={data} setSelectedFilters={setRating} selectedFilters={rating} />;
};

export default Rating;
