import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import fondo from "./assets/wapp-bg.png";
import Modal from "./components/modal/Modal";

function App() {
  const [temaOscuro, setTema] = useState(JSON.parse(localStorage.getItem("theme")) || false);
  const [user, setUser] = useState(localStorage.getItem("user") || "");
  const [evento, setEvento] = useState({
    nombre: "",
    lugar: "",
    maps: "",
    dia: "",
    hora: "",
    descripcion: "",
    listado: 1,
    primero: false,
    listaBajas: false,
  });
  const [modal, setModal] = useState(false);

  const handleUser = (nombre) => {
    setUser(nombre);
    console.log(user);
  };

  const handleTema = () => {
    localStorage.setItem("theme",!temaOscuro);
    setTema(!temaOscuro);
  };
  const handleModal = () => {
   
    setModal(!modal);
  };

  const handleEvento = (evento) => {
    setEvento((prev) => ({ ...prev, ...evento }));

    if (evento.primero && user==="") {
      alert("Agrega tu nombre en la barra superior, haciendo click en el icono de usuario.")
     return 
    }

    setModal(!modal)
    console.log(evento);
  };


  return (
    <div
      className={`h-screen flex flex-col ${
        temaOscuro ? "dark bg-dark-fondo" : "bg-fondo"
      }`}
      style={{
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
      <Main user={user} evento={evento} handleEvento={handleEvento} />
      {modal && <Modal user={user} evento={evento} handleModal={handleModal}/>}
    </div>
  );
}

export default App;
