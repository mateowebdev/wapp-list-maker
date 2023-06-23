import { useRef, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

export default function Header({ user, handleUser, handleTema, temaOscuro }) {
  const ref = useRef(null);
  const [nombre, setNombre] = useState(user);

  const handleChange = (event) => {
    setNombre(event.target.value);
  };
  const handleBlur = () => {
    handleUser(nombre);
  };
  const focusText = () => {
    ref.current.focus();
  };

  return (
    <div className="bg-wapp-verde dark:bg-dark-fondo-claro p-4  sticky top-0">
      <h1 className="text-white text-center text-xl font-bold">
        ListaMaker
      </h1>
      <div className="flex justify-between items-center">

      <button
        onClick={handleTema}
        className="flex gap-1 text-white rounded-full bg-white bg-opacity-20"
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
      </button>
      
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
          onBlur={handleBlur}
        />
        <BiUserCircle className="text-white text-2xl" onClick={focusText} />
      </div>
      </div>

    </div>
  );
}
