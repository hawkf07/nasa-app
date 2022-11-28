import { FC, HTMLAttributes, ReactNode } from "react";

export interface CardContainerType extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode
}

export const CardContainer : FC<CardContainerType> = ({children,...rest}) => {

  return (
    <div className="grid mobile:grid-cols-2 tablet:grid-cols-3 lg:grid-cols-4 gap-5" {...rest}>
      {children}
    </div>
  )
}