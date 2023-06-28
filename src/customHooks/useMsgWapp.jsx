export default function useMensageWap(
  nombre,
  lugar,
  maps,
  dia,
  hora,
  descripcion,
  listado,
  primero,
  listaBajas,
  user,
  url
) {
  const lista = Array.from({ length: listado }, (v, i) => i + 1);

  const semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const diaJs = new Date(dia.replaceAll("-", "/"));
  const fechaParseada = `${
    semana[diaJs.getDay()]
  } ${diaJs.toLocaleDateString()}`;

  const SALTO_LINEA = `
`;

  const NOMBRE_EVENTO = `*${nombre.toUpperCase().trim()}*`;
  const LUGAR_EVENTO = `${
    lugar.length > 3 ? "📌 " + lugar.trim() : "📌 Lugar a definir."
  }`;
  const LINK_EVENTO = `${maps ? maps.trim() : ""}`;

  const DIA_EVENTO = `${dia ? "📅 " + fechaParseada : "📅 Fecha a definir."}`;
  const HORARIO_EVENTO = `${hora ? "| ⏰ " + hora.trim() + " hs" : ""}`;
  const FECHA_EVENTO = `${DIA_EVENTO} ${HORARIO_EVENTO}`;

  const DESCRIPCION_EVENTO = `${
    descripcion ? "📝 _" + descripcion.trim() + "_" : ""
  }
  
`;

  const LISTADO_EVENTO = `${lista
    .map((item, index) => {
      if (index === 0 && primero) {
        return `${item}. ${user}
`;
      } else {
        return `${item}. 
`;
      }
    })
    .join("")}`;

  const BAJAS_EVENTO = `-----------------------------
👎 Bajas:`;

  const FOOTER = `  

_Creado con: ${url}_`;

  // const mensaje = NOMBRE_EVENTO+LUGAR_EVENTO+LINK_EVENTO+FECHA_EVENTO+DESCRIPCION_EVENTO+LISTADO_EVENTO+`${listaBajas ? BAJAS_EVENTO : ''}`+FOOTER;

  const mensaje = [NOMBRE_EVENTO, LUGAR_EVENTO, LINK_EVENTO, FECHA_EVENTO].join(
    SALTO_LINEA
  );

  const crearMsgWap = () => {
    return mensaje;
  };

  return {
    crearMsgWap,
  };
}
