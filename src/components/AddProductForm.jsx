// src/components/AddProductForm.jsx
//Import React and the useState hook
import React, { useState } from 'react';
// Define the AddProductForm component, which receives onAddProduct as a prop. 
// This will be the function passed from the App component to handle adding new products
function AddProductForm({ onAddProduct }) {
    //Use useState to manage the state of the form fields: name, price, and description
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
// Define a handleSubmit function to prevent the default form submission behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert price to a number and validate inputs
    const newProduct = {
      name: name.trim(),
      price: parseFloat(price),
      description: description.trim()
    };

    if (!newProduct.name || isNaN(newProduct.price) || !newProduct.description) {
      alert('Please fill all fields correctly.');
      return;
    }

    //Call the function passed from App to add the new product
    onAddProduct(newProduct);

    // Reset form fields after submission
    setName('');
    setPrice('');
    setDescription('');
  };
// Renders a form with input fields for name, price, and description, labels and submit button
  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h2>Add New Product</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          // Use controlled components by setting the value of each input to its corresponding state variable and updating the state in the onChange handler
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="0.01"
          min="0"
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}
// This sets up the AddProductForm component, allowing users to input new product details and add them to the list
// The form uses state to manage its inputs and communicates with the App component to add new products to the main list
export default AddProductForm;

// Create AddProductForm component with form fields