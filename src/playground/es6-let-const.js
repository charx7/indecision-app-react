// Ejemplo problemas de var
var nameVar = 'Charx';
nameVar = 'Mike';
console.log('nameVar', nameVar);


// Ahora usando Let
let nameLet = 'Jen';
// Reasignacion de la variable
nameLet = 'Julie';
console.log('namelet', nameLet);

// Ahora usando const no se puede redefinir
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Funcion para definir los Scopes
function getPetName() {
    var petName = 'Mi gatito hall';
    return petName;
}

// Aunque tengan el mismo nombre no deja acceder por el nivel del scope
const petName =  getPetName();
console.log(petName);

// Ejemplo de scope con var, let y const dentro de funciones if for etc
var fullName = 'Carlos Huerta';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

// No se puede acceder con const o let solo con var porque son scoped por bloques
console.log(firstName);
