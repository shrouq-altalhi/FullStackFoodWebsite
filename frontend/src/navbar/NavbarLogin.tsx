import { Flex, Text, VStack } from "@chakra-ui/react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <Box bg="#788A5C" borderTopRadius="2xl" h="4vh" textAlign="center"> */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bg="#788A5C"
        borderTopRadius="3xl"
        h="5vh"
      >
        <VStack>
          <Text color="white" fontFamily="Faustina" p="3" ml="800">
            {" "}
            Good Food .. Good Mood
          </Text>
        </VStack>
        <VStack m="2">
          <Link to="/login">
            <BiLogInCircle size="30" color="white" />
          </Link>
        </VStack>
      </Flex>
      {/* </Box> */}
    </>
  );
};

export default Navbar;
