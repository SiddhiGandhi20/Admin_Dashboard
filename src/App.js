import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Routes>
      {/* Default route - Redirect to Admin Dashboard */}
      <Route path="/" element={<Navigate to="/admin" />} />
      <Route path="/admin" element={<AdminDashboard />} />
      
      {/* Catch-all for unmatched routes */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
