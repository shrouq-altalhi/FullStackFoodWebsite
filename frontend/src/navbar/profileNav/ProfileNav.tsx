import {
  Avatar,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { NavItem } from "../profileNav/NavItem";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const ProfileNav = () => {
  const [navSize, changeNavSize] = useState("small");
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <Flex
        pos="sticky"
        left="5"
        h="full"
        bg="white"
        boxShadow="0 4px 12px rgba(0,0,0,0.09)"
        w={navSize === "small" ? "75px" : "300px"}
        flexDir="column"
        justifyContent="space-between"
        borderRadius={navSize === "small" ? "2xl" : "3xl"}
      >
        <Flex
          p="5%"
          flexDir="column"
          alignItems={navSize === "small" ? "center" : "flex-start"}
          as="nav"
        >
          <IconButton
            mt="5"
            color="gray.500"
            _hover={{ background: "none" }}
            background="none"
            aria-label="Search database"
            icon={<FiMenu size={24} />}
            onClick={() => {
              if (navSize === "small") {
                changeNavSize("large");
              } else {
                changeNavSize("small");
              }
            }}
          />
          {/* NavItem   */}

          <NavItem title="Profile" navSize={navSize} icon={AiOutlineUser} />
          <NavItem title="Help" navSize={navSize} />
        </Flex>
        <Flex
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize === "small" ? "center" : "flex-start"}
          mb="4"
          ml={navSize === "small" ? "0" : "4"}
        >
          <Divider display={navSize === "small" ? "none" : "flex"} />
          <Flex mt={4}  align="center" >
            <Avatar size="md" src="https://bit.ly/broken-link" />
            <Flex
              flexDir="column"
              ml={4}
              display={navSize === "small" ? "none" : "flex"}
              justifyContent={"center"}
            >
                <Button onClick={Logout} size="sm"  color="black" bg="gray.100" p="2">
                  Log out
                </Button>
              <Text ml="2" color="gray.400">user</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default ProfileNav;
