import { useRef, useState } from "react";
import { BiUserCircle } from "react-icons/bi";

export default function Header({ user, handleUser, handleTema }) {
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
    <div className="bg-wapp-verde dark:bg-dark-fondo-claro p-4 flex justify-between items-center">
      <h1 onClick={handleTema} className="text-white text-xl font-bold">
        ListaMaker
      </h1>
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
  );
}
