import arrowLeft from "../../logos and images/Arrow_left_btn.svg";
import arrowRight from "../../logos and images/Arrow_right-btn.svg";
import dots from "../../logos and images/dots.svg";
import { useContext } from "react";
import { QuestionsContext } from "../context/QuestionsContext";
import { getPages } from "../utils/getPages";

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

  const totalPages = Math.ceil(total / limit);
  const pages = getPages(currentPage, totalPages);

  return (
    <div className="pagination">
      <button
        className="pagination_direction-btn button"
        disabled ={currentPage === 1}
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
        disabled ={currentPage === totalPages}
        className="pagination_direction-btn button "
        onClick={handleNextPage}
      >
        <img src={arrowRight} alt="Next button" />
      </button>
    </div>
  );
};

export default Pagination;
