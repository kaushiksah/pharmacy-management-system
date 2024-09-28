import React, { useState } from "react";

const MedicineCatalog = ({ medicines, addSale }) => {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddSale = () => {
    if (selectedMedicine && quantity > 0) {
      const sale = {
        id: Date.now(),
        medicineName: selectedMedicine.name,
        price: selectedMedicine.price,
        saleDate: new Date().toISOString().slice(0, 10), // Current date
        quantity: quantity,
      };
      addSale(sale);
    }
  };

  return (
    <div>
      <h3>Medicine Catalog</h3>
      <select onChange={(e) => setSelectedMedicine(medicines.find((med) => med.name === e.target.value))}>
        <option value="">Select a medicine</option>
        {medicines.map((medicine) => (
          <option key={medicine.id} value={medicine.name}>
            {medicine.name} - ${medicine.price}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
        placeholder="Quantity"
      />
      <button onClick={handleAddSale}>Add to Sales</button>
    </div>
  );
};

export default MedicineCatalog;
