import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OperatorDashboard = ({ medicines, setMedicines }) => {
  // Sales state
  const [sales, setSales] = useState([]);

  // Function to add a sale
  const addSale = (medicine) => {
    const sale = {
      id: Date.now(), // Unique ID for each sale
      medicineName: medicine.name,
      price: medicine.price,
      date: new Date().toLocaleDateString(), // Add the current date
    };
    
    // Update sales list with new sale
    setSales((prevSales) => [...prevSales, sale]);
    console.log(sale);
  };

  // Function to delete an expired medicine
  const deleteMedicine = (id) => {
    console.log(`Deleting medicine with id: ${id}`); 
    const updatedMedicines = medicines.filter((medicine) => medicine.id !== id);
    setMedicines(updatedMedicines);
  };

  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <div className="card-header text-white bg-primary">
          <h3>Operator Dashboard</h3>
        </div>
        <div className="card-body">
          <div className="row">
            {/* Available Medicines */}
            <div className="col-md-6">
              <h4>Available Medicines</h4>
              <table className="table table-hover">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Expiry Date</th>
                    <th scope="col">GST</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {medicines.map((medicine) => (
                    <tr key={medicine.id} className={new Date(medicine.expiryDate) < new Date() ? 'table-danger' : ''}>
                      <td>{medicine.name}</td>
                      <td>${medicine.price.toFixed(2)}</td>
                      <td>{medicine.expiryDate}</td>
                      <td>{medicine.gstApplicable ? 'Yes' : 'No'}</td>
                      <td>{medicine.discount}%</td>
                      <td>
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => addSale(medicine)}
                          disabled={new Date(medicine.expiryDate) < new Date()}
                        >
                          Add to Sale
                        </button>
                        <button
                          className="btn btn-sm btn-danger ms-2"
                          onClick={() => deleteMedicine(medicine.id)}
                          disabled={new Date(medicine.expiryDate) >= new Date()}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Today's Sales */}
            <div className="col-md-6">
              <h4>Today's Sales</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Medicine</th>
                    <th scope="col">Price</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map((sale) => (
                    <tr key={sale.id}>
                      <td>{sale.medicineName}</td>
                      <td>${sale.price.toFixed(2)}</td>
                      <td>{sale.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Monthly Sales Report */}
          <div className="row mt-4">
            <div className="col-md-12">
              <h4>Monthly Sales Report</h4>
              <div className="card bg-light p-3">
                <ul className="list-group">
                  {sales.length > 0 ? (
                    sales.map((sale) => (
                      <li className="list-group-item" key={sale.id}>
                        {sale.medicineName} sold on {sale.date} for ${sale.price.toFixed(2)}
                      </li>
                    ))
                  ) : (
                    <p>No sales recorded for this month.</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboard;
