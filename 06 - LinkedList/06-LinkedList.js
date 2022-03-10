const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size=function(){
      if(this.head === null){
        return 0;
      }
      let current = this.head;
      let count = 1;
      while(current.next){
        current = current.next;
        count++;
      }
      return count;

    //return this.lenM
  }

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [1]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] -->      [4]   -->    [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
    // Tu código aca:

    if(this.head === null){
      return this.head;
    }

    let current = this.head;
    while(current.next){
        if(current.value < current.next.value){
          let aux = current.next.value;
          current.next.value = current.value;
          current.value = aux;
          current = this.head;
        } else {
          current = current.next;
        }
      }
   }  

  //  let array = [];
  //  let current = this.head;

  //  while(current){
  //    array.push(current.value);
  //    current = current.next;
  //  }

  //  array = array.sort((a, b) => b - a)
  //  this.head = null;

  //  for (let num of array) {
  //    this.add(num);
  //  }

  //  array.array.forEach(num => {
  //    this.add(num);
  //  });

  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 1
   
  // 1-->2-->3-->2.5-->4   2.5 pos=1  newnodo= 2.5-->4   curr=3   
LinkedList.prototype.insert = function(data,pos) {

  let current = this.head;
  let recorrido = 0;
  let aux = 0;
  while(current.next){
    if(recorrido === pos){
      aux = current.value;
      current.value = data;
    }
    current = current.next;
    recorrido++;
  }
  if(current.next === null){
    current.next = new Node(aux);
  }


}

module.exports={
  LinkedList
}



