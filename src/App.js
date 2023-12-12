import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PatientForm from "./components/PatientForm";

function App() {
  return (
    <main>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/PatientForm" element={<PatientForm/>}/>
    </Routes>
    </main>
  );
}

export default App;
