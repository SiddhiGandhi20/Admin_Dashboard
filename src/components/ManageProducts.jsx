import React, { useState, useEffect } from "react";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    size: "M",
    color: "Black",
    stock: "In Stock",
    customizable: false,
    description: "",
    image: "",
  });

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Black", "Blue", "Red", "White"];

  useEffect(() => {
    const dummyProducts = [
      {
        id: 1,
        name: "T-Shirt",
        price: 20,
        size: "M",
        color: "Black",
        stock: "In Stock",
        customizable: true,
        description: "Comfortable cotton t-shirt",
        image: "https://via.placeholder.com/60",
      },
      {
        id: 2,
        name: "Jeans",
        price: 50,
        size: "L",
        color: "Blue",
        stock: "Out of Stock",
        customizable: false,
        description: "Stylish denim jeans",
        image: "https://via.placeholder.com/60",
      },
    ];
    setProducts(dummyProducts);
  }, []);

  const handleEditClick = (product) => {
    setEditingProduct(product.id);
    setUpdatedProduct(product);
  };

  const handleDeleteClick = (id) => {
    setDeleteProductId(id);
  };

  const confirmDelete = () => {
    setProducts(products.filter((product) => product.id !== deleteProductId));
    setDeleteProductId(null);
  };

  const handleInputChange = (e, setFunction) => {
    const { name, value, type, checked } = e.target;
    setFunction((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProducts(products.map((prod) => (prod.id === updatedProduct.id ? updatedProduct : prod)));
    setEditingProduct(null);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newId = products.length + 1;
    setProducts([...products, { id: newId, ...newProduct }]);
    setIsAddingProduct(false);
    setNewProduct({
      name: "",
      price: "",
      size: "M",
      color: "Black",
      stock: "In Stock",
      customizable: false,
      description: "",
      image: "",
    });
  };

  return (
    <div className="manage-products">
      <div className="header">
        <h2>Manage Products</h2>
        <button className="add-btn" onClick={() => setIsAddingProduct(true)}>+ Add New Product</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Size</th>
              <th>Color</th>
              <th>Stock</th>
              <th>Customizable</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.name} className="product-img" />
                  </td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.size}</td>
                  <td>
                    <span className={`color-box ${product.color.toLowerCase()}`}></span>
                    {product.color}
                  </td>
                  <td>{product.stock}</td>
                  <td>{product.customizable ? "Yes" : "No"}</td>
                  <td>{product.description}</td>
                  <td className="action-buttons">
                    <button className="update-btn" onClick={() => handleEditClick(product)}>Update</button>
                    <button className="delete-btn" onClick={() => handleDeleteClick(product.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No products available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div className="modal">
          <h3>Edit Product</h3>
          <form onSubmit={handleFormSubmit}>
            <input type="text" name="name" value={updatedProduct.name} onChange={(e) => handleInputChange(e, setUpdatedProduct)} required />
            <input type="number" name="price" value={updatedProduct.price} onChange={(e) => handleInputChange(e, setUpdatedProduct)} required />
            <button type="submit">Save</button>
            <button id="edit-cancel-btn" onClick={() => setEditingProduct(null)}>Cancel</button>
          </form>
        </div>
      )}

     {/* Add New Product Modal */}
{isAddingProduct && (
  <div className="modal">
    <h3>Add New Product</h3>
    <form onSubmit={handleAddProduct}>
      <label htmlFor="product-name">Product Name</label>
      <input id="product-name" type="text" name="name" value={newProduct.name} onChange={(e) => handleInputChange(e, setNewProduct)} required />

      <label htmlFor="product-price">Price ($)</label>
      <input id="product-price" type="number" name="price" value={newProduct.price} onChange={(e) => handleInputChange(e, setNewProduct)} required />

      <label htmlFor="product-size">Size</label>
      <select id="product-size" name="size" value={newProduct.size} onChange={(e) => handleInputChange(e, setNewProduct)} required>
        {sizes.map((size) => <option key={size} value={size}>{size}</option>)}
      </select>

      <label htmlFor="product-color">Color</label>
      <select id="product-color" name="color" value={newProduct.color} onChange={(e) => handleInputChange(e, setNewProduct)} required>
        {colors.map((color) => <option key={color} value={color}>{color}</option>)}
      </select>

      <label htmlFor="product-description">Description</label>
      <textarea id="product-description" name="description" value={newProduct.description} onChange={(e) => handleInputChange(e, setNewProduct)} required />

      <label htmlFor="product-image">Product Image</label>
      <input
        id="product-image"
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setNewProduct((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
          }
        }}
        required
      />

      {newProduct.image && <img src={newProduct.image} alt="Preview" className="image-preview" />}

      <button type="submit">Add Product</button>
      <button id="add-cancel-btn" onClick={() => setIsAddingProduct(false)}>Cancel</button>
    </form>
  </div>
)}

      {/* Delete Confirmation Modal */}
      {deleteProductId !== null && (
        <div className="modal">
          <h3>Are you sure you want to delete this product?</h3>
          <button className="delete-btn" onClick={confirmDelete}>Confirm</button>
          <button id="delete-cancel-btn" onClick={() => setDeleteProductId(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
