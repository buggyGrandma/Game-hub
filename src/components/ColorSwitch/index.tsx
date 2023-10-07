import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Text>Color Mode</Text>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
    </HStack>
  );
};

export default ColorSwitch;
