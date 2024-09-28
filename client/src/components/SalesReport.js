import React, { useState } from "react";

const SalesReport = ({ sales }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [reportType, setReportType] = useState("daily");

  const filterSales = () => {
    if (reportType === "daily" && selectedDate) {
      return sales.filter((sale) => sale.saleDate === selectedDate);
    } else if (reportType === "monthly" && selectedDate) {
      const month = selectedDate.slice(0, 7); // Extract YYYY-MM part for monthly filtering
      return sales.filter((sale) => sale.saleDate.startsWith(month));
    }
    return sales;
  };

  const totalSales = filterSales().reduce((acc, sale) => acc + sale.price * sale.quantity, 0);

  return (
    <div>
      <h3>Sales Report</h3>
      <label>
        Report Type:
        <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <h4>Total Sales: ${totalSales.toFixed(2)}</h4>
      <ul>
        {filterSales().map((sale) => (
          <li key={sale.id}>
            {sale.medicineName} - Quantity: {sale.quantity} - Total: $
            {(sale.price * sale.quantity).toFixed(2)} - Date: {sale.saleDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesReport;
