import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre { 
    id: number;
    name: string;
  }
  
  interface FetchGenreResponse {
    count: number;
    results: Genre[];
  }
export const useGenres = () => {
     
    const [genres, setgenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const[isLoading,setLoading] = useState(false);
    useEffect(() => {
        const constroller = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchGenreResponse>("/genres",{signal: constroller.signal})
        .then((res) => {setgenres(res.data.results);
        setLoading(false);})
        .catch((err) =>{
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        })

        return ()=>constroller.abort();
},[])
return{genres, error, isLoading}}