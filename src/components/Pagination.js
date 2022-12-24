import React from "react";

export const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className='mt-6 mb-6 mx-auto max-w-sm '>
      <ul class='flex items-center -space-x-px'>
        {pageNumbers.map((number) => (
          <li>
            <a
              href='!#'
              onClick={()=>paginate(number)}
              class='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
