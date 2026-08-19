import { useState, useEffect } from "react";
import { QuestionsContext } from "./QuestionsContext";
import useDebounce from "../hooks/useDebounce";

const URL = "https://api.yeatwork.ru/questions/public-questions?";

export function QuestionsProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [specializationId, setSpecializationId] = useState(null);
  const [skills, setSkills] = useState([]);
  const [complexity, setComplexity] = useState([]);
  const [rating, setRating] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [openFilter, setOpenFilter] = useState(false)

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const [currentData, setCurrentData] = useState({
    data: [],
    total: 0,
    limit: 10,
  });

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("page", currentPage);
    if (specializationId) {
      params.set("specializationId", specializationId);
    }
    if (skills.length > 0) {
      params.set("skills", skills.join(","));
      params.set("skillFilterMode", "ANY");
    }

    if (complexity.length > 0) {
      params.set("complexity", complexity.join(","));
    }

    if (rating.length > 0) {
      params.set("rate", rating.join(","));
    }

    if (debouncedSearchValue.trim()) {
      params.set("titleOrDescription", debouncedSearchValue.trim());
    }

    fetch(`${URL}${params.toString()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => setCurrentData(data))
      .catch((error) => {
        throw new Error(error);
      });
  }, [currentPage, specializationId, skills, complexity, rating, debouncedSearchValue]);

  function handleNextPage() {
    setCurrentPage((prev) => prev + 1);
  }
  function handlePreviousPage() {
    setCurrentPage((prev) => prev - 1);
  }

  function handlePageClick(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <QuestionsContext.Provider
      value={{
        currentData,
        currentPage,
        specializationId,
        skills,
        complexity,
        rating,
        searchValue,
        openFilter,
        setSearchValue,
        setOpenFilter,
        handleNextPage,
        handlePreviousPage,
        handlePageClick,
        setSpecializationId,
        setSkills,
        setComplexity,
        setRating,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}
