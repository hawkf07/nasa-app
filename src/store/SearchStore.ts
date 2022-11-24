import React, { ChangeEvent, EventHandler } from "react";
import create from "zustand";
interface useSearchStoreType {
  inputValue: string;
  setInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  fetchNasaApi: (q: string) => Promise<void>;
  apiData: any[];
  setClearInputValue: () => void;
  inputIsFocus: boolean;
  setInputIsFocus: (val: boolean) => void;
}
export const useSearchStore = create<useSearchStoreType>((set, get) => ({
  inputValue: "",
  inputIsFocus: false,
  setInputIsFocus: (val: boolean) => set({ inputIsFocus: val }),
  apiData: [],
  setInputValue(e: ChangeEvent<HTMLInputElement>) {
    const { inputValue } = get();
    console.log(inputValue);
    return set({ inputValue: e.target.value });
  },
  fetchNasaApi: async (q: string) => {
    const { inputValue } = get();
    try {
      if (q.length !== 0) {
        const response = await fetch(
          `https://images-api.nasa.gov/search?q=${q}`
        );
        const data = await response.json();
        console.log(data);
        return set({ apiData: data });
      }
    } catch (error) {
      console.log(error);
    }
  },
  setClearInputValue: () => set({ inputValue: "" }),
}));
