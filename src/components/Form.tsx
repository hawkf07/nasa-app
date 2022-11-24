import clsx from "clsx";
import { useSearchStore } from "../store/SearchStore";
import { submitHandler } from "../utils/functions/submitHandler";
import { Button } from "./Button";
import { SearchInput } from "./Search";

export const Form = () => {
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
      className={clsx("flex flex-col gap-3")}
      onSubmit={(e) => submitHandler(e)}
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
