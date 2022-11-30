import React, { ChangeEvent, EventHandler } from "react";
import create from "zustand";
import { apiData } from "../utils/types";


interface useSearchStoreType {

  inputValue: string;
  setInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  fetchNasaApi: (q: string) => Promise<void>;
  apiData: apiData | null;
  setClearInputValue: () => void;
  inputIsFocus: boolean;
  setInputIsFocus: (val: boolean) => void;
  paginateApiData:(array : Array<any>,start_page : number,end_page : number) => void;
  paginatedApiData:Array<any>;
}
export const useSearchStore = create<useSearchStoreType>((set, get) => ({
  inputValue: "",
  inputIsFocus: false,
  setInputIsFocus: (val: boolean) => set({ inputIsFocus: val }),
  apiData: null,
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
  paginateApiData: (array,page_number,page_size) => {
   const {apiData} = get() 
   
   if (apiData !== null) {
    return set({paginatedApiData:array.slice((page_number - 1) * page_size, page_number * page_size)})
   }
  },
  paginatedApiData:[],
}));
