import Crud from "./components/Crud.jsx";
import AppointmentData from "./components/AppointmentData.jsx";
function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen overflow-auto">
        {/* <Crud /> */}
        <AppointmentData />
      </div>
    </>
  );
}

export default App;
