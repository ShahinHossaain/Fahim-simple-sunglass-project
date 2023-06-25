import { useEffect, useState } from "react";
import SingleProduct from "../Regular/SingleProduct/SingleProduct";

const Express = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const regularOrder = orders.filter(
    (order) => order.deliveryStatus === "express"
  );
  console.log(regularOrder);
  return <SingleProduct orders={regularOrder}></SingleProduct>;
};

export default Express;
