import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
  Input,
  Heading,
} from "@chakra-ui/react";

function Lists({ patientsData, patientsDailyTrack }) {
const [searchTerm, setSearchTerm] = useState("");
const filteredPatientsData = patientsData && patientsData.filter((patient) =>
  patient.phone.includes(searchTerm)
);

const filteredPatientsDailyTrack = patientsDailyTrack && patientsDailyTrack.filter(
  (dailyTrack) => dailyTrack.patNumber.includes(searchTerm)
);
  return (
    <Stack spacing={4} p={4}>
      <Input
        type="number"
        placeholder="Search by phone number or patNumber"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Heading as="h2" size="md">
        Patient Data Table
      </Heading>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Phone</Th>
            <Th>Age</Th>
            <Th>Gender</Th>
            <Th>Disease</Th>
            <Th>Dose Start Date</Th>
            <Th>Dose End Date</Th>
            <Th>Selected Doctor</Th>
          </Tr>
        </Thead>
        <Tbody>
          {patientsData &&
            filteredPatientsData.map((patient, index) => (
              <Tr key={index}>
                <Td>{patient.name}</Td>
                <Td>{patient.phone}</Td>
                <Td>{patient.age}</Td>
                <Td>{patient.gender}</Td>
                <Td>{patient.disease}</Td>
                <Td>{patient.doseStartDate}</Td>
                <Td>{patient.doseEndDate}</Td>
                <Td>{patient.selectedDoctor}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>

      <Heading as="h2" size="md">
        Daily Track Data Table
      </Heading>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Pat Number</Th>
            <Th>Body Temperature</Th>
            <Th>Blood Pressure</Th>
            <Th>Diet</Th>
            <Th>Water Intake</Th>
            <Th>Medication Effectiveness</Th>
            <Th>Sleep Duration</Th>
            <Th>Nausea</Th>
            <Th>Tiredness</Th>
            <Th>Other Symptoms</Th>
          </Tr>
        </Thead>
        <Tbody>
          {patientsDailyTrack &&
            filteredPatientsDailyTrack.map((dailyTrack, index) => (
              <Tr key={index}>
                <Td>{dailyTrack.patNumber}</Td>
                <Td>{dailyTrack.bodyTemperature}</Td>
                <Td>{dailyTrack.bloodPressure}</Td>
                <Td>{dailyTrack.diet}</Td>
                <Td>{dailyTrack.waterIntake}</Td>
                <Td>{dailyTrack.medicationEffectiveness}</Td>
                <Td>{dailyTrack.sleepDuration}</Td>
                <Td>{dailyTrack.nausea ? "Yes" : "No"}</Td>
                <Td>{dailyTrack.tiredness ? "Yes" : "No"}</Td>
                <Td>{dailyTrack.otherSymptoms}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Stack>
  );
}

export default Lists;
