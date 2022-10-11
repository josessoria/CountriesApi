import "../Styles/Paginado.css";

import React, { useState } from "react";

function Pagination({
  CountryPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const [pageNumberLimit /*  setPageNumberLimit */] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // console.log(currentPage)
  // console.log(setCurrentPage)

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / CountryPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleNext() {
    if (currentPage !== pageNumbers.length) {
 
      paginate(currentPage + 1)
    }

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  function handlePrev() {
    if (currentPage !== 1) {

      paginate(currentPage -1 )

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  }

  return (
    <ul className="pagination">
      <button
        className={currentPage !== 1 ? "page__PN" : "arrow__DN"}
        onClick={handlePrev}
        
      >
        🠸
      </button>

      {pageNumbers &&
        pageNumbers.map((page, i) => {
          if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
            return (
              <li key={i} className="pagination_item">
                <span
                  className={currentPage === page ? "page active" : "page"}
                  onClick={() => paginate(page)}
                >
                  {page}
                </span>
              </li>
            );
          } else {
            return null;
          }
        })}
      <button
        className={currentPage !== 25 ? "page__PN" : "arrow__DN"}
        onClick={handleNext}
      >
        🠺
      </button>
    </ul>
  );
}

export default Pagination;
