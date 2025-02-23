import React, { useState, useEffect } from "react";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [deleteOrderId, setDeleteOrderId] = useState(null);

  useEffect(() => {
    const dummyOrders = [
      {
        id: "ORD001",
        customer: "John Doe",
        total: 120.99,
        status: "Pending",
        date: "2025-02-23",
        items: [
          { name: "T-Shirt", quantity: 2, price: 20.99 },
          { name: "Jeans", quantity: 1, price: 50.99 },
        ],
      },
      {
        id: "ORD002",
        customer: "Alice Smith",
        total: 85.5,
        status: "Shipped",
        date: "2025-02-22",
        items: [{ name: "Sweater", quantity: 1, price: 85.5 }],
      },
    ];
    setOrders(dummyOrders);
  }, []);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleUpdateStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleDeleteOrder = () => {
    setOrders(orders.filter((order) => order.id !== deleteOrderId));
    setDeleteOrderId(null);
  };

  return (
    <div className="orders">
      <h2>Orders</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Canceled">Canceled</option>
                    </select>
                  </td>
                  <td>{order.date}</td>
                  <td>
                    <button className="view-btn" onClick={() => handleViewDetails(order)}>View</button>
                    <button className="delete-btn" onClick={() => setDeleteOrderId(order.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No orders available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="modal">
          <h3>Order Details ({selectedOrder.id})</h3>
          <p><strong>Customer:</strong> {selectedOrder.customer}</p>
          <p><strong>Total:</strong> ${selectedOrder.total.toFixed(2)}</p>
          <p><strong>Status:</strong> {selectedOrder.status}</p>
          <p><strong>Date:</strong> {selectedOrder.date}</p>
          <h4>Items:</h4>
          <ul>
            {selectedOrder.items.map((item, index) => (
              <li key={index}>{item.name} - {item.quantity} x ${item.price.toFixed(2)}</li>
            ))}
          </ul>
          <button onClick={() => setSelectedOrder(null)}>Close</button>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteOrderId && (
        <div className="modal">
          <h3>Are you sure you want to delete this order?</h3>
          <button className="delete-btn" onClick={handleDeleteOrder}>Confirm</button>
          <button onClick={() => setDeleteOrderId(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Orders;
