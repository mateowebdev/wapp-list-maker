import { MdClose } from "react-icons/md";
export default function Modal({evento, handleModal }) {
  return (
    <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm w-full min-h-screen p-5 absolute flex flex-col justify-center items-center gap-4">
      <div className="bg-fondo-claro rounded w-full p-4">
        <h1>{evento.nombre}</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
        <h1>Modal</h1>
      </div>
      <button className="uppercase rounded-full bg-wapp-verde font-medium p-2">Compartir mensaje</button>
      <MdClose onClick={handleModal} className="text-3xl text-white" />
    </div>
  );
}
