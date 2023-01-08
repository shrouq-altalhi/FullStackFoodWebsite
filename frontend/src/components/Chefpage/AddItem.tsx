import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import ModelItem from "./ModelItem";
import { useEffect, useState } from "react";

const AddItem = () => {
  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const request = await fetch("/api/v1/item", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const data = await request.json();
    console.log(data);

    setItem(data);
  };
  useEffect(() => {
    fetchItem();
  }, []);
  return (
    <Box bg="white">
      <ModelItem />
      {item.map((item: any) => (
        <Box key={item.id}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            borderColor="#788A5C"
            color="black"
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
                    {item.title}
                  </Heading>
                </Flex>
                {/* </HStack> */}
                <Heading size="md" fontFamily="Xanh Mono">
                  {item.price}
                </Heading>
                <Text py="2" fontFamily="Xanh Mono">
                  {item.description}
                </Text>
              </CardBody>

              <CardFooter fontFamily="Xanh Mono">
                <Text>City: {item.city} </Text>
                <Flex justifyContent="flex-end" w="70%">
                  <Button mr="10" bg="gray.200">
                    Update
                  </Button>
                  <Button bg="red.600">Delete</Button>
                </Flex>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default AddItem;
