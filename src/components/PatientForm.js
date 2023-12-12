import React, { useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Select,
  Button,
  HStack,
} from "@chakra-ui/react";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    disease: "",
    doseStartDate: "",
    doseEndDate: "",
    selectedDoctor: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      maxW="500px"
      m="auto"
      p="3"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
    >
      <form onSubmit={handleSubmit}>
        <FormControl mb="4" isRequired>
          <FormLabel>Full Name: eg john doe</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Phone: eg 712345678</FormLabel>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Age: eg 18</FormLabel>
          <Input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Gender:</FormLabel>
          <RadioGroup
            name="gender"
            defaultValue={formData.gender}
            onChange={handleInputChange}
          >
            <Stack direction="row">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Disease: eg Malaria</FormLabel>
          <Input
            type="text"
            name="disease"
            value={formData.disease}
            onChange={handleInputChange}
          />
        </FormControl>

        <HStack mb="4">
          <FormControl isRequired>
            <FormLabel>Dose Start Date:</FormLabel>
            <Input
              type="datetime-local"
              name="doseStartDate"
              value={formData.doseStartDate}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Dose End Date:</FormLabel>
            <Input
              type="datetime-local"
              name="doseEndDate"
              value={formData.doseEndDate}
              onChange={handleInputChange}
            />
          </FormControl>
        </HStack>

        <FormControl mb="4" isRequired>
          <FormLabel>Choose Doctor:</FormLabel>
          <Select
            name="selectedDoctor"
            value={formData.selectedDoctor}
            onChange={handleInputChange}
          >
            {["Kevin", "Ray", "Vinn", "Mil", "jay"].map((doctor) => (
              <option key={doctor} value={doctor}>
                Dr.{doctor}
              </option>
            ))}
          </Select>
        </FormControl>

        <Button color="teal" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default PatientForm;
