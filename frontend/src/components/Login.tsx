import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  Heading,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useToast,
} from "@chakra-ui/react";
import Nav from "../navbar/Navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const submiteLoginChef = async () => {
    try {
      const request = await fetch("/api/v1/auth/cheflogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await request.json();
      if (request.status !== 200) {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          position: "top",
        });
        return;
      }
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        position: "top",
      });
      localStorage.setItem("token", data.token);
      navigate("/item");
    } catch (error) {
      toast({
        title: "Server Error!",
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
  };

  const submiteLoginFoody = async () => {
    try {
      const request = await fetch("/api/v1/auth/foodylogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await request.json();
      if (request.status !== 200) {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          position: "top",
        });
        return;
      }
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        position: "top",
      });
      localStorage.setItem("token", data.token);
      navigate("/item");
    } catch (error) {
      toast({
        title: "Server Error!",
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
  };
  return (
    <Box dir="rtl" bg="white">
      <Nav />
      <HStack
        bgImage="img2.png"
        objectFit="fill"
        backgroundSize="cover"
        h="100vh"
        w="100%"
        opacity="0.80"
        position="relative"
      >
        <VStack
          fontFamily="Xanh Mono"
          shadow="2xl"
          mr="40%"
          spacing="1.5rem"
          width="25%"
          h="60vh"
          bg="whiteAlpha.700"
          rounded="3xl"
          boxShadow="2xl"
          textAlign="left"
        >
          <Heading fontFamily="Xanh Mono" mt="10" color="black">
            Welcom Back
          </Heading>

          <Tabs
            size="lg"
            isFitted
            variant="enclosed"
            border="black"
            color="black"
            colorScheme="black"
            align="center"
            fontSize="xl"
            borderBlockEnd="ThreeDHighlight"
          >
            <Text fontWeight="bold" mb="1em">
              !Are you a Chef or Foody? Choose one please{" "}
            </Text>
            <TabList>
              <Tab fontWeight="bold">Chef</Tab>
              <Tab fontWeight="bold">Foody</Tab>
            </TabList>
            <TabPanels>
              <TabPanel dir="ltr">
                <VStack spacing={5}>
                  <Box w="90%">
                    <Text align="left" color="black">
                      Username
                    </Text>
                    <Input
                      _hover={{ background: "none" }}
                      color="black"
                      value={username}
                      borderColor="blackAlpha.800"
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Box>
                  <Box w="90%">
                    <Text align="left" color="black">
                      password
                    </Text>
                    <Input
                      _hover={{ background: "none" }}
                      color="black"
                      value={password}
                      borderColor="blackAlpha.800"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Box>
                  <Button
                    w="40%"
                    bg="#788A5C"
                    borderColor="blackAlpha.800"
                    _hover={{
                      background: "#788A5C",
                      color: "black",
                    }}
                    color="black"
                    onClick={submiteLoginChef}
                  >
                    Login
                  </Button>
                </VStack>
              </TabPanel>
              <TabPanel dir="ltr">
                <VStack spacing={5}>
                  <Box w="90%">
                    <Text color="black" align="left">
                      Username
                    </Text>
                    <Input
                      _hover={{ background: "none" }}
                      color="black"
                      value={username}
                      borderColor="blackAlpha.800"
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Box>
                  <Box w="90%">
                    <Text align="left" color="black">
                      password
                    </Text>
                    <Input
                      _hover={{ background: "none" }}
                      color="black"
                      value={password}
                      borderColor="blackAlpha.800"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Box>
                  <Button
                    w="40%"
                    bg="#788A5C"
                    borderColor="blackAlpha.800"
                    _hover={{
                      background: "#788A5C",
                      color: "black",
                    }}
                    color="black"
                    onClick={submiteLoginFoody}
                  >
                    Login
                  </Button>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Text color="black">
            Not on Familyfood station?
            <Link to="/" style={{ textDecorationLine: "underline" }}>
              Sign up
            </Link>
          </Text>
        </VStack>
      </HStack>
      <Box mt="5" bg="#788A5C" color="white" textAlign="center">
        ©Famaliyfood station . All rights reserved.
      </Box>
    </Box>
  );
};

export default Login;
