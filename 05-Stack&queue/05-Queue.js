// EJERCICIO 6
// Implementar la función controlAcces: a partir de una Queue que va a recibir como parámetro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function(queue, event){
    // Tu código aca:
    let permitidos = [];
    let registerTicket = [];
  while(queue.size() > 0){
    let persona = queue.dequeue();
    if(!registerTicket.includes(persona.ticket.number)){
      registerTicket.push(persona.ticket.number);
      if(persona.age >= 18){
        if(persona.ticket.number > 0){
          if(persona.ticket.event === event){
            permitidos.push(persona.fullname);
          }
        }
      }
    }
  }
return permitidos;

  // let ingresantes = [];
  // let numTickets = [];
  // while(queue.size()){
  //   let persona = queue.dequeue();
  //   if(persona.age >= 18 && persona.ticket.event === event && !numTickets.includes(persona.ticket.number)){
  //     ingresantes.push(persona.fullname);
  //     numTickets.push(persona.ticket.number);
  //   }
  // }
  // return ingresantes;
  };
      
  

  module.exports = {
    controlAcces,
   
}