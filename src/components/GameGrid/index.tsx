import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../../hooks/useGames";
import GameCard from "../GameCard";
import SkeletonGameCard from "../SkeletonGameCard";
import GameCardContainer from "../GameCardContainer";
import { Genre } from "../../hooks/useGenres";
interface props {
  selectedGenre: Genre | null;
}
const GameGrid = ({ selectedGenre }: props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
      >
        {isLoading
          ? Skeletons.map((item) => (
              <GameCardContainer key={item}>
                <SkeletonGameCard />
              </GameCardContainer>
            ))
          : data.map((item) => {
              return (
                <GameCardContainer key={item.id}>
                  <GameCard game={item} />
                </GameCardContainer>
              );
            })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
