import React, { useState } from "react";

/** useState - object */
const BasicHooksUseState3 = () => {
  const [product, setProduct] = useState({ name: "", price: 0 });

  return (
    <div>
      <form>
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="text"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <p>Product name is {product.name}</p>
        <p>Product price is {product.price}</p>
      </form>
    </div>
  );
};

export default BasicHooksUseState3;
