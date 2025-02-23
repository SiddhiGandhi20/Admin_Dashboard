import React from "react";
import "./AdminDashboard.css";

const RecentOrders = () => {
  const orders = [
    { id: 1, customer: "John Doe", total: "$120", status: "Shipped" },
    { id: 2, customer: "Jane Smith", total: "$90", status: "Pending" },
    { id: 3, customer: "Alice Johnson", total: "$200", status: "Delivered" },
  ];

  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td>
                <span
                  className={`status ${
                    order.status === "Shipped"
                      ? "status-shipped"
                      : order.status === "Pending"
                      ? "status-pending"
                      : "status-delivered"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
