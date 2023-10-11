import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { Genre, useGenres } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/images-url";
interface props {
  onSelectGenre: (genre: Genre) => void;
}
const GenresList = ({ onSelectGenre }: props) => {
  const { data, isLoading } = useGenres();
  const genres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <List>
      {isLoading
        ? genres.map((item) => (
            <ListItem paddingY="5px" key={item}>
              <HStack>
                <Skeleton boxSize="32px" borderRadius={8} />
                <SkeletonText width="50px" fontSize="lg" />
              </HStack>
            </ListItem>
          ))
        : data.map((item) => (
            <ListItem paddingY="5px" key={item.id}>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(item.image_background)}
                />
                <Button
                  onClick={() => onSelectGenre(item)}
                  fontSize="lg"
                  variant="link"
                >
                  {item.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};

export default GenresList;
