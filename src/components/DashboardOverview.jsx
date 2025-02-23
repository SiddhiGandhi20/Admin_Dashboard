import React from "react";
import "./AdminDashboard.css";

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <div className="overview-card">💰 Total Sales: $12,000</div>
      <div className="overview-card">📦 Orders: 150</div>
      <div className="overview-card">🛍️ Customers: 340</div>
      <div className="overview-card">💳 Revenue: $50,000</div>
    </div>
  );
};

export default DashboardOverview;
