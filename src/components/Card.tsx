import { FC } from "react";
export interface CardType extends React.HTMLAttributes<HTMLDivElement> {
  center: string;
  title: string;
  nasa_id: string;
  date_created: string;
  keywords: Array<string>;
  media_type: string;
  description: string;
  description_508: string;
  secondary_creator: string;
}
export const Card: FC<CardType> = ({ center,date_created,description,keywords,media_type,title,nasa_id,...rest}) => {
  return (
    <div
      key={nasa_id}
      className="w-full rounded p-5 bg-gray-200/20"
      {...rest}
    >
      <article className="flex flex-col gap-3 place-items-center">
     <header>
        <h1>{title}</h1>
        <p>{center}</p>
      </header>
        <div className="flex flex-col gap-3 place-items-center">
          <p>{date_created}</p>
          <a className="bg-blue-600 w-2/4 rounded py-1  px-3 " href={"something"}>
            Details
          </a>
        </div>
      </article>
    </div>
  );
};
