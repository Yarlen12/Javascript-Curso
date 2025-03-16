const parent = document.getElementById("parent");
console.log(parent); // Obtiene el elemento con id "parent", pero no sus hijos directamente.
// Para acceder a los hijos, puedes usar: parent.children o parent.childNodes.
const children = parent.children;
console.log(children); // Nos va a traer una coleccion de elementos, estamos pidiendo que nos traiga a sus hijos.

const firstChild = parent.firstElementChild; // Asi es como se trae al primer hijo
console.log(firstChild);

const lastChild = parent.lastElementChild;
console.log(lastChild); // Para que pueda llegar al ultimo elemento

const previousSibling = parent.previousElementSibling;
console.log(previousSibling); // Para llegar a un familiar antes

const nextSibling = parent.nextElementSibling;
console.log(nextSibling); // Para llegar al siguiente familiar, en este caso sera un section ya que esta despues de child y de parents y es hermano del padre

// Lista de ciertos elementos, son ciertos metodos para utilizar para seguir navegando el DOM

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElemetSibling;  // non-live HTMLCollection

const children2 = document.querySelector("li");
console.log(children2); // Nos arrojara el primer li que tiene un dato de home

const parent2 = children2.parentNode; // quiero que me traigas al nodo que es el padre del elemento seleccionado que es el children, que nos traera todos los elementos
console.log(parent2);

const grandParent = children2.parentElement;
console.log(grandParent); // Estamos pidiendo que nos traiga al elemento padre que de igual forma el elemento padre va a ser la misma lista

const grandGrandParent = children2.closest("menu");
console.log(grandGrandParent); // que nos traiga al bis abuelo estamos utilizando closets que es el elemento mas cercano que se parezca o sea un elemento de menu

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("app-title"); // Para seleccionar un elemento de id
// document.querySelector("#app-title"); // Esta es la forma de la que nosotros seleccionamos o podemos tener acceso a elementos que son unicos
// document.querySelector("p"); // Para que me traiga una etiqueta de elemento p, solo me traera un solo elemento, no todos
// document.querySelectorAll("p"); // De esta forma me traera todas las etiquetas de elemento p
// document.getElementsByClassName("menu-items"); // Le estamos pidiendo que nos traiga todos los elementos con el n ombre de la clase menu items
// document.getElementsByTagName("p"); // Tambien de esta forma traera todos los elemento con la etiqueta p
// document.querySelectorAll(".menu-items"); // Es importante poner el punto al inicio ya que es el punto de referencia, de esta forma traera a todos los selectores de menu items, en este caso nos puede traer texto, dependiendo de lo que hagamos son los elementos que nos va a traer
