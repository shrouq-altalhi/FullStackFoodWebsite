import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";

const SwitchButtonLogin = () => {
  const [isFoody, setIsFoody] = React.useState(false);
  const [isChef, setIsChef] = React.useState(true);

  const handleIsFoodyIsChef = ({ target }: any) => {
    if (target.id === "Foody") {
      setIsFoody(true);
      setIsChef(false);
    }
    if (target.id === "Chef") {
      setIsFoody(false);
      setIsChef(true);
    }
  };

  return (
    <Box>
      <Flex
        w="full"
        borderWidth={1}
        borderColor="gray.200"
        borderRadius={14}
        my={6}
      >
        <Button
          w="full"
          variant={isChef ? "solid" : "ghost"}
          borderRadius={14}
          colorScheme={isChef ? "messenger" : "gray"}
          id="Chef"
          textTransform="uppercase"
          color={isChef ? "black" : "gray.500"}          size="sm"
          py={5}
          onClick={handleIsFoodyIsChef}
        >
          Chef
        </Button>

        <Button
          w="full"
          variant={isFoody ? "solid" : "ghost"}
          borderRadius={14}
          colorScheme={isFoody ? "messenger" : "gray"}
          id="Foody"
          textTransform="uppercase"
          color={isFoody ? "black" : "gray.500"}
          size="sm"
          py={5}
          onClick={handleIsFoodyIsChef}
        >
          Foody
        </Button>
      </Flex>
    </Box>
  );
};

export default SwitchButtonLogin;
