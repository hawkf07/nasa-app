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
    <div className=" ">
      {pages?.map((page, index) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            className="mx-3 p-3 bg-blue-600 "
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
