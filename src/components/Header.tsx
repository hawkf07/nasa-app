import { FC } from "react";

interface Header {
  title: string;
  description: string;
}

export const Header: FC<Header> = ({ title, description }) => {
  return (
    <header className="mobile:prose-sm prose-lg md:prose-md dark:prose-invert">
      <h1 className="text-center ">{title}</h1>
    </header>
  );
};
