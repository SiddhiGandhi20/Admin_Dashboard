import React, { useState } from "react";
import { FaEdit, FaBox, FaDollarSign, FaTags, FaWarehouse } from "react-icons/fa";
import "./ProductForms.css";

const UpdateProduct = () => {
  const [productId, setProductId] = useState("");
  const [newDetails, setNewDetails] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  const handleChange = (e) => {
    setNewDetails({ ...newDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product:", { productId, newDetails });
  };

  return (
    <div className="product-form">
      <h2>✏️ Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaEdit className="input-icon" />
          <input type="text" placeholder="Product ID" onChange={(e) => setProductId(e.target.value)} required />
        </div>

        <div className="input-group">
          <FaBox className="input-icon" />
          <input type="text" name="name" placeholder="New Name" onChange={handleChange} />
        </div>

        <div className="input-group">
          <FaDollarSign className="input-icon" />
          <input type="number" name="price" placeholder="New Price" onChange={handleChange} />
        </div>

        <div className="input-group">
          <FaTags className="input-icon" />
          <input type="text" name="category" placeholder="New Category" onChange={handleChange} />
        </div>

        <div className="input-group">
          <FaWarehouse className="input-icon" />
          <input type="number" name="stock" placeholder="New Stock" onChange={handleChange} />
        </div>

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
