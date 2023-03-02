const result = window.prompt("Introduce tu animal favorito: ")
console.log(result)
document.getElementById('animal').innerHTML = result;

/* var nombre = window.prompt ("Escribe tu nombre, porfavor: ")
var numero = window.prompt("Escribe un número:")



document.write("Bienvenid@" + " " + nombre + " ")



if (numero % 2 == 0) {

    document.write('El numero introducido es par');

}

else { document.write('El numero introducido es impar'); } */

/* function palindromo(str) {
    const palindromoString = str.split("").reverse().join("");

    return palindromoString === str ? "es palindromo" : "no es palindromo";
}

console.log(palindromo("pedro")) */

let array = ["violeta", "naranja", "verde"];
let array2 = [];


for (const colors of array) {
    console.log(colors)
    array2.push(colors);
}

console.log(array2)

/* for (let i = 0; i < array.length; i++) {
    array2.push(array[i]);
  
}
console.log(array2)
 */
