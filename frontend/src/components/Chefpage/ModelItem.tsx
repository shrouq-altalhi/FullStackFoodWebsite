import {
  Box,
  Flex,
  Image,
  Text,
  ButtonGroup,
  useDisclosure,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  ModalFooter,
  Tooltip,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import Navbar from "../../navbar/Navbar";
import { Link } from "react-router-dom";
import { request } from "https";
const ModelItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");

  const [image, setImage] = useState("");
  const toast = useToast();

  const addNewItem = async () => {
    if (!title && !description && !price && !type && !city) {
      toast({
        title: " all fileds are required ",
        status: "error",
        duration: 3000,
        position: "top",
      });

      return;
    }
    try {
      const request = await fetch("/api/v1/item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title,
          description,
          price,
          city,
          productType: type,
          image,
        }),
      });
      const data = await request.json();
      if (request.status !== 201) {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          position: "top",
        });
        return;
      }

      setTitle("");
      setDescription("");
      setPrice("");
      onClose();
    } catch (error) {
      toast({
        title: " Server error!",
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
  };
  return (
    <Box >
      <Navbar />
      {/* ----------------------------------------Main flex */}
      <Flex mt="2%" justifyContent="flex-start">
        <Image src="ChfeLogo.png" w="200" h="200" />
        {/* ----------------------------------------------- */}
        <Flex
          mt="30"
          width="30%"
          height="50%"
          fontFamily="Xanh Mono"
          fontSize="2xl"
          borderWidth="1px"
          borderRadius="100"
          backgroundColor="#CEDABA"
          justify="space-around"
        >
          <Text mt="5" mb="5">
            Welcome Cook lover
          </Text>
        </Flex>
        {/* ----------------------------------------------- */}

        {/* --------------------------------------Icons + Model  */}

        <ButtonGroup ml="45%" mt="50">
          <IconButton
            bgColor="#788A5C"
            colorScheme="#CEDABA"
            aria-label="Add new Post "
            onClick={onOpen}
            icon={<IoIosAddCircle color="white" />}
          />
          <Modal
            // initialFocusRef={initialRef}
            // finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <Box>
              <ModalOverlay />
              <ModalContent bg="white" color="black">
                <ModalHeader paddingRight={180}> Add new item</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl borderColor="black">
                    <FormLabel>Prodect Name</FormLabel>
                    <Input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Add title for your item"
                    />
                    <FormLabel>Prodect Description</FormLabel>
                    <Input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Add description for your item "
                    />
                    <FormLabel> Price </FormLabel>
                    <Input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Add Price for your item"
                    />
                    <FormLabel>City</FormLabel>
                    <Input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Add description for your item "
                    />
                  </FormControl>

                  <Box paddingTop={5}>
                    Type
                    <Select
                      w="30"
                      placeholder="select"
                      borderColor="black"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      {/* <Button>x</Button> */}
                      <option value="MainDishe"> MainDishe</option>
                      <option value="Entrees">Entrees</option>
                      <option value="Traditional">Traditional</option>
                      <option value="Dessert">Dessert</option>
                      <option value="Drink">Drink</option>
                      <option value="Healthy">Healthy</option>
                    </Select>
                  </Box>
                  <Box paddingTop="10">
                    <FormLabel> Add image for</FormLabel>
                    <Input
                      id="fileupload"
                      type="file"
                      name="image"
                      placeholder="Image"
                      borderColor="black"
                      pointerEvents="none"
                      // value={image}
                      // onChange={(e) => setImage(e.target.value)}
                    />
                  </Box>
                </ModalBody>

                <ModalFooter>
                  <Button
                    marginRight="30%"
                    bgColor={"#788A5C"}
                    paddingRight="10"
                    paddingLeft={"10"}
                    borderRadius="20"
                    color={"white"}
                    _hover={{ bg: "#CEDABA" }}
                    onClick={addNewItem}
                  >
                    Add
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Box>
          </Modal>
          {/* ----------------------------------------Home icon  */}
          <Tooltip hasArrow label="Home">
            <Button variant="ghost">
              <Link to="/item">
                <Icon as={AiFillHome} w={8} h={8} color="#788A5C" />
              </Link>
            </Button>
          </Tooltip>
          {/* ---------------------------------------- */}
        </ButtonGroup>

        {/* --------------------------------------End Model */}
      </Flex>
      {/* ----------------------------------------Finish Main flex */}
    </Box>
  );
};

export default ModelItem;
