'use strict'

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // Array [5, 1, 4, 2, 8]
            
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if(array[j] > array[j + 1]){
        let bubble = array[j];
        array[j] = array[j + 1];
        array[j + 1] = bubble;
      }
    }
  }
  return array;
};



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

 for (let i = 1; i < array.length; i++) {
   let aux = array[i];
   for (let j = 0; j < i; j++) {
      if(aux < array[j]){
        aux = array[j];
        array[j] = array[i];
        array[i] = aux;
      }
   } 
 }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let current = i;
    for (let j = i + 1; j < array.length; j++) {
      if(min > array[j]){
        min = array[j];
        current = j;
      }
    }
    if(current !== i){
      array[current] = array[i];
      array[i] = min;
    }
  }
  return array;
}


function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

   if(array.length <= 1) return array

   let pivot = Math.floor(Math.random()*array.length) 
   let right = [];
   let left = [];

   for (let i = 0; i < array.length; i++) {
     if(i !== pivot){
       if(array[i] < array[pivot]) left.push(array[i])
       else right.push(array[i])
     }
   }
   return [].concat(quickSort(left), array[pivot], quickSort(right))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length <= 1) return array

  let index = Math.floor(array.length / 2);
  let left = array.slice(0, index);
  let right = array.slice(index);

  return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right){
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;
  while(indexLeft < left.length && indexRight < right.length){
    if(left[indexLeft] < right[indexRight]){
      result.push(left[indexLeft])
      indexLeft++;
    } else {
      result.push(right[indexRight])
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};