import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../../hooks/useGames";
import GameCard from "../GameCard";
import SkeletonGameCard from "../SkeletonGameCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
      >
        {isLoading
          ? Skeletons.map((item) => <SkeletonGameCard key={item} />)
          : games.map((item) => {
              return <GameCard key={item.id} game={item} />;
            })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
