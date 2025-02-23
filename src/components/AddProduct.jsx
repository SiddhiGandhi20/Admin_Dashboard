import React, { useState } from "react";
import { FaBox, FaDollarSign, FaTags, FaWarehouse } from "react-icons/fa";
import "./ProductForms.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", product);
  };

  return (
    <div className="product-form">
      <h2>➕ Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaBox className="input-icon" />
          <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <FaDollarSign className="input-icon" />
          <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <FaTags className="input-icon" />
          <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <FaWarehouse className="input-icon" />
          <input type="number" name="stock" placeholder="Stock Quantity" onChange={handleChange} required />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
