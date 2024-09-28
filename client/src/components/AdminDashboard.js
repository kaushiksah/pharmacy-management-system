import React, { useState } from "react";

const AdminDashboard = ({ medicines, setMedicines }) => {
  const [medicineName, setMedicineName] = useState("");
  const [price, setPrice] = useState(0);
  const [expiryDate, setExpiryDate] = useState("");
  const [gstApplicable, setGstApplicable] = useState(false);
  const [discount, setDiscount] = useState(0);

  const addMedicine = () => {
    const newMedicine = {
      id: Date.now(),
      name: medicineName,
      price: parseFloat(price),
      expiryDate,
      gstApplicable,
      discount: parseFloat(discount),
    };
    setMedicines([...medicines, newMedicine]);
    setMedicineName("");
    setPrice(0);
    setExpiryDate("");
    setGstApplicable(false);
    setDiscount(0);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Admin Dashboard</h2>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Medicine Name</label>
            <input
              className="form-control"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              className="form-control"
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>GST Applicable</label>
            <input
              className="form-check-input ml-2"
              type="checkbox"
              checked={gstApplicable}
              onChange={(e) => setGstApplicable(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label>Discount</label>
            <input
              className="form-control"
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <button className="btn btn-success mt-3" onClick={addMedicine} type="button">
            Add Medicine
          </button>
        </form>
      </div>

      {/* Display List of Medicines */}
      <div className="card mt-4">
        <div className="card-header">Medicines</div>
        <ul className="list-group list-group-flush">
          {medicines.map((medicine) => (
            <li className="list-group-item" key={medicine.id}>
              {medicine.name} - ${medicine.price} - Expiry: {medicine.expiryDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
