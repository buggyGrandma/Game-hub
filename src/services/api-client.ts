import axios from "axios";
  
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:"4a893b691c834b47aa5b690fc3b18369"
    }
})