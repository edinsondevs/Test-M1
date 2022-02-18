'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value
  this.right = null
  this.left = null
}

BinarySearchTree.prototype.insert = function(value){
  // mayores ? DERECHA
  // menores ? IZQUIERDA  
  if(value > this.value){ 
    // VA A LA DERECHA
    if (this.right !== null) {
      this.right.insert(value);
    }
    else{
      this.right = new BinarySearchTree(value)
    }
  } else{
    // VA A LA IZQUIERDA
      if (this.left !== null) {
          this.left.insert(value);
        }
        else{
          this.left = new BinarySearchTree(value)
        }
  }
 
}
BinarySearchTree.prototype.contains = function (value) {
  if(value === this.value) return true;

  if(value > this.value){ 
    //  Busca a la derecha
    if (this.right === null) {
      return false
    } else {
      return this.right.contains(value)
    }
  }
  if(value < this.value){ 
    // Busca a la izquierda
    if (this.left === null) {
      return false
    } else {
      return this.left.contains(value)
    }
  }
}
BinarySearchTree.prototype.depthFirstForEach = function (recorrido, order) {
  if (!order || order === 'in-order') {
    if(this.left) this.left.depthFirstForEach(recorrido, order);
    recorrido(this.value)
    if(this.right) this.right.depthFirstForEach(recorrido, order);
  }

  if(order==='pre-order'){
    recorrido(this.value)
    if(this.left) this.left.depthFirstForEach(recorrido, order);    
    if(this.right) this.right.depthFirstForEach(recorrido, order);
  }

  if(order==='post-order'){
    if(this.left) this.left.depthFirstForEach(recorrido, order);    
    if(this.right) this.right.depthFirstForEach(recorrido, order);
    recorrido(this.value)
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function (bread, array=[]) {
  bread(this.value);
  if (this.left) array.push(this.left)
  if (this.right) array.push(this.right)
  let existeNodo = array.shift();
  if(existeNodo) existeNodo.breadthFirstForEach(bread,array)
}


BinarySearchTree.prototype.size = function () {

  if (this.right === null && this.left === null) return 1;
  if (this.right === null && this.left !== null) return 1 + this.left.size();
  if (this.right !== null && this.left === null) return 1 + this.right.size();
  if (this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size();
  

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
