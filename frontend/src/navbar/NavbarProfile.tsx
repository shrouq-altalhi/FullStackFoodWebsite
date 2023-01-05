import { Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <Flex
        bg="#788A5C"
        borderTopRadius="2xl"
        h="5vh"
        textAlign="center"
        justifyContent="space-between"
      >
        <VStack>
          <Text color="white" fontFamily="Faustina" p="3" ml="800">
            Good Food .. Good Mood
          </Text>
        </VStack>
        <VStack  p="2" mr="7">
          <Link to="/profile">
            <CgProfile size="30" />
          </Link>
        </VStack>
      </Flex>
    </>
  );
};

export default Navbar;
