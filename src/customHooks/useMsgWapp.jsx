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
  const LUGAR_EVENTO = `${lugar.length > 0 && "📌 " + lugar.trim()}`;
  const LINK_EVENTO = `${maps.trim() !== "" && maps.trim()}`;

  const DIA_EVENTO = `${dia && "📅 " + fechaParseada + " "}`;
  const HORARIO_EVENTO = `${hora && "⏰ " + hora.trim() + " hs"}`;
  const FECHA_EVENTO = [DIA_EVENTO, HORARIO_EVENTO]
    .filter((item) => item !== "false" && item !== "")
    .join("");

  const DESCRIPCION_EVENTO = `${
    descripcion && "📝 _" + descripcion.trim() + "_"
  }`;

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

  const FOOTER = `_Creado con: ${url}_`;

  const mensaje = [
    NOMBRE_EVENTO,
    LUGAR_EVENTO,
    LINK_EVENTO,
    FECHA_EVENTO,
    DESCRIPCION_EVENTO,
    SALTO_LINEA,
    LISTADO_EVENTO,
    BAJAS_EVENTO,
    SALTO_LINEA,
    SALTO_LINEA,
    FOOTER,
  ]
    .filter((section) => section !== "false" && section !== "")
    .join(SALTO_LINEA);

  console.log(typeof LINK_EVENTO);

  const crearMsgWap = () => {
    return mensaje;
  };

  return {
    crearMsgWap,
  };
}
