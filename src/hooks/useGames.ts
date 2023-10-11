
import { useState, useEffect } from "react";
import apiClient from "../services/api-client"
import {CanceledError} from "axios";
export interface platform{
  id: number;
  name: string;
  slug: string;
}
export interface Game {
    platforms: any;
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:platform}[];
    metacritic: number;
  }
  
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }
export const useGames = () => {
     
        const [games, setGames] = useState<Game[]>([]);
        const [error, setError] = useState("");
        const[isLoading,setLoading] = useState(false);
        useEffect(() => {
            const constroller = new AbortController();
            setLoading(true);
          apiClient
            .get<FetchGameResponse>("/games",{signal: constroller.signal})
            .then((res) => {setGames(res.data.results);
            setLoading(false);})
            .catch((err) =>{
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })

            return ()=>constroller.abort();
},[])
return{games, error, isLoading}}