import { Text, Flex, Icon, Link, Menu, MenuButton } from "@chakra-ui/react";

export const NavItem = ({ title, icon, navSize, active }: any) => {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          bg={active && "#AEC8CA"}
          p={3}
          borderRadius={8}
          _hover={{ textDecoration: "none", backgroundColor: "#AEC8CA" }}
          w={navSize === "large" ? "100%" : "none"}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#82AAAD" : "gray.500"}
              />
              <Text
                ml="5"
                display={navSize === "small" ? "none" : "flex"}
                color="gray.700"
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};
