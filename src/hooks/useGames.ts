import { useData } from "./useData";
import { Genre } from "./useGenres";
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
  
  export const useGames = (selectedGenre:Genre|null) => useData<Game>('/games',{params:{genres: selectedGenre?.id}},[selectedGenre?.id])