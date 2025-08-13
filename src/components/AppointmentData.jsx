const AppointmentData = () => {
  return (
    <>
      {/* <table className="">
        <thead>
          <th>Citas de hoy</th>
          <th>Pendientes de pagar</th>
          <th>Ingresos de hoy</th>
        </thead>
        <tbody>
          <td>3</td>
          <td>2</td>
          <td>$1.000.000</td>
        </tbody>
      </table> */}
      <section className="flex flex-col gap-2 border-1 rounded-lg p-4 w-80 transition-shadow hover:shadow-lg">
        <div className="appointment-title-value">
          <h2 className="appointment-title">Citas de hoy:</h2>
          <span className="appointment-value">3</span>
        </div>
        <div className="appointment-title-value">
          <h2 className="appointment-title">Pendientes de pagar:</h2>
          <span className="appointment-value">3</span>
        </div>
        <div className="appointment-title-value">
          <h2 className="appointment-title">Ingresos de hoy:</h2>
          <span className="appointment-value">$1.000</span>
        </div>
      </section>
    </>
  );
};

export default AppointmentData;
