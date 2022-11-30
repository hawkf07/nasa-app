import React, { Dispatch, FC, SetStateAction, useState } from "react";

interface Pagination {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  postsPerPage: number;
  setPostsPerPage: Dispatch<SetStateAction<number>>;
  totalPosts: number;
}

export const Pagination: FC<Pagination> = ({
  currentPage,
  setCurrentPage,
  setPostsPerPage,
  totalPosts,
  postsPerPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap gap-3  ">
      {pages?.map((page, index) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            key={index}
            className="p-2 bg-blue-600 rounded"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
