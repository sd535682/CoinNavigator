import React from "react";

function PageButton({ totalPost, pagePerPost, setCurrentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / pagePerPost); i++) {
    pages.push(i);
  }
  return (
    <div className="flex flex-row text-slate-200 justify-center py-4">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className="mx-1 px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-700">
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default PageButton;
