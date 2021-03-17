import { Button, Flex, Box } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <nav style={{ marginTop: ".5rem" }}>
      <Flex align="center" justify="center">
        <Box w="100%" h="10">
          <Button colorScheme="blue" variant="ghost">
            About Me 😁
          </Button>
        </Box>
        <Box w="100%" h="10">
          <Button colorScheme="blue" variant="ghost">
            Projects 🗂️
          </Button>
        </Box>
        <Box w="100%" h="10">
          <Button colorScheme="blue" variant="ghost">
            Experience 👉
          </Button>
        </Box>
        <Box w="100%" h="10">
          <Button colorScheme="blue" variant="ghost">
            Contact 📱
          </Button>
        </Box>
      </Flex>
    </nav>
  );
};

export default NavBar;
