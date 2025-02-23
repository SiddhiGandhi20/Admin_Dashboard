import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardOverview from "./DashboardOverview";
import { SalesOverviewChart, OrderDistributionChart, RevenueBreakdownChart } from "./Charts";
import RecentOrders from "./RecentOrders";
import AddProduct from "./AddProduct";
import ManageProducts from "./ManageProducts";
import Orders from "./Orders"; // ✅ Import Orders Page

import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="admin-dashboard">
      <Sidebar setActiveSection={setActiveSection} />

      <div className="dashboard-content">
        <h1 className="dashboard-title">Admin Dashboard</h1>

        {activeSection === "dashboard" && (
          <>
            <DashboardOverview />
            <div className="charts-container">
              <h2 className="section-title">Analytics Overview</h2>
              <div className="charts-wrapper">
                <SalesOverviewChart />
                <OrderDistributionChart />
                <RevenueBreakdownChart />
              </div>
            </div>
            <RecentOrders />
          </>
        )}

        {activeSection === "addProduct" && <AddProduct />}
        {activeSection === "products" && <ManageProducts />}
        {activeSection === "orders" && <Orders />} {/* ✅ Orders Page Added */}
      </div>
    </div>
  );
};

export default AdminDashboard;
