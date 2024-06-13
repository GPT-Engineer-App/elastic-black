import { Box, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">About Us</Text>
        <Text>Regend Auto Detailing is dedicated to providing the best car detailing products and services.</Text>
      </VStack>
    </Box>
  );
};

export default About;