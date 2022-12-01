import clsx from "clsx";
import { FC, HTMLAttributes, InputHTMLAttributes, useState } from "react";
import { useSearchStore } from "../store/SearchStore";
import { Icon } from "@iconify/react";

import xmark from "../assets/circle-xmark-regular.svg";
export interface Search extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  setClearInputValue?: () => void;
  fetchNasaApi: (q: string) => void;
  inputIsFocus: boolean;
  setInputIsFocus: (val: boolean) => void;
}

export const SearchInput: FC<Search> = ({
  name,
  value,
  setClearInputValue,
  fetchNasaApi,
  inputIsFocus,
  setInputIsFocus,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "w-full text-gray-200 rounded-md bg-gray-600/75 flex justify-evenly",
        inputIsFocus ? "outline-1 outline rounded outline-gray-200/80" : ""
      )}
    >
      <input
        onFocus={() => setInputIsFocus(true)}
        onBlur={() => setInputIsFocus(false)}
        className="bg-transparent p-2 focus:outline-none w-[90%]"
        value={value}
        {...rest}
      />
      <button onClick={() => setClearInputValue()} className={clsx("p-2 h-10 w-8",value.length > 0 ? "": "hidden")}>
        <Icon
          icon={"fa6-solid:xmark"}
        />
      </button>
      <button
        className="bg-gray-700  rounded h-10 p-2"
        onClick={() => fetchNasaApi(value)}
        type="submit"
      >
        <Icon icon={"fa:search"} />
      </button>
    </div>
  );
};
