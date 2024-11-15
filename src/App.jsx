// src/App.jsx
// Import the necessary components and React hooks
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // Define the initial list of products
  // The useState hook is to create a state variable products with an initial array of product objects
  // Each product has id, name, price, and description fields
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Smartphone",
      price: 499.99,
      description: "Latest model with high-resolution camera and long battery life."
    },
    {
      id: 2,
      name: "Laptop",
      price: 899.99,
      description: "Powerful laptop for work and entertainment with SSD storage."
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: 129.99,
      description: "True wireless earbuds with noise cancellation and water resistance."
    }
]);
// Function to add a new product
// An addProduct function will be passed to the AddProductForm component
// This function adds a new product to the products array
const addProduct = (newProduct) => {
  // Generate a new ID
  const newId = Math.max(...products.map(p => p.id), 0) + 1;
    
  // Create a new product object with the generated ID
  const productToAdd = { ...newProduct, id: newId };
 
  setProducts([...products, productToAdd ]);
 // Render a heading, and other components to the fuction and array as a prop
  // setProducts([...products, { ...newProduct, id: Date.now() }]);
};

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <h1>Product Dashboard</h1>
      <div className="App">
        <AddProductForm onAddProduct={addProduct} />
        <ProductList products={products} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
// Set up App component with initial product list
// Implement addProduct function and pass data between App and AddProductForm
