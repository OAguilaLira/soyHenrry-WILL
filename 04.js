/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let normal = [], reves = [], numero = num, sonIguales = true;

  // Transforma el número ingresado en dos arrays, uno en el mismo orden y el otro en orden inverso
  while(numero > 0){
    normal.push(numero % 10);
    reves.unshift(numero % 10);
    numero = ~~(numero / 10);
  }

  // Revisar si ambos array son iguales
  for (let i = 0, j = normal.length - 1; i < normal.length; i++,j--){
    if (normal[i] !== reves[i]){
      sonIguales = false
      break;
    }
  }
  return sonIguales;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico