import ReactPaginate from "react-paginate";
import React, { FC, ReactNode, useState } from "react";
import { useSearchStore } from "../store/SearchStore";
import { Card } from "./Card";
import { CardContainer } from "./CardContainer";
import { Form } from "./Form";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { usePagination } from "../utils/hooks/usePagination";
import Pagination from "./Pagination";

export interface MainContainer {
  children: ReactNode;
  currentPage:any[];
  totalCount:number;
  siblingCount:number;
}

class User extends React.Component {
  constructor() {
    super({ props: { name: "hello world" } });
    this.state = {};
  }

  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

export const MainContainer: FC<MainContainer> = (props) => {
  const { apiData,paginatedApiData } = useSearchStore();
  const formatDate = (date: string) => new Date(date).toLocaleDateString();
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
        {JSON.stringify(paginatedApiData)}
        <User />
        <CardContainer>
          {apiData?.collection.items.map((item) => {
            return item.data.map((value) => {
              return (
                <Card {...value} key={Math.floor(Math.random() * 32 ** 2)} />
              );
            });
          })}
          
        </CardContainer>
        <Pagination  currentPage={1} onPageChange={} />
      </main>
    </>
  );
};
