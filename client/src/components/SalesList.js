import React from "react";

const SalesList = ({ sales }) => {
  return (
    <div>
      <h3>Sales List</h3>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            {sale.medicineName} - Quantity: {sale.quantity} - Total: $
            {(sale.price * sale.quantity).toFixed(2)} - Date: {sale.saleDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesList;
