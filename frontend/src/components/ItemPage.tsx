import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../navbar/NavbarProfile";

export default function FoodyHome() {
  return (
    <Box bg="white" h="100vh" >
      <Navbar />

      {/* section one */}

      <Grid templateColumns="repeat(5, 1fr)" gap={1} w="100%" h="50">
        <GridItem borderColor="#788A5C" >
          <Image src="Main.png" height="300" width="300" mb="-30" />
          <Button
            fontSize="2xl"
            ml="170"
            mt="-40"
            fontFamily="Xanh Mono"
            // colorScheme="#788A5C"
            textColor="white"
            variant="ghost"
            bg="#788A5C"
            opacity="0.80"
            _hover={{
              background: "#788A5C",
              color: "black",
            }}
          >
            Main dishes
          </Button>
        </GridItem>
        <GridItem w="50%">
          <Stack direction="row-reverse" h="100px" mt="20">
            <Divider orientation="vertical" borderColor="black" />
          </Stack>
        </GridItem>
        <GridItem borderColor="#788A5C">
          <Image src="Entrees.png" height="300" width="300" mb="-30"></Image>
          <Button
            fontSize="2xl"
            ml="170"
            mt="-40"
            fontFamily="Xanh Mono"
            colorScheme="gray"
            textColor="white"
            variant="ghost"
            bg="#788A5C"
            opacity="0.80"
            _hover={{
              background: "#788A5C",
              color: "black",
            }}
          >
            Entrees
          </Button>
        </GridItem>
        <GridItem w="50%">
          <Stack direction="row-reverse" h="100px" mt="20">
            <Divider orientation="vertical" borderColor="black" />
          </Stack>
        </GridItem>
        <GridItem borderColor="#788A5C" mr="20">
          <Image
            src="Traditional.png"
            height="300"
            width="300"
            mb="-30"
          ></Image>
          <Button
            fontSize={"2xl"}
            ml="170"
            mt="-40"
            fontFamily="Xanh Mono"
            colorScheme="gray"
            textColor="white"
            variant="ghost"
            bg="#788A5C"
            opacity="0.80"
            _hover={{
              background: "#788A5C",
              color: "black",
            }}
          >
            Traditional
          </Button>
        </GridItem>
      </Grid>

      {/* _______________________________________________________________________________________________________ */}

      <VStack
        bgImage="cook.png"
        marginTop={200}
        objectFit="fill"
        backgroundSize="cover"
        h="50vh"
        // opacity="0.60"
        w="100%"
        position="relative"
      >
        <Box
          borderRadius="xl"
          opacity="0.80"
          mt="230"
          background="whiteAlpha.500"
          pt="15"
          paddingBottom="15"
          pr="20"
          pl="20"
          fontFamily="Xanh Mono"
          fontSize="2xl"
          borderWidth="1px"
          borderColor="#788A5C"
          bg="whiteAlpha.700"
          textColor="#465234"
          fontWeight={30}
        >
          Food Section
        </Box>
      </VStack>

      {/* ---------------------------------------------------------------------------------------------- */}

      <Grid
        templateColumns="repeat(5, 1fr)"
        alignItems={"center"}
        bg="white"
        h="40vh"
        w="100%"
      >
        <GridItem>
          <Image src="Dessert.png" height="350" width="350" mt="4" />
          <Button
            fontSize="2xl"
            ml="200"
            mt="-220"
            fontFamily="Xanh Mono"
            colorScheme="gray"
            textColor="white"
            variant="ghost"
            bg="#788A5C"
            opacity="0.80"
            _hover={{
              background: "#788A5C",
              color: "black",
            }}
          >
            Dessert
          </Button>
        </GridItem>
        <GridItem w="50%">
          <Stack direction="row-reverse" h="100px" mt="20">
            <Divider orientation="vertical" borderColor="black" />
          </Stack>
        </GridItem>
        <GridItem borderColor="#788A5C">
          <Image src="Dreinks.png" height="250" width="250" mb="-30"></Image>
          <Button
            fontSize="2xl"
            ml="170"
            mt="-50"
            fontFamily="Xanh Mono"
            colorScheme="gray"
            textColor="white"
            variant="ghost"
            bg="#788A5C"
            opacity="0.80"
            _hover={{
              background: "#788A5C",
              color: "black",
            }}
          >
            Dreinks
          </Button>
        </GridItem>
        <GridItem w="50%">
          <Stack direction="row-reverse" h="100px" mt="20">
            <Divider orientation="vertical" borderColor="black" />
          </Stack>
        </GridItem>
        <GridItem borderColor="#788A5C">
          <Image src="Healthy.png" height="250" width="250" mb="-30"></Image>
          <Button
            fontSize={"2xl"}
            ml="170"
            mt="-50"
            fontFamily="Xanh Mono"
            colorScheme="gray"
            textColor="white"
            variant="ghost"
            bg="#788A5C"
            opacity="0.80"
            _hover={{
              background: "#788A5C",
              color: "black",
            }}
          >
            Healthy
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}
