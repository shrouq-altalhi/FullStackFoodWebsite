import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Tooltip,
  Icon,
} from "@chakra-ui/react";

// import Navbar from './Navbar'
import { ChatIcon } from "@chakra-ui/icons";
// import ChatFoody from '../chat/ChatFoody'

export default function ProfileFoodySide() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* ------------------------------------------------------------------------------------------------- */}
      <Flex mt="2%" justifyContent="flex-start">
        <Image src="ChfeLogo.png" w="200" h="200"></Image>

        <Flex
          background="CEDABA"
          width="50%"
          height="100"
          fontFamily="Xanh Mono"
          fontSize="2xl"
          borderWidth="1px"
          borderRadius={"100"}
          backgroundColor="#CEDABA"
          mt="30"
          justify="space-around"
        >
          <Text mt="30">Welcome in Family Cook lover </Text>

          {/* <Button colorScheme="gray"variant='ghost' mt="30"> <Icon as={ChatIcon} w={8} h={8}  /></Button> */}
          {/* <ChatFoody/> */}
        </Flex>
      </Flex>
      {/*Card all item for one user profile  ---------------------------------------------------------------------------------------------------------------------------- */}

      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        borderColor="#788A5C"
        ml="30"
        mr="50"
        mt="10"
      >
        <Image
          border="solid"
          borderColor="#788A5C"
          borderWidth="5px"
          objectFit="cover"
          maxW={{ base: "100%", sm: "250px" }}
          src="https://veggiecurean.com/wp-content/uploads/2019/04/Fig-Cake-1.jpg"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            {/* <HStack spacing="150"> */}
            <Flex justifyContent="space-between">
              <Heading size="md" fontFamily="Xanh Mono">
                The perfect latte
              </Heading>
            </Flex>
            {/* </HStack> */}
            <Heading size="md" fontFamily="Xanh Mono">
              Prise:90{" "}
            </Heading>
            <Text py="2" fontFamily="Xanh Mono">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet.
            </Text>
          </CardBody>

          <CardFooter>
            <Text fontFamily="Xanh Mono">City: Riyadh </Text>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}
