import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";
// import Navbar from './Navbar'
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function PageFood() {
  return (
    <Box>
      {/* <Navbar/> */}
      <Flex mt="5" ml="10" justifyContent="space-around">
        <Text fontFamily="Xanh Mono" fontWeight={"bold"} fontSize="2xl">
          section
        </Text>
        <HStack>
          <Text fontFamily="Xanh Mono" fontWeight={"bold"}>
            City:
          </Text>
          {/* <Menu>
            <MenuButton
              border={"solid"}
              borderWidth="1px"
              pl="5"
              pr="5"
              fontFamily="Xanh Mono"
              borderColor={"#788A5C"}
            >
              Select {<ChevronDownIcon />}
            </MenuButton>
            <MenuList fontFamily="Xanh Mono">
              <MenuItem>Riyhad</MenuItem>
              <MenuItem>Al-muzahimiyah</MenuItem>
              <MenuItem>Al-taife</MenuItem>
              <MenuItem>Al-methnab</MenuItem>
              <MenuItem>Damame</MenuItem>
            </MenuList>
          </Menu> */}
        </HStack>
      </Flex>
      {/* Food Detales ----------------------------------------------------------------------------------------------------------------------- */}
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
              <Button
                size="md"
                height="48px"
                width="150px"
                border="2px"
                borderColor="#788A5C"
                borderRadius="80"
              >
                Cook lover
              </Button>
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
    </Box>
  );
}
