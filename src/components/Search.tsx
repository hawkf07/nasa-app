import { useState } from "react";
import { useSearchStore } from "../store/SearchStore";
export interface Search {
  name: string;
}

export const SearchInput = () => {
  const { inputValue, setInputValue } = useSearchStore();

  return (
    <div>
      <input
        value={inputValue}
        onChange={setInputValue}
        className="mobile:p-1 dark:text-gray-800  rounded-md dark:bg-gray-400"
      />
    </div>
  );
};
