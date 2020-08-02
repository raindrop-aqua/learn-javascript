import React, { useState } from "react";

/** useState - array */
const BasicHooksUseState4 = () => {
  const [product, setProduct] = useState([]);
  const newProduct = () => {
    setProduct([
      ...product,
      {
        id: product.length,
        name: `product(${product.length})`,
      },
    ]);
  };

  return (
    <div>
      <button type="button" onClick={newProduct}>
        Add new product
      </button>
      <ul>
        {product.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BasicHooksUseState4;
