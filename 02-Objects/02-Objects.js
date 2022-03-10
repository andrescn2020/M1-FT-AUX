// Actividad 1
function crearClaseLibro() {
  class Libro {
    constructor(titulo, autor, traducciones) {
      // El constructor de la clase Libro recibe titulo (string), autor (string), traducciones (array de objetos)
      // Inicializar las propiedades del libro con los valores recibidos como argumento
      // Tu código aca:
      this.titulo = titulo,
      this.autor = autor,
      this.traducciones = traducciones
    }

    getTitulo() {
      // este método debe retornar el titulo del libro.
      // Tu código aca:
      return this.titulo;
      
    }

    getAutor() {
      // El método debe retornar nombre y apellido del autor
      // Tu código aca:
      return this.autor;
      
    }

    addTraduccion(idioma, editorial) {
      // El método recibe un string 'idioma' y un string 'editorial' y debe agregar un objeto:
      // { idioma: idioma, editorial: editorial} al arreglo de traducciones del libro.
      // No debe retornar nada.
      // Tu código aca:
      this.traducciones.push({idioma, editorial})

    }

    getTraducciones() {
      // El método debe retornar un arreglo con sólo los idiomas del arreglo de traducciones del libro.
      // Ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getTraducciones() debería devolver ['inglés', 'castellano']
      // Tu código aca:
      let array = [];
      this.traducciones.forEach(element => {
        if(typeof element === "object"){
          array.push(element.idioma)
        }
      });
      // Con for normal ---------------------------------------------------
      // for (let i = 0; i < this.traducciones.length; i++) {
      //   array.push(this.traducciones[i].idioma)
      // }
      return array;
    }

    getAlcance() {
      // El metodo debe retornar la cantidad de idiomas en la que esta traducido el libro.
      // Dato: no se repiten ni los idiomas ni las editoriales
      // ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getAlcance() deberia devolver 2
      // Tu código aca:
      let idiomas = new Set(this.getTraducciones())
      return idiomas.size;
  //     let count = 0;
  //     this.traducciones.forEach(element => {
  //       if(typeof element === "object"){
  //         if(element.hasOwnProperty("idioma")){
  //           count++;
  //         }
  //       }
  //     });
  //     return count;
     }
   }

  return Libro;
}

//Objeto de ejemplo:
// const hogwarts = {
//   staff: {
//     headmaster: {
//       name: "Albus Percival Wulfric Brian Dumbledore",
//     },
//     keeperOfKeys: {
//       name: "Rubeus Hagrid",
//     },
//    potionsMaster: {
//       name: "Severus Snape",
//     },
//   },
// };
const printStaff = function (objeto) {
  // Retornar un arreglo que contenga los strings indicando el titulo y nombre de cada miembro del staff
  // de esta forma "The headmaster is Albus Percival Wulfric Brian Dumbledore" 
  // el arreglo debe mantener el orden que posee el staff del objeto.
  let props = Object.keys(objeto.staff);
  let array = [];
  props.forEach(element => {
    array.push(`The ${element} is ${objeto.staff[element].name}`)
  });

  // let array = [];
  // for (let prop in objeto.staff) {
  //   array.push("The "  + prop + " is "  + objeto.staff[prop].name)
  // }
 
  // array.push("The headmaster is " + objeto["staff"]["headmaster"].name);
  // array.push("The keeperOfKeys is " + objeto["staff"]["keeperOfKeys"].name);
  // array.push("The potionsMaster is " + objeto["staff"]["potionsMaster"].name);
  // array.push("The headOfGryffindor is " + objeto["staff"]["headOfGryffindor"].name);

  return array;
  
};

module.exports = { crearClaseLibro, printStaff };
