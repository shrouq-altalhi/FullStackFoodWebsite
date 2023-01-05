import { BiHomeAlt } from "react-icons/bi";
import {
  Avatar,
  Divider,
  Flex,
  IconButton,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiMenu, FiUser } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
const HomeMenuNav = () => {
  const [navSize, changeNavSize] = useState("small");

  return (
    <>
      <Flex
        bg="#788A5C"
        borderTopRadius="3xl"
        h="5vh"
        justifyContent="end"
        // alignContent="center"
        // minWidth='max-content'
        // as="header"
        // position="fixed"
        w="100%"
      >
       {/* <VStack m="8"> */}
          <BiHomeAlt color="red" size={30} />
        {/* </VStack> */}
        <VStack mt="-5" h="95vh">
          <Flex
            dir="rtl"
            pos="sticky"
            // left="5"
            mt="2.5vh"
            h="80vh"
            borderRadius="3xl"
            boxShadow="0 4px 12px rgba(0,0,0,0.05)"
            w={navSize === "small" ? "0" : "250px"}
            flexDir="column"
            justifyContent="space-between"
          >
            <Flex
              p="5%"
              flexDir="column"
              alignItems="flex-start"
              as="nav"
              mr="7"
            >
              <IconButton
                // mt="1"
                color="white"
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
              <Flex
                dir="ltr"
                display={navSize === "small" ? "none" : "flex"}
                mt="100"
              >
                <FiUser size={30} />
                <Link>
                  <Text fontSize={23} mr="9">
                    Profile
                  </Text>
                </Link>
              </Flex>

              <Flex
                dir="ltr"
                display={navSize === "small" ? "none" : "flex"}
                mt="10"
              >
                <IoIosHelpCircleOutline size={30} />
                <Text pl="2" fontSize={23} mr="10">
                  Help
                </Text>
              </Flex>
            </Flex>
            <Flex p="5%" flexDir="column" w="100%" alignItems="flex-end" mb="4">
              <Divider display={navSize === "small" ? "none" : "flex"} />
              <Flex mt="4" align="center">
                <Flex flexDir="column" ml="4">
                  <Text
                    display={navSize === "small" ? "none" : "flex"}
                    fontSize={23}
                  >
                    Sign Out
                  </Text>
                </Flex>
                <Avatar
                  ml="8"
                  size="sm"
                  src="https://bit.ly/broken-link"
                  display={navSize === "small" ? "none" : "200px"}
                />
              </Flex>
            </Flex>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default HomeMenuNav;
