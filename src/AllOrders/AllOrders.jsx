import { useEffect, useState } from "react";
import SingleProduct from "../Regular/SingleProduct/SingleProduct";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isActive, setIsActive] = useState(0);
  const [initialData, setInitialData] = useState(0);
  const itemInOnePage = 3;
  const numberOfPages = Math.ceil(orders.length / itemInOnePage);
  console.log(numberOfPages);
  const pageInArray = [...Array(numberOfPages).keys()];
  console.log(pageInArray);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleButton = (index) => {
    setInitialData(index * itemInOnePage);
    setIsActive(index);
  };
  console.log(orders.length);

  return (
    <div className="relative h-screen text-center">
      {orders && (
        <SingleProduct
          orders={orders.slice(initialData, initialData + itemInOnePage)}
        ></SingleProduct>
      )}
      <div className="absolute bottom-96 left-0 right-0">
        {pageInArray.map((page, index) => (
          <button
            key={index}
            className={`px-3 py-1 text-white rounded-sm b  mr-5 ${
              isActive === index ? "bg-blue-600" : "bg-gray-600"
            }`}
            onClick={() => handleButton(index)}
          >
            {index + 1}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
