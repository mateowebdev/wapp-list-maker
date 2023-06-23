import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import fondo from "./assets/wapp-bg.png";

function App() {
  const [temaOscuro, setTema] = useState(false);
  const [user, setUser] = useState("");
  const [evento, setEvento] = useState({
    nombre: "",
    lugar: "",
    maps: "",
    dia: "",
    hora: "",
    descripcion: "",
    listado: 0,
    primero: false,
    listaBajas: false,
  });

  const handleUser = (nombre) => {
    setUser(nombre);
    console.log(user);
  };

  const handleTema = () => {
    setTema(!temaOscuro);
  };

  const handleEvento = (evento) => {
    setEvento((prev) => ({ ...prev, ...evento }));
    console.log(evento);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        temaOscuro ? "dark bg-dark-fondo" : "bg-fondo"
      }`}
      style={{
        minHeight: "100svh",
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header
        user={user}
        handleUser={handleUser}
        handleTema={handleTema}
        temaOscuro={temaOscuro}
      />
      <Main evento={evento} handleEvento={handleEvento} />
    </div>
  );
}

export default App;
