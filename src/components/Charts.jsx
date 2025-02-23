import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, BarChart, Bar, Legend, ResponsiveContainer
} from "recharts";
import "./Charts.css";

// Sample Data
const salesData = [
  { month: "Jan", sales: 500 },
  { month: "Feb", sales: 700 },
  { month: "Mar", sales: 1200 },
  { month: "Apr", sales: 900 },
  { month: "May", sales: 1500 },
  { month: "Jun", sales: 2000 },
];

const orderData = [
  { name: "Shipped", value: 40 },
  { name: "Pending", value: 25 },
  { name: "Delivered", value: 35 },
];

const revenueData = [
  { category: "Men's Wear", revenue: 4000 },
  { category: "Women's Wear", revenue: 6000 },
  { category: "Kids' Wear", revenue: 3000 },
  { category: "Accessories", revenue: 2000 },
];

const COLORS = ["#27ae60", "#f39c12", "#2980b9"];

// Chart Components
export const SalesOverviewChart = () => (
  <div className="chart-card">
    <h3>Sales Overview</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={salesData}>
        <XAxis dataKey="month" stroke="#2c3e50" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="sales" stroke="#2980b9" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export const OrderDistributionChart = () => (
  <div className="chart-card">
    <h3>Order Distribution</h3>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={orderData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
          {orderData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export const RevenueBreakdownChart = () => (
  <div className="chart-card">
    <h3>Revenue Breakdown</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={revenueData}>
        <XAxis dataKey="category" stroke="#2c3e50" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="revenue" fill="#e74c3c" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
