'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //  determino las variables del pivot y los laterales izq y der
  let pivot = array[0]
  let left = []
  let right = []

  if (array.length <= 1) {
    return array
  }
  //  recorro el array segun el metodo  [5, 1, 4, 2, 8]
  //  si [i] es mayor que pivot va a la derecha, si es menor va la izquierda
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right))

}
//  ============================================================================================================
//  Metodo mergeSort

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  // Caso de corte
  if (array.length === 1)  return array ;

  //  División del array
  let mitad = Math.floor(array.length/2);
  let left = array.slice(0,mitad);
  let right = array.slice(mitad);

  //  recursion para evaluar
  return merge(mergeSort(left),mergeSort(right));
}

//  merge
function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let array = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array.push(left[leftIndex])
      leftIndex++;
    } else {
      array.push(right[rightIndex])
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
