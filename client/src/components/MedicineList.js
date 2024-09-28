import React from "react";

const MedicineList = ({ medicines, deleteMedicine }) => {
  return (
    <div>
      <h3>Medicines</h3>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.id}>
            {medicine.name} - ${medicine.price} - Expiry: {medicine.expiryDate} 
            <button onClick={() => deleteMedicine(medicine.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
