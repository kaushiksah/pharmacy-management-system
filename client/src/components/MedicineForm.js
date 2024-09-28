import React, { useState } from "react";

const MedicineForm = ({ addMedicine }) => {
  const [medicine, setMedicine] = useState({
    name: "",
    price: "",
    expiryDate: "",
    gstApplicable: false,
    discount: "",
  });

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedicine = {
      ...medicine,
      id: Date.now(), // Unique ID for each medicine
    };
    addMedicine(newMedicine);
    setMedicine({ name: "", price: "", expiryDate: "", gstApplicable: false, discount: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={medicine.name} onChange={handleChange} placeholder="Medicine Name" />
      <input name="price" value={medicine.price} onChange={handleChange} placeholder="Price" />
      <input name="expiryDate" value={medicine.expiryDate} onChange={handleChange} placeholder="Expiry Date" />
      <label>
        GST Applicable
        <input
          type="checkbox"
          checked={medicine.gstApplicable}
          onChange={(e) => setMedicine({ ...medicine, gstApplicable: e.target.checked })}
        />
      </label>
      <input name="discount" value={medicine.discount} onChange={handleChange} placeholder="Discount" />
      <button type="submit">Add Medicine</button>
    </form>
  );
};

export default MedicineForm;
