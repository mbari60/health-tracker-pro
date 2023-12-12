import { Flex, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      p="4"
      bg="teal.500"
      color="white"
    >
      <Flex>
        <Text fontSize="xl" fontWeight="bold">
          Health Tracker App
        </Text>
      </Flex>

      <Flex margin="auto">
        <Link to="/">Home</Link>
        <Box mx="4">
          <Link to="/PatientForm">Patient-Form</Link>
        </Box>
        <Link to="/">Patients-List</Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
