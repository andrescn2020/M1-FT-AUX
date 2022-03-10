const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA
//   Mar Azulado: raM odaluzA


function efectoEspejo(str){  
    //     //tu codigo aqui
    
    // let espejo = new Stack();
    // let fraseFinal = "";
    // let pal = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     if(str[i] !== " "){
    //         pal += str[i]
    //     } else {
    //         espejo.push(pal);
    //         pal = "";
    //     }
    //     if (i === 0){
    //         espejo.push(pal)
    //     }
    // }
    // for (let j = espejo.size(); j > 0; j--) { 
    //     fraseFinal += espejo.pop() + " ";   
    // }
    // fraseFinal = fraseFinal.substring(0, str.length);
    // return fraseFinal;
    
    let reverse = new Stack();
    let aux = "";

    for (let i = 0; i < str.length; i++) {
        if(str[i] === " "){
            while(reverse.size()){
                aux += reverse.pop();
            }
            aux+=str[i];
        } else {
            reverse.push(str[i])
        }
    }

    while(reverse.size()) aux += reverse.pop();

    return aux;
};








module.exports = {
    efectoEspejo,
   
}