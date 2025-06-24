// src/Menu.jsx

import React from "react";
import MenuItem from "./MenuItem"; // Import the component we just created

const Menu = ({ menuItem_data }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-700 underline underline-offset-4">
        Menu Items
      </h2>
      <div className="space-y-3">
        {menuItem_data &&
          menuItem_data.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-xl p-4 shadow-md flex justify-between items-center">
              <div>
                <h3>{item.title}</h3>
                <p className="max-w-5xl w-100">
                  {item.discription}
                </p>
              </div>
              <span>{item.price}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
