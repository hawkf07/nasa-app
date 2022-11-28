import { FC, ReactNode } from "react";
import { useSearchStore } from "../store/SearchStore";
import { Card } from "./Card";
import { CardContainer } from "./CardContainer";
import { Form } from "./Form";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export interface MainContainer {
  children: ReactNode;
}

export const MainContainer: FC<MainContainer> = ({ children }) => {
  const {apiData} = useSearchStore()
  return (
    <>
      <main className="container p-5 mobile:max-w-sm flex flex-col lg:max-w-xl place-items-center mx-auto mt-10 gap-8">
        <Navbar />
        <Header
          title="A Web App for searching NASA Images API"
          description="Just as the title said this web app can search NASA images api"
        />
        {children}

        <Form  />
        <CardContainer>
          {JSON.stringify(apiData)} 
        </CardContainer>
      </main>
    </>
  );
};
