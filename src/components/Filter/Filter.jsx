import "./Filter.css";
import { useContext, useState } from "react";
import figmaIcon from "../../logos and images/Figma.svg";
import { QuestionsContext } from "../context/QuestionsContext";

const Filter = ({
  title,
  data,
  setSelectedFilters,
  selectedFilters,
  multiple = true,
}) => {
  const { handlePageClick } = useContext(QuestionsContext);
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? data : data?.slice(0, 5);

  function handleOnClick({ id, values }) {
    if (!multiple) {
      setSelectedFilters(id);
      handlePageClick(1);

      return;
    }
    const filterValues = values ?? [id];

    setSelectedFilters((prev) => {
      const isSelected = filterValues.every((value) => prev.includes(value));

      return isSelected
        ? prev.filter((item) => !filterValues.includes(item))
        : [...prev, ...filterValues];
    });
  }

  return (
    <div className="filter">
      <span className="filter__type">{title}</span>
      <ul className="filter__list">
        {visibleData?.map((filter) => {
          const isSelected = multiple
            ? filter.values
              ? filter.values.every((value) => selectedFilters.includes(value))
              : selectedFilters?.includes(filter.id)
            : selectedFilters === filter.id;

          return (
            <li key={filter.id ?? filter.title}>
              <button
                aria-pressed={isSelected}
                className={
                  isSelected ? "filter__button selected" : "filter__button"
                }
                onClick={() => handleOnClick(filter)}
              >
                {filter.imageSrc && (
                  <img className="filter__icon" src={figmaIcon} alt="" />
                )}
                <span className="filter__name">{filter.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {data?.length >= 6 && (
        <button
          className="filter__show-all"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Скрыть" : "Посмотреть все"}
        </button>
      )}
    </div>
  );
};

export default Filter;
