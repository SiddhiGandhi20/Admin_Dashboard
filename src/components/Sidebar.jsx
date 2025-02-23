import React from "react";
import "./AdminDashboard.css";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <h2 className="logo" onClick={() => setActiveSection("dashboard")}>
        Clothing Admin
      </h2>

      <ul>
        <li onClick={() => setActiveSection("dashboard")}>🏠 Dashboard</li>
        <li onClick={() => setActiveSection("orders")}>📦 Orders</li>

        {/* ✅ Directly Navigates to the Products Page */}
        <li onClick={() => setActiveSection("products")}>👕 Products</li>

        <li onClick={() => setActiveSection("customers")}>🛍️ Customers</li>
        <li onClick={() => setActiveSection("reports")}>📊 Reports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
