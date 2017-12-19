// Manera anterior de definir uns funcion de ES5
const square = function(x) {
    return x*x;
};

// Manera de definir una arrowfunction no se puede defirnir el nombre aka siempre son anonimas
// a menos que se les asigne una variable
const squareArrow = (x) => {
    return x*x;
};

console.log(square(8));
console.log(squareArrow(9)); 

// No se necesita usar la palabra return
const squareArrowDos = (x) => x*x;

console.log(squareArrowDos(3));