import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
  
  interface FetchResponse<T> {
    count: number;
    results: T[];
  }
export const useData = <T>(endpoint:string,requestConfig?: AxiosRequestConfig,deps?:any[]) => {
     
    const [data, setdata] = useState<T[]>([]);
    const [error, setError] = useState("");
    const[isLoading,setLoading] = useState(false);
    useEffect(() => {
        const constroller = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint,{signal: constroller.signal,...requestConfig})
        .then((res) => {setdata(res.data.results);
        setLoading(false);})
 .catch((err) =>{
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        })

        return ()=>constroller.abort();
},deps?[...deps]:[])
return{data, error, isLoading}}