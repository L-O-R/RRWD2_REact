// src/OrderTracker.jsx

import React, { useState } from "react"; // We must import useState to use it!

function OrderTracker() {
  // We use the useState hook to manage the 'totalItems' in our state.
  // 'totalItems' is the current value.
  // 'setTotalItems' is the function we use to update the value.
  // The initial value is 0.
  const [totalItems, setTotalItems] = useState(0);

  // This is our event handler function.
  // It will be called when the button is clicked.
  const handleAddItem = () => {
    // We call our setter function to update the state.
    setTotalItems(totalItems + 1);
  };

  return (
    <div className="order-tracker space-y-2">
      <h3 className="text-xl font-semibold">Your Order</h3>
      <p className="text-lg text-gray-600">
        Total Items Added: {totalItems}
      </p>

      {/* The onClick attribute is our event listener.
        When this button is clicked, it calls the handleAddItem function.
      */}
      <div class="relative group">
        <div class="relative w-80 h-14 opacity-90 overflow-hidden rounded-xl bg-white z-10">
          <div class="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

          <div class="absolute flex items-center justify-center text-black z-[1] opacity-90 rounded-2xl inset-0.5 bg-white">
            <button
              onClick={handleAddItem}
              name="text"
              class="input font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-xl bg-yellow-200">
              Add Random Items
            </button>
          </div>
          <div class="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-gray-500 to-gray-200 blur-[30px]"></div>
        </div>
      </div>
    </div>
  );
}

export default OrderTracker;
