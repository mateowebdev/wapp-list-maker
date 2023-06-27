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
  user
) {
  const lista = Array.from({ length: listado }, (v, i) => i + 1);

  const NOMBRE_EVENTO = `*${nombre.toUpperCase()}*`;
  const LUGAR_EVENTO = `${lugar.length > 3 ? "📍 "+lugar : "📍 Lugar a definir."}`;
  const LINK_EVENTO = `${maps ? maps : ""}`;

  const DIA_EVENTO = `${dia ? "📅 "+dia : "📅 Fecha a definir."}`;
  const HORARIO_EVENTO = `${hora ? "⏰ "+hora+ " hs" : ""}`;
  const FECHA_EVENTO = `${DIA_EVENTO} ${HORARIO_EVENTO}`;

  const DESCRIPCION_EVENTO = `${descripcion ? "📝 "+descripcion : ""}`;

  const LISTADO_EVENTO = `${lista
    .map((item, index) => {
      if (index === 0 && user) {
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
  
  
  _Creado con: https://wapp.com_`;

  const mensaje = `${NOMBRE_EVENTO}${LUGAR_EVENTO}${LINK_EVENTO}${FECHA_EVENTO}${DESCRIPCION_EVENTO}${LISTADO_EVENTO}${BAJAS_EVENTO}${FOOTER}`;

  const crearMsgWap = () => {
    return mensaje;
  };

  return {
    crearMsgWap,
  };
}
