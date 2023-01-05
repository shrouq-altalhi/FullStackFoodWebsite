import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bg="#788A5C"
        borderTopRadius="3xl"
        h="4vh"
      >
        <VStack m="8">
          <IoMdArrowBack color="white" size={30} />
        </VStack>
        <VStack m="8">
          <BiHomeAlt color="white" size={30} />
        </VStack>
      </Flex>
    </>
  );
};

export default HomeNavbar;
