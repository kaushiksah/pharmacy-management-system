import React, { useState } from "react";
// import AdminDashboard from "./components/AdminDashboard";
// import OperatorDashboard from "./components/OperatorDashboard";

const App = () => {
  const [medicines, setMedicines] = useState([]);
  const [sales, setSales] = useState([]);

  return (
    <div>
      <h1>Medical Store Sales Directory</h1>
      {/* <AdminDashboard medicines={medicines} setMedicines={setMedicines} /> */}
      {/* <OperatorDashboard medicines={medicines} sales={sales} setSales={setSales} /> */}
    </div>
  );
};

export default App;
