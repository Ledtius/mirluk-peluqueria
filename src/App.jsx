import Crud from "./components/Crud.jsx";
import { useState } from "react";
function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [rawValue, setRawValue] = useState("");

  const handleChange = (e) => {
    // Remove anything that's NOT a digit (letters, spaces, symbols)
    let raw = e.target.value.replace(/\D/g, "");
    setRawValue(raw);

    // Format the number as COP (Colombian Pesos)
    let formatted = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0, // No cents for COP
    }).format(raw || 0);

    setDisplayValue(formatted);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen overflow-auto">
        <Crud />
        <div>
          <input
            type="text"
            value={displayValue}
            onChange={handleChange}
            placeholder="$ 0"
          />
          <input type="hidden" name="amount" value={rawValue} />
        </div>
      </div>
    </>
  );
}

export default App;
