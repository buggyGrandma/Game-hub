import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useGenres } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/images-url";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((item) => (
        <ListItem paddingY="5px" key={item.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(item.image_background)}
            />
            <Text fontSize="lg">{item.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
