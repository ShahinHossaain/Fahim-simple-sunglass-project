import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct/SingleProduct";

const Regular = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const regularOrder = orders.filter(
    (order) => order.deliveryStatus === "regular"
  );
  console.log(regularOrder);
  return <SingleProduct orders={regularOrder}></SingleProduct>;
};

export default Regular;
