import { useState } from "react";

export default function Main() {
  const [link, setLink] = useState(false);

  const handleAddLink = (e) => {
    e.preventDefault();
    setLink(!link)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-gris dark:text-dark-gris flex-grow p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="">Evento</label>
          <input
            type="text"
            placeholder="Argentina vs Brasil"
            className="p-2 rounded dark:bg-dark-fondo-claro"
          />
        </div>
        <div className="flex flex-col items-end">
          <label htmlFor="" className="w-full">
            Lugar
          </label>
          <input
            type="text"
            placeholder="Estadio Único LP"
            className="w-full p-2 rounded dark:bg-dark-fondo-claro"
          />
          {link && (
            <input
              type="text"
              placeholder="https;//maps.com"
              className="mt-1 w-full p-2 rounded dark:bg-dark-fondo-claro"
            />
          )}
          <button
            onClick={handleAddLink}
            className="text-xs font-medium text-dark-wapp-verde dark:text-resalta"
          >
            {!link ?"Agregar link" : "Quitar link"}
          </button>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex-grow flex flex-col">
            <label htmlFor="">Dia</label>
            <input
              type="date"
              className="p-2 rounded dark:bg-dark-fondo-claro"
            />
          </div>
          <div className="flex-grow flex flex-col">
            <label htmlFor="">Horario</label>
            <input
              type="time"
              className="p-2 rounded dark:bg-dark-fondo-claro"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Descripción</label>
          <input
            type="text"
            placeholder="Conseguir los paasajes con tiempo."
            className="p-2 rounded dark:bg-dark-fondo-claro"
          />
          <small>Opcional</small>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Listado de números</label>
          <input
            type="number"
            name=""
            id=""
            className="w-32 p-2 rounded dark:bg-dark-fondo-claro"
          />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label htmlFor="">Agregarme primero en la lista</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label htmlFor="">Agregar listado de bajas</label>
        </div>
        <button type="submit" className="uppercase rounded-full bg-wapp-verde font-medium p-2">Ver mensaje</button>
        <div className="flex">
          <button className="text-xs text-red-400">Resetear campos</button>
        </div>
      </form>
    </div>
  );
}
