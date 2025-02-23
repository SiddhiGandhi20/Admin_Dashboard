import React, { useState } from "react";
import "./ProductForms.css";

const DeleteProduct = () => {
  const [productId, setProductId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Deleted Product ID:", productId);
  };

  return (
    <div className="product-form">
      <h2>Delete Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product ID" onChange={(e) => setProductId(e.target.value)} required />
        <button type="submit">Delete Product</button>
      </form>
    </div>
  );
};

export default DeleteProduct;
