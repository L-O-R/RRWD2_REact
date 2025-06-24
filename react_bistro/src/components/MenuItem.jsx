// src/MenuItem.jsx

import React from "react";

// This is a reusable component to display one menu item.
// It receives data via props (itemName, price, description).
function MenuItem({ itemName, price, description }) {
  return (
    <div className=" flex justify-between border border-gray-100 shadow-xs my-5 p-4 rounded-xl ">
      {/* We use the props to dynamically display the item's details */}
      <div>
        <h3 className="leading-7 font-semibold text-xl ">
          {itemName}
        </h3>
        <p className="max-w-4xl w-100 leading-6 tracking-wide text-gray-600">
          {description}
        </p>
      </div>
      <p className="price">${price.toFixed(2)}</p>
    </div>
  );
}

export default MenuItem;
