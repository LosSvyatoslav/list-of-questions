import arrowLeft from "../../logos and images/Arrow_left_btn.svg";
import arrowRight from "../../logos and images/Arrow_right-btn.svg";
import dots from "../../logos and images/dots.svg";
import { useContext } from "react";
import { QuestionsContext } from "../context/QuestionsContext";

import "./Pagination.css";

const Pagination = () => {
  const {
    currentData,
    currentPage,
    handlePreviousPage,
    handlePageClick,
    handleNextPage,
  } = useContext(QuestionsContext);
  
  const { total, limit } = currentData;

  function getPages(page, totalPageCount) {
    if (totalPageCount <= 5) {
      return Array.from({ length: totalPageCount }, (_, index) => index + 1);
    }
    if (page <= 5) {
      return [1, 2, 3, 4, 5, 6, dots, totalPageCount];
    }
    if (page >= totalPageCount - 5) {
      return [
        1,
        dots,
        totalPageCount - 5,
        totalPageCount - 4,
        totalPageCount - 3,
        totalPageCount - 2,
        totalPageCount - 1,
        totalPageCount,
      ];
    }
    return [
      1,
      dots,
      page - 3,
      page - 2,
      page - 1,
      page,
      page + 1,
      page + 2,
      dots,
      totalPageCount,
    ];
  }

  const totalPages = Math.ceil(total / limit);
  const pages = getPages(currentPage, totalPages);

  return (
    <div className="pagination">
      <button
        className="pagination_direction-btn button"
        onClick={handlePreviousPage}
      >
        <img src={arrowLeft} alt="Previous button" />
      </button>
      {pages.map((item, index) =>
        item === dots ? (
          <img key={index} src={dots} alt="dots" />
        ) : (
          <button
            key={index}
            className={
              currentPage === item
                ? "pagination__page button active"
                : "pagination__page button"
            }
            onClick={() => handlePageClick(item)}
          >
            {item}
          </button>
        ),
      )}
      <button
        className="pagination_direction-btn button "
        onClick={handleNextPage}
      >
        <img src={arrowRight} alt="Next button" />
      </button>
    </div>
  );
};

export default Pagination;
