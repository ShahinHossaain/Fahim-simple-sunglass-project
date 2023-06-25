import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="flex justify-center bg-gray-200">
      <ul className="flex space-x-4">
        <Link
          className={`cursor-pointer px-4 py-2 rounded ${
            activeTab === "All Orders"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => handleTabClick("All Orders")}
          to="/"
        >
          All Orders
        </Link>
        <Link
          className={`cursor-pointer px-4 py-2 rounded ${
            activeTab === "Regular Delivery"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => handleTabClick("Regular Delivery")}
          to="regular"
        >
          Regular Delivery
        </Link>
        <Link
          className={`cursor-pointer px-4 py-2 rounded ${
            activeTab === "Express Delivery"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => handleTabClick("Express Delivery")}
          to="express"
        >
          Express Delivery
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
