
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
  }
  
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }
export const useGames = () => {
    
        const [games, setGames] = useState<Game[]>([]);
        const [error, setError] = useState("");
      
        useEffect(() => {
            const constroller = new AbortController();
            
          apiClient
            .get<FetchGameResponse>("/games",{signal: constroller.signal})
            .then((res) => setGames(res.data.results))
            .catch((err) =>{
                if(err instanceof CanceledError) return;
                setError(err.message);
            })

            return ()=>constroller.abort();
},[])
return{games, error}}