import {
  Card,
  Image,
  Stack,
  CardBody,
  Text,
  Flex,
  Heading,
  ButtonGroup,
  Tooltip,
  Modal,
  CardFooter,
  Box,
} from "@chakra-ui/react";
import React from "react";

const Cards = () => {
  return (
    <div>
      <Box>
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
            maxW={{ base: "100%", sm: "22%" }}
            src="https://veggiecurean.com/wp-content/uploads/2019/04/Fig-Cake-1.jpg"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              {/* <HStack spacing="150"> */}
              <Flex justifyContent="space-between">
                <Heading size="md" fontFamily="Xanh Mono">
                  hi
                </Heading>

                {/*--------------------------------------------------------------------- end  modal for update item  */}
              </Flex>
              {/* </HStack> */}
              <Heading size="md" fontFamily="Xanh Mono"></Heading>
              <Text py="2" fontFamily="Xanh Mono">
                dfghjkl;''
              </Text>
            </CardBody>

            <CardFooter>
              <Text fontFamily="Xanh Mono">dfghjk </Text>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
    </div>
  );
};

export default Cards;
