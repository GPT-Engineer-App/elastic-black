import { Box, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Contact Us</Text>
        <Text>If you have any questions, feel free to reach out to us!</Text>
      </VStack>
    </Box>
  );
};

export default Contact;