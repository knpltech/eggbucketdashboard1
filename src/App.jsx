// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import AdminDashboard from "./pages/AdminDashboard";
import Neccrate from "./pages/Neccrate";
import Dailysales from "./pages/Dailysales";
import Distributor from "./pages/Distributor";
import ViewerDashboard from "./pages/ViewerDashboard";
import CashPayments from "./pages/CashPayments";
import DigitalPayments from "./pages/DigitalPayments";
import Outlets from "./pages/Outlets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />

        {/* ADMIN */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* VIEWER */}
        <Route path="/dashboard" element={<ViewerDashboard />} />
        
        <Route path='/neccrate' element={<Neccrate/>}/>
        <Route path='/dailysales' element={<Dailysales/>}/>
        <Route path='/distribution' element={<Distributor/>}/>

        <Route path="/cash-payments" element={<CashPayments />} />
        <Route path="/digital-payments" element={<DigitalPayments />} />
        <Route path="/outlets" element={<Outlets />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
