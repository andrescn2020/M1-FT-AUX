const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
BinarySearchTree.prototype.search= function(value){

//  if(this.right === null && this.left === null){
//      return 'no se encontró el valor';
//  }
//  if(this.value === value){
//      return this.value;
//  }

//  if(this.right && this.left === null){
//      if(this.right === value){
//          return this.right;
//      } else {
//         return this.right.search(value);
//      }
//  }

//  if(this.right === null && this.left){
//      if(this.left === value){
//          return this.left;
//      } else {
//        return this.left.search(value);
//      }
//  }

//  if(this.right && this.left){
//      if(value > this.left){
//        return this.right.search(value);
//      } else {
//        return this.left.search(value);
//      }
//  }

 if(value === this.value) return this.value;
 if(value < this.value && this.left !== null) return this.left.search(value);
 else if(value >= this.value && this.right !== null) return this.right.search(value);
 else return "no se encontró el valor";

}


// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0 
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)  (9)  (11)  (15)   ----> nivel 2

// Ejemplo       (3)           ----> nivel 0
//                 \
//                 (4)         ----> nivel 1
//                   \
//                   (5)       ----> nivel 2
//                     \ 
//                     (8)     ----> nivel 3
//                     / \
//                   (7)  (9)  ----> nivel 4

// Ejemplo       (3)           ----> nivel 0
//              /   \
//            (2)   (4)         ----> nivel 1
//                    \
//                    (5)       ----> nivel 2
//                      \ 
//                      (6)     ----> nivel 3
 
BinarySearchTree.prototype.height= function(){
  
    // if(this.right === null && this.left === null){
    //     return null;
    // }

    // if(this.right && this.left === null){
    //     return 1 + this.right.height();
        
    // }

    // if(this.left && this.right === null){
    //     return 1 + this.left.height();
    // }

    // if(this.right && this.left){
    //     return 1 + Math.max(this.right.height(), this.left.height());
    // }


    if(!this.left && !this.right) return 0;
    else {
        if(this.left && !this.right) return this.left.height() + 1;
        else if(!this.left && this.right) return this.right.height() + 1;
        else return Math.max(this.left.height() + 1, this.right.height() + 1)
    }


}

module.exports={
    BinarySearchTree
}