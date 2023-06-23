import { useRef, useState } from "react";

import { FiMap } from "react-icons/fi";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function Main({ user, evento, handleEvento }) {
  const formRef = useRef(null);
  const [link, setLink] = useState(false);

  const [detalleEvento, setDetalleEvento] = useState({
    nombre: evento.nombre,
    lugar: evento.lugar,
    maps: evento.maps,
    dia: evento.dia,
    hora: evento.hora,
    descripcion: evento.descripcion,
    listado: evento.listado,
    primero: evento.primero,
    listaBajas: evento.listaBajas,
  });

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
  } = detalleEvento;

  /* {
      nombre: "",
      lugar: "",
      maps: "",
      dia: "",
      hora: "",
      descripcion: "",
      listado: 0,
      primero: false,
      listaBajas: false,
    } */

  const handleAddLink = (e) => {
    e.preventDefault();
    if (link) {
      setDetalleEvento({
        ...detalleEvento,
        maps: "",
      });
    }
    setLink(!link);
  };

  const handleOpenMaps = () => {
    window.open("http://www.google.com/maps/place/", "_blank", "location=yes");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleEvento(detalleEvento);
  };

  const handleReset = () => {
    console.log(formRef);
    const limpio = {
      nombre: "",
      lugar: "",
      maps: "",
      dia: "",
      hora: "",
      descripcion: "",
      listado: 0,
      primero: false,
      listaBajas: false,
    };
    setDetalleEvento({
      ...detalleEvento,
      ...limpio,
    });
  };

  const addListado = () => {
    setDetalleEvento({
      ...detalleEvento,
      listado: detalleEvento.listado + 1,
    });
  };
  const subtractListado = () => {
    if (detalleEvento.listado === 0) return;
    setDetalleEvento({
      ...detalleEvento,
      listado: detalleEvento.listado - 1,
    });
  };

  const handleInput = (e) => {
    console.log("CHANGE");
    const campo = e.target.name;
    let valor = e.target.value;

    /* NORMALIZO DATOS */
    if (campo === "listado") {
      valor = parseInt(valor);
    }

    if (campo === "maps") {
      valor = valor.split(" ").find((item) => item.includes("https"));
    }

    setDetalleEvento({
      ...detalleEvento,
      [campo]: valor,
    });
  };

  const handleCheck = (e) => {
    const campo = e.target.name;
    let valor = e.target.checked;

    setDetalleEvento({
      ...detalleEvento,
      [campo]: valor,
    });
  };

  return (
    <div className="flex-grow text-gris dark:text-dark-gris  p-8">
      <form
        ref={formRef}
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="nombre">Evento *</label>
          <input
            name="nombre"
            value={nombre}
            onChange={(e) => handleInput(e)}
            id="nombre"
            type="text"
            required
            placeholder="Argentina vs Brasil"
            className="p-2 rounded bg-white dark:bg-dark-fondo-claro"
          />
        </div>
        <div className="flex flex-col items-end">
          <label htmlFor="lugar" className="w-full">
            Lugar
          </label>
          <input
            name="lugar"
            value={lugar}
            onChange={(e) => handleInput(e)}
            id="lugar"
            type="text"
            placeholder="Estadio Único LP"
            className="w-full p-2 rounded bg-white dark:bg-dark-fondo-claro"
          />
          {link && (
            <div className="w-full mt-1 ">
              <div className="flex items-center gap-2">
                <FiMap onClick={handleOpenMaps} className="text-xl" />
                <input
                  name="maps"
                  value={maps}
                  onChange={(e) => handleInput(e)}
                  id="maps"
                  type="text"
                  placeholder="https://goo.gl/maps/ArSjPtpW4dEr5DrD6"
                  className="flex-grow p-2 rounded bg-white dark:bg-dark-fondo-claro"
                />
              </div>
              <p>
                <small>Copia el link de Google Maps y pegalo.</small>
              </p>
            </div>
          )}
          <button
            onClick={handleAddLink}
            className="text-xs font-medium text-dark-wapp-verde dark:text-resalta"
          >
            {!link ? "Agregar link" : "Quitar link"}
          </button>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex-grow flex flex-col">
            <label htmlFor="dia">Dia</label>
            <input
              name="dia"
              value={dia}
              onChange={(e) => handleInput(e)}
              id="dia"
              type="date"
              className="p-2 rounded bg-white dark:bg-dark-fondo-claro"
            />
          </div>
          <div className="flex-grow flex flex-col">
            <label htmlFor="hora">Horario</label>
            <input
              name="hora"
              value={hora}
              onChange={(e) => handleInput(e)}
              id="hora"
              type="time"
              className="p-2 rounded bg-white dark:bg-dark-fondo-claro"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="descripcion">Descripción</label>
          <input
            name="descripcion"
            value={descripcion}
            onChange={(e) => handleInput(e)}
            id="descripcion"
            type="text"
            placeholder="Conseguir los paasajes con tiempo."
            className="p-2 rounded bg-white dark:bg-dark-fondo-claro"
          />
        </div>
        <div className="flex items-end">
          <div className="flex flex-col">
            <label htmlFor="listado">Listar numeros</label>
            <input
              name="listado"
              value={listado}
              onChange={(e) => handleInput(e)}
              id="listado"
              type="number"
              min="0"
              step="1"
              max="25"
              className="w-32 p-2 rounded bg-white dark:bg-dark-fondo-claro"
            />
          </div>
          <div className="flex gap-4 px-4 p-2">
            <AiOutlinePlusCircle
              onClick={addListado}
              className="text-2xl text-wapp-verde"
            />
            <AiOutlineMinusCircle
              onClick={subtractListado}
              className="text-2xl text-gray-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="primero"
            id="primero"
            value={primero}
            onChange={(e) => handleCheck(e)}
          />
          <label htmlFor="primero">Agregarme primero en la lista</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="listaBajas"
            id="listaBajas"
            value={listaBajas}
            onChange={(e) => handleCheck(e)}
          />
          <label htmlFor="listaBajas">Agregar listado de bajas</label>
        </div>
        <button
          type="submit"
          className="uppercase text-white rounded-full bg-wapp-verde font-medium p-2 active:bg-dark-wapp-verde active:"
        >
          Ver mensaje
        </button>
        <div className="flex">
          <button
            onClick={handleReset}
            type="reset"
            className="text-xs text-red-400"
          >
            Resetear campos
          </button>
        </div>
      </form>
    </div>
  );
}
