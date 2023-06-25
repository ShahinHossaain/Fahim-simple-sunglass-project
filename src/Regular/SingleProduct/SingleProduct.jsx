const SingleProduct = ({ orders }) => {
  return (
    <div className="mx-20 mt-20">
      <table className="min-w-full divide-y divide-gray-200 table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-center">No.</th>
            <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
              Buyer Name
            </th>
            <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
              Product
            </th>
            <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
              Delivery Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {order.buyerName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {order.product}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {order.deliveryStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SingleProduct;
