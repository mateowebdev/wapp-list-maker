import { MdClose } from "react-icons/md";
export default function Modal({ user, evento, handleModal }) {
  const {
    nombre,
    lugar,
    maps,
    dia,
    hora,
    descripcion,
    listado,
    primero,
    listaBajas,
  } = evento;

  const lista = Array.from({ length: listado }, (v, i) => i + 1);

  return (
    <div
      className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm w-full h-full p-5 absolute flex flex-col justify-center items-center gap-4"
      style={{
        minHeight: "100svh",
      }}
    >
      <div className="bg-fondo-claro dark:bg-dark-fondo-claro dark:text-dark-gris rounded w-full p-4">
        <p className="font-bold uppercase">{nombre}</p>
        {lugar && <p>🚩 {lugar}</p>}
        {maps && <p className="text-blue-400">{maps}</p>}
        {dia && (
          <p>
            📆 {new Date(dia.replaceAll("-", "/")).toLocaleDateString()} |{" "}
            {hora} hs
          </p>
        )}
        {descripcion && <p className="italic">📝 {descripcion}</p>}
        <br></br>
        {lista.length > 0 && primero
          ? lista.map((item, index) => {
              if (index === 0) {
                return (
                  <p>
                    {item}. {user}
                  </p>
                );
              } else {
                return <p>{item}. </p>;
              }
            })
          : ""}
        {!primero && lista.length > 0 && lista.map((item) => <p>{item}. </p>)}
        {listaBajas && <>
            <p>------------------------------</p>
            <p>👎 Bajas: </p>
        </>}
      </div>
      <button className="uppercase rounded-full bg-wapp-verde font-medium p-2">
        Compartir mensaje
      </button>
      <MdClose onClick={handleModal} className="text-3xl text-white" />
    </div>
  );
}
