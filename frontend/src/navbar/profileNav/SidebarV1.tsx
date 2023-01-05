import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import ProfileNav from "./ProfileNav";

const SidebarV1 = () => {
  const submiteRegister = async () => {
    const request = await fetch("/api/v1/auth/cheflogin", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await request.json();
    console.log(data);
  };
  return (
    <HStack w="full" h="100vh" bg="" padding={10}>
      <ProfileNav />
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        position="relative"
        borderRadius="3xl"
        boxShadow="0 4px 12px rgba(0,0,0,0.09)"
      >
        <Text fontSize={100} color="gray.300">
          <Button onClick={submiteRegister}>Main</Button>
        </Text>
      </Flex>
    </HStack>
  );
};

export default SidebarV1;
