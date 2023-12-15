import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PatientForm from "./components/PatientForm";
import DailyTrack from "./components/DailyTrack";
import { BASE_URL } from "./hostingurl/url";
import { useEffect, useState } from "react";
import Lists from "./components/Lists";

function App() {

const [patientsData,setPatientData]= useState([])
  //fetching data of patient list from the database 
  useEffect(()=>{
    fetch(`${BASE_URL}/patientform`)
    .then((res)=>res.json())
    .then((data)=>setPatientData(data))
    .catch((err)=>console.log("There was a problem retrieving patients data",err))
  })
  const [patientsDailyTack , setPatientsDailyTrack] = useState([])
 //fetching dailytrack list from database
   useEffect(()=>{
    fetch(`${BASE_URL}/dailytracks`)
      .then((res) => res.json())
      .then((data) => setPatientsDailyTrack(data))
      .catch((err) =>
        console.log("There was a problem retrieving patients data", err)
      );
  })

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PatientForm" element={<PatientForm />} />
        <Route path="DailyTrack" element={<DailyTrack />} />
        <Route
          path="Lists"
          element={
            <Lists
              patientsData={patientsData}
              patientsDailyTack={patientsDailyTack}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
