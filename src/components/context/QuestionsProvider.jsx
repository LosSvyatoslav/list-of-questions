import { useState, useEffect } from "react";
import { QuestionsContext } from "./QuestionsContext";
import useDebounce from "../hooks/useDebounce";

const specializationUrl = "https://api.yeatwork.ru/specializations?limit=30";
const skillsUrl = "https://api.yeatwork.ru/skills?limit=68";
export const questionsUrl =
  "https://api.yeatwork.ru/questions/public-questions";

export function QuestionsProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [specializationId, setSpecializationId] = useState(null);
  const [skills, setSkills] = useState([]);
  const [complexity, setComplexity] = useState([]);
  const [rating, setRating] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [skillsData, setSkillsData] = useState({});
  const [specialization, setSpecialization] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const [currentData, setCurrentData] = useState({
    data: [],
    total: 0,
    limit: 10,
  });

  useEffect(() => {
    setError(null);
    Promise.all([fetch(skillsUrl), fetch(specializationUrl)])
      .then(([skillsResponse, specializationResponse]) => {
        if (!skillsResponse.ok) {
          throw new Error(`Skills: ${skillsResponse.status}`);
        }

        if (!specializationResponse.ok) {
          throw new Error(`Specialization: ${specializationResponse.status}`);
        }

        return Promise.all([
          skillsResponse.json(),
          specializationResponse.json(),
        ]);
      })
      .then(([skillsData, specializationData]) => {
        setSkillsData(skillsData);
        setSpecialization(specializationData);
      })
      .catch((error) => {
        setError(error);
      })
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const params = new URLSearchParams();
    const controller = new AbortController();

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

    fetch(`${questionsUrl}?${params.toString()}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setCurrentData(data);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setError(error);
        }
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [
    currentPage,
    specializationId,
    skills,
    complexity,
    rating,
    debouncedSearchValue,
  ]);

  function handleNextPage() {
    setCurrentPage((prev) => Math.max(prev + 1, 1));
  }
  function handlePreviousPage() {
    setCurrentPage((prev) => Math.min(prev - 1, 1));
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
        skillsData,
        specialization,
        error,
        isLoading,
        setSearchValue,
        setOpenFilter,
        handleNextPage,
        handlePreviousPage,
        handlePageClick,
        setSpecializationId,
        setSkills,
        setComplexity,
        setRating,
        setCurrentPage
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}
