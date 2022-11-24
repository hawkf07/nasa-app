import { useSearchStore } from "../store/SearchStore";
import { SearchInput } from "./Search";

export const Form = () => {
  const { fetchNasaApi, inputValue } = useSearchStore();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <SearchInput />
      <button className="bg-primary" onClick={() => fetchNasaApi(inputValue)}>
        search
      </button>
    </form>
  );
};
