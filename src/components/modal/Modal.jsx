import useMensageWap from "../../customHooks/useMsgWapp";

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

  const { crearMsgWap } = useMensageWap(
    nombre,
    lugar,
    maps,
    dia,
    hora,
    descripcion,
    listado,
    primero,
    listaBajas,
    user
  ); // mandar parametros

  const handleShare = async () => {
    const mensaje = crearMsgWap();
    //const url = `https://wa.me/5492995965043?text=${mensaje}`;
    //window.open(url, "_blank");

    if (navigator.share) {
      await navigator
        .share({
          title: "Nuevo evento",
          text: mensaje,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error in sharing", error));
    } else {
      console.log(`system does not support sharing files.`);
    }
  };

  return (
    <div
      className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm w-full h-screen p-5 absolute flex flex-col justify-center items-center gap-4"
      style={{
        minHeight: "100svh",
      }}
    >
      <div className="bg-fondo-claro dark:bg-dark-fondo-claro dark:text-dark-gris rounded w-full p-4">
        <p className="font-bold uppercase">{nombre}</p>
        {lugar && <p>📍 {lugar}</p>}
        {maps && <p className="text-blue-400">{maps}</p>}
        {dia && (
          <p>
            <span>
              📆 {new Date(dia.replaceAll("-", "/")).toLocaleDateString()}{" "}
            </span>
            {hora && <span>| {hora} hs</span>}
          </p>
        )}
        {descripcion && <p className="italic">📝 {descripcion}</p>}
        <br></br>
        {lista.length > 0 && primero
          ? lista.map((item, index) => {
              if (index === 0) {
                return (
                  <p key={item + index}>
                    {item}. {user}
                  </p>
                );
              } else {
                return <p key={item + index}>{item}. </p>;
              }
            })
          : ""}
        {!primero &&
          lista.length > 0 &&
          lista.map((item, index) => <p key={item + index}>{item}. </p>)}
        {listaBajas && (
          <>
            <p>------------------------------</p>
            <p>👎 Bajas: </p>
          </>
        )}
      </div>
      <button
        onClick={handleShare}
        className="w-full uppercase rounded-full bg-wapp-verde font-medium p-2"
      >
        Compartir mensaje
      </button>
      <MdClose onClick={handleModal} className="text-3xl text-white" />
    </div>
  );
}
