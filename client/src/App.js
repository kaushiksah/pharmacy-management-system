import React, { useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import OperatorDashboard from './components/OperatorDashboard';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const App = () => {
  const [view, setView] = useState('admin');
  const [medicines, setMedicines] = useState([]);
  const [sales, setSales] = useState([]);

  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-4">Medical Store Sales Directory</h1>

      {/* Navigation Buttons */}
      <div className="btn-group mb-4" role="group" aria-label="Dashboard Switch">
        <button className="btn btn-primary" onClick={() => setView('admin')}>
          Admin Dashboard
        </button>
        <button className="btn btn-secondary" onClick={() => setView('operator')}>
          Operator Dashboard
        </button>
      </div>

      {/* Conditionally render the admin or operator dashboard */}
      <div className="row">
        <div className="col">
          {view === 'admin' ? (
            <AdminDashboard medicines={medicines} setMedicines={setMedicines} />
          ) : (
            <OperatorDashboard 
              medicines={medicines} 
              setMedicines={setMedicines} // Pass setMedicines here
              sales={sales} 
              setSales={setSales} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
