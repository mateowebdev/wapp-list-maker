import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

export default function Footer({ handleTema, temaOscuro }) {
  return (
    <div className="bg-wapp-verde dark:bg-dark-fondo-claro text-white p-4">
      <button onClick={handleTema} className="flex gap-1 rounded-full bg-white bg-opacity-20">
        <FaRegMoon className={`transition-all duration-500 w-6 h-6 p-1 rounded-full  ${temaOscuro ? "bg-white bg-opacity-80 text-dark-fondo-claro" : ""}`}/>
        <BsSun className={`transition-all duration-500 w-6 h-6 p-1 rounded-full  ${!temaOscuro ? "bg-white bg-opacity-80 text-wapp-verde" : ""}`}/>
      </button>
    </div>
  )
}
