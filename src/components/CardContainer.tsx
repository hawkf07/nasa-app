import { FC, HTMLAttributes, ReactNode } from "react";

export interface CardContainerType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardContainer: FC<CardContainerType> = ({ children, ...rest }) => {
  return (
    <div className="grid gap-5  min-w-full w-full  " {...rest}>
      {children}
    </div>
  );
};
