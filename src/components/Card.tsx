import { FC } from "react";

export interface CardType 
  extends React.HTMLAttributes<HTMLDivElement> {
  cardTitle: string;
  cardBody: string;
  cardLink: string;
}
export const Card: FC<CardType> = ({
  cardTitle,
  cardBody,
  cardLink,
  ...rest
}) => {
  return (
    <div {...rest}>
      <header>
        <h1>{cardTitle}</h1>
      </header>
      <article className="">
        <div>
          <p>{cardBody}</p>
          <a href={cardLink}>Details</a>
        </div>
      </article>
    </div>
  );
};
