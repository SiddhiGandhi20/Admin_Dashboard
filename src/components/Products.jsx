import React, { useState } from "react";
import "./Products.css";

const Products = ({ section }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "T-Shirt", price: 20, stock: 50 },
    { id: 2, name: "Jeans", price: 40, stock: 30 },
  ]);

  const [form, setForm] = useState({ id: null, name: "", price: "", stock: "" });

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add Product
  const handleAdd = (e) => {
    e.preventDefault();
    setProducts([...products, { ...form, id: Date.now() }]);
    setForm({ id: null, name: "", price: "", stock: "" });
  };

  // Update Product
  const handleUpdate = (e) => {
    e.preventDefault();
    setProducts(products.map((prod) => (prod.id === form.id ? form : prod)));
    setForm({ id: null, name: "", price: "", stock: "" });
  };

  // Delete Product
  const handleDelete = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  return (
    <div className="products-container">
      <h2>
        {section === "addProduct"
          ? "Add New Product"
          : section === "updateProduct"
          ? "Update Product"
          : "Delete Product"}
      </h2>

      {/* Add Product */}
      {section === "addProduct" && (
        <form className="product-form" onSubmit={handleAdd}>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Product Name" required />
          <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
          <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" required />
          <button type="submit">Add Product</button>
        </form>
      )}

      {/* Update Product */}
      {section === "updateProduct" && (
        <>
          <select onChange={(e) => setForm(products.find((p) => p.id === Number(e.target.value)))}>
            <option>Select a Product</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <form className="product-form" onSubmit={handleUpdate}>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Product Name" required />
            <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
            <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" required />
            <button type="submit">Update Product</button>
          </form>
        </>
      )}

      {/* Delete Product */}
      {section === "deleteProduct" && (
        <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Products;
