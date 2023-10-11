import { Box } from "@chakra-ui/react";
import React from "react";
interface props extends React.PropsWithChildren {}

const GameCardContainer = ({ children }: props) => {
  return (
    <Box width="300px" borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
