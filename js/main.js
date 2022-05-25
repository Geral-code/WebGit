const container = document.querySelector('.container');

//crear un parrafo
const parrafo = document.createElement('p');

//texto parrafo 
const textParrafo = document.createTextNode('mi parrafo');

//añadiendo el texto al parrafo
parrafo.appendChild(textParrafo);

//renderizando en  el Dom
container.append(parrafo);