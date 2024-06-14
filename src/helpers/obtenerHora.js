const obtenerHora = () => {
   let ahora = new Date();
   let horas = ahora.getHours();
   let minutos = ahora.getMinutes();
   let segundos = ahora.getSeconds();
   minutos = minutos < 10 ? "0" + minutos : minutos;
   segundos = segundos < 10 ? "0" + segundos : segundos;
   let horaFormateada = `${horas}:${minutos}:${segundos}`;
   return horaFormateada;
};
module.exports = { obtenerHora };
