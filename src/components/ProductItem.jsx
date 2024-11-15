// src/components/ProductItem.jsx
// Import React
import React from 'react';
// Define the ProductItem component as a functional component that receives product as a prop.
function ProductItem({ product }) {
    // Destructuring to extract name, price, and description from the product object for easier use in the JSX
  const { name, price, description } = product;
// Render elements with te product info
  return (
    <div className="product-item">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">Price: ${price.toFixed(2)}</p>
      <p className="product-description">{description}</p>
    </div>
  );
}
// Export the ProductItem component as the default export
export default ProductItem;
// Create ProductItem component to display individual product details
