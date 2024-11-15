// src/components/ProductList.jsx
// Import React and the ProductItem component
import React from 'react';
import ProductItem from './ProductItem';
// Define the ProductList component as a functional component that receives products as a prop
function ProductList({ products }) {
  return (
    // Render eadig for the product list and map to iterate over the products array
    // If there are no products, display a message saying "No products available"
    <div className="product-list">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        // For each ProductItem, pass unique key and entire product object as prop
        // Implemented keys in the Product List Component
        // Usinng product.id as the key assumes that each product in the data has a unique id property 
        products.map(product => (
          <ProductItem 
            key={product.id} 
            product={product} 
          />
        ))
      )}
    </div>
  );
}
// Export the ProductList component as the default export
export default ProductList;