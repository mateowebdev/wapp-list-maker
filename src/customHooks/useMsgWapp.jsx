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
  const pesos = Intl.NumberFormat("es-AR");
  const cantidades = pizzasEncargadas.map((pizza) => pizza.cantidad);
  const pizzasTotales = cantidades.reduce((a, b) => a + b, 0);

  const lista = Array.from({ length: listado }, (v, i) => i + 1);


  const NOMBRE_EVENTO = `${nombre}%0D%0A%0D%0A`;
  const LUGAR_EVENTO = `%0D%0A📍 ${lugar}%0D%0A`;
  const LINK_EVENTO = `%0D%0A${maps}%0D%0A`;
  const DIA_EVENTO = `%0D%0A📅 ${dia}%0D%0A`;
  const HORARIO_EVENTO = `%0D%0ALISTADO PIZZAS (${hora})%0D%0A`;
  const DESCRIPCION_EVENTO = `%0D%0A📝 ${descripcion}%0D%0A`;
  const LISTADO_EVENTO = `%0D%0A${lista
    .map(
      (item, index) =>{
        if (index === 0 && user) {
            return `${item}. %0D%0A`
        }
      }
    )
    .join("")}`;
  const LINEAS = `-----------------------------`;
  const BAJAS_EVENTO = `%0D%0ALISTADO PIZZAS (${pizzasTotales})%0D%0A`;


  const FOOTER = `%0D%0A%0D%0A_Creado con: https://wapp.com_`;

  const mensaje = `${NOMBRE_EVENTO}`;

  const crearMsgWap = () => {
    return mensaje;
  };

  return {
    crearMsgWap,
  };
}
