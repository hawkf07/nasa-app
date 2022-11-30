import clsx from "clsx";
import { FC, FormHTMLAttributes, HTMLAttributes } from "react";
import { useSearchStore } from "../store/SearchStore";
import { getApiDataFromNasaApiBySearch } from "../utils/api";
import { submitHandler } from "../utils/functions/submitHandler";
import { Button } from "./Button";
import { QueryWrapper } from "./QueryWrapper";
import { SearchInput } from "./Search";

interface Form extends FormHTMLAttributes<HTMLFormElement> {}


export const Form: FC<Form> = ({ ...rest }) => {
  const {
    fetchNasaApi,
    inputValue,
    setInputIsFocus,
    inputIsFocus,
    setClearInputValue,
    setInputValue,
  } = useSearchStore();
  return (
    <form

      className={clsx("flex flex-col gap-3 lg:place-items-center container")} 
      onSubmit={async (e) => {
        submitHandler(e)
        await fetchNasaApi(inputValue)
      }}
      
    >
      <SearchInput
        value={inputValue}
        onChange={setInputValue}
        name={"search input"}
        placeholder="search something awesome!"
        setClearInputValue={setClearInputValue}
        fetchNasaApi={fetchNasaApi}
        inputIsFocus={inputIsFocus}
        setInputIsFocus={setInputIsFocus}
      />
    </form>
  );
};
