const Crud = () => {
  return (
    <>
      <table className="bg-neutral-400 m-w-120 shadow-2xl rounded-2xl">
        <thead className=" border-b-1">
          <tr className="bg-red-400">
            <th className="th rounded-tl-2xl">Cliente</th>
            <th className="th">Servicio</th>
            <th className="th">Precio</th>
            <th className="th">Fecha</th>
            <th className="th">Pago</th>
            <th className="th rounded-tr-2xl">Acciones</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="text-center ">
            <td className="">Calet Devia</td>
            <td className="td">Corte de cabello + barba</td>
            <td className="td">$25.000</td>
            <td className="td">02/08/2025</td>
            <td className="td">Pagado</td>
            <td className="td">✏ 🗑</td>
          </tr>
          <tr className="text-center">
            <td className="td">Ronald Devia</td>
            <td className="td">Corte de cabello</td>
            <td className="td">$18.000</td>
            <td className="td">07/08/2025</td>
            <td className="td">Pagado</td>
            <td className="td">✏ 🗑</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Crud;
