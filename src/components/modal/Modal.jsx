import { MdClose } from "react-icons/md";
export default function Modal({ evento, handleModal }) {
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
        {maps && <p>{maps}</p>}
        {dia && (
          <p>
            📆 {new Date(dia.replaceAll("-", "/")).toLocaleDateString()} |{" "}
            {hora} hs
          </p>
        )}
        {descripcion && <p>{descripcion}</p>}
      </div>
      <button className="uppercase rounded-full bg-wapp-verde font-medium p-2">
        Compartir mensaje
      </button>
      <MdClose onClick={handleModal} className="text-3xl text-white" />
    </div>
  );
}
