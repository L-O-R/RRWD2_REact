import React from "react";
import Menu from "./components/Menu";
import OrderTracker from "./components/OrderTracker";
import { menuItem_data } from "./data/menuData";

const App = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-4 border border-gray-200 space-y-6 ">
        <h1 className="text-6xl font-bold tracking-wide leading-10">
          React Baristo
        </h1>
        <Menu menuItem_data={menuItem_data} />
      </div>
      <OrderTracker />
    </section>
  );
};

export default App;
