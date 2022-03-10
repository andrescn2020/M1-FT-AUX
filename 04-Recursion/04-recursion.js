// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10
// producto([7, 2, 5]) devuelve 70
const producto = function (array) {
  //escribe aqui tu codigo

  //if (array.length === 0) return 1
  //return array.shift() * producto(array)
  let resultado = 1;
  if(array.length === 1){
    resultado = array[0];
    return resultado;
  } 
  resultado = array[0];
  array.shift();
  return resultado * producto(array);
    
  
 
};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
//     school: {
//         hogwarts: {
//             headmaster:{
//               name: {
//                 first: "Albus",
//                 last: "Dumbledore"
//               }
//             }
//         }
//     }
// }
const isThere = function (obj, value) {
  //escribe aqui tu codigo
  // let key = Object.getOwnPropertyNames(obj);
  // if(typeof key === "object"){
  //   obj = key;
  //   isThere(obj, value);
  // }
  // if(typeof key === "string"){
  //   return true;
  // } else {
  //   return false;
  // }
  for (let key in obj) {
    if(typeof obj[key] === "object"){
      return isThere(obj[key], value);
    } else if(obj[key] === value) {
      return true
    }
    
  } 
  return false;

  //NO FUNCIONA EL DE ABAJO, HACERLO CON OBJECT.KEYS
  // let keys = Object.keys(obj);
  // resultado = keys.forEach(elem => {
  //   if(typeof obj[elem] === "object") return isThere(obj[elem], value);
  //   if(obj[elem] === value) return true;
  // });
  // console.log("resultado", resultado);
  // return false;

//   for (let key in obj) {
//     if(typeof obj[key] === "object") return isThere(obj[key], value);
//     else if (obj[key] === value) return true; 
//   }
// return false;

 
};
module.exports = { producto, isThere };
