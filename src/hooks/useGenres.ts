import { useData } from "./useData";

interface Genre { 
    id: number;
    name: string;
  }
  
export const useGenres = () => useData<Genre>('/genres')
     
