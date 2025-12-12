// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import AdminDashboard from "./pages/AdminDashboard";
import ViewerDashboard from "./pages/ViewerDashboard"; // your page

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
