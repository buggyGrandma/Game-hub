import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
  
  interface FetchResponse<T> {
    count: number;
    results: T[];
  }
export const useData = <T>(endpoint:string) => {
     
    const [data, setdata] = useState<T[]>([]);
    const [error, setError] = useState("");
    const[isLoading,setLoading] = useState(false);
    useEffect(() => {
        const constroller = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint,{signal: constroller.signal})
        .then((res) => {setdata(res.data.results);
        setLoading(false);})
 .catch((err) =>{
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        })

        return ()=>constroller.abort();
},[])
return{data, error, isLoading}}