import { useRef, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

export default function Header({
  user,
  handleUser,
  handleTema,
  temaOscuro,
  tooltip,
}) {
  const ref = useRef(null);
  const [nombre, setNombre] = useState(user);

  const handleChange = (event) => {
    setNombre(event.target.value);
    handleUser(event.target.value);
    localStorage.setItem("user", event.target.value);
  };

  const focusText = () => {
    ref.current.focus();
  };

  return (
    <div className="bg-wapp-verde dark:bg-dark-fondo-claro p-4 md:hidden">
      <h1 className="text-white text-center text-xl font-bold">ListaMaker</h1>
      <div className="flex justify-between items-center">
        <div
          onClick={handleTema}
          className="flex gap-1 text-white rounded-full bg-white bg-opacity-20 outline-none"
        >
          <FaRegMoon
            className={`transition-all duration-500 w-6 h-6 p-1 rounded-full  ${
              temaOscuro ? "bg-white bg-opacity-80 text-dark-fondo-claro" : ""
            }`}
          />
          <BsSun
            className={`transition-all duration-500 w-6 h-6 p-1 rounded-full  ${
              !temaOscuro ? "bg-white bg-opacity-80 text-wapp-verde" : ""
            }`}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            style={{ caretColor: "white" }}
            ref={ref}
            type="text"
            name="nombre"
            id="nombre"
            maxLength="20"
            className="bg-transparent text-white text-right placeholder-gray-300 focus:outline-none"
            placeholder="..."
            value={nombre}
            onChange={handleChange}
          />
          <BiUserCircle className="text-white text-2xl" onClick={focusText} />
          {tooltip && (
            <div className="bg-black text-white text-sm px-3 py-2 rounded absolute right-6 top-[70px]">
              Completa tu nombre acá ☝
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
