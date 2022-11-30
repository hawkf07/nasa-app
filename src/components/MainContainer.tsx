import ReactPaginate from "react-paginate";
import React, { FC, ReactNode, useState } from "react";
import { useSearchStore } from "../store/SearchStore";
import { Card } from "./Card";
import { CardContainer } from "./CardContainer";
import { Form } from "./Form";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Pagination } from "./Pagination";

export interface MainContainer {
  children: ReactNode;
  currentPage: any[];
  totalCount: number;
  siblingCount: number;
}
export const MainContainer: FC<MainContainer> = (props) => {
  const { apiData, paginatedApiData,inputValue } = useSearchStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentData = apiData?.collection.items.slice(
    firstPostIndex,
    lastPostIndex
  );

  return (
    <>
      <main className="container p-5 mobile:max-w-sm flex flex-col lg:max-w-xl place-items-center mx-auto mt-10 gap-8">
        <Navbar />
        <Header
          title="A Web App for searching NASA Images API"
          description="Just as the title said this web app can search NASA images api"
        />
        {props.children}

        <Form />
        <CardContainer>
          {currentData?.length > 0 ? currentData?.map((item) => {
            return item.data.map((value) => {
              return (
                <Card {...value} key={Math.floor(Math.random() * 32 ** 2)} />
              );
            });
          }) : null}
          {currentData?.length === 0 && "There is no data" }
        </CardContainer>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPosts={apiData?.collection.items.length}
          postsPerPage={ postsPerPage}
          setPostsPerPage={setPostsPerPage}
        />
      </main>
    </>
  );
};
