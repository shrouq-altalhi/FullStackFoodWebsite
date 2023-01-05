import {
  Box,
  Divider,
  Flex,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="white" color="black">
      <Divider mt="20" borderColor="black"/>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        textAlign="left"
        fontFamily="Xanh Mono"
      >
        <Stack direction="row" h="100px" p={4}>
          <Divider orientation="vertical" borderColor="black" />
        </Stack>
        <UnorderedList ml="10" mt="5">
          <Text fontWeight="bold"> Familyfood Station </Text>
          <ListItem>About Us</ListItem>
          <ListItem>About our family</ListItem>
        </UnorderedList>
        <Stack direction="row" h="100px" p={4}>
          <Divider orientation="vertical" borderColor="black" />
        </Stack>

        <UnorderedList ml="10" mt="5">
          <Text fontWeight="bold"> Our regions </Text>
          <ListItem>Ryihad</ListItem>
          <ListItem>Damame</ListItem>
        </UnorderedList>
        <Stack direction="row" h="100px" p={4}>
          <Divider orientation="vertical" borderColor="black" />
        </Stack>

        <UnorderedList ml="10" mt="5">
          <Text fontWeight="bold"> Help </Text>
          <ListItem>Contact us </ListItem>
          <ListItem>Privacy Policy </ListItem>
        </UnorderedList>
        <Stack direction="row" h="100px" p={4}>
          <Divider orientation="vertical" borderColor="black" />
        </Stack>
      </Flex>
      <Box mt="5" bg="#788A5C" color="white" textAlign="center">
        ©Famaliyfood station . All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
