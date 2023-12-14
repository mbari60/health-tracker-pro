import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PatientForm from "./components/PatientForm";
import DailyTrack from "./components/DailyTrack";

function App() {
  return (
    <main>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/PatientForm" element={<PatientForm/>}/>
    <Route path="DailyTrack" element={<DailyTrack />}/>
    </Routes>
    </main>
  );
}

export default App;
