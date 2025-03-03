document.write("Ejercicio 1: <br>");
const numero = prompt("Escribe un número:");
function potencias(num){
    for (let i = 1; i <= num; i++){
        document.write("Cuadrado: ", (i * i), '\n');
        document.write("Cubo: ", (i * i * i), '<br>'); 
    }
}
potencias(numero);


document.write("<br><br>Ejercicio 2<br>");

const num1 = Math.floor(Math.random() * 50);
const num2 = Math.floor(Math.random() * 50);
const respuesta = num1 + num2;

const inicio = new Date();
const intento = prompt(`Suma los números ${num1} y ${num2}`);
const fin = new Date()

const tiempo = ((fin - inicio)/1000).toFixed(2);

if (parseInt(intento) === respuesta) {
    document.write(`Correcto. `);
} else {
    document.write(`Incorrecto. `);
}
document.write(`Tiempo: ${tiempo} segundos.`);


document.write("<br><br>Ejercicio 3<br>");
function contador(arreglo){
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    for (let i = 0; i < 15; i++){
        if (arreglo[i] < 0){
             negativos++;
        } else if (arreglo[i] == 0){
            ceros++;
        } else {
            positivos++;
        }
    }
    document.write(`<br>Negativos: ${negativos}<br>Ceros: ${ceros}<br>Positivos: ${positivos}`);
}
let arr = [];
for (let i = 0; i < 15; i++) {
    arr[i] = Math.floor(Math.random() * 101) - 50;
}
for (let num of arr) {
    document.write(num + ", ");
}
contador(arr);


document.write("<br><br>Ejercicio 4<br>");
function promedio(mat){
let promedios = [];
    for (let i = 0; i < 4; i++) {
        let suma = 0;
        for (let j = 0; j < 4; j++) {
            suma += mat[i][j];
        }
        promedios[i] = suma / 4;
    }
    document.write("Promedios:<br>");
    for (let i = 0; i < 4; i++) {
        document.write(`Renglón ${i + 1}: ${promedios[i]}<br>`);
    }
}
let matriz = [];
for (let i = 0; i < 4; i++) {
    let renglon = [];
    for (let j = 0; j < 4; j++) {
        renglon[j] = Math.floor(Math.random() * 51);
    }
    matriz[i] = renglon;
}
for (let i = 0; i < 4; i++) {
    document.write(matriz[i].join(" "), "<br>");
}
promedio(matriz);


document.write("<br><br>Ejercicio 5<br>");
function inverso(norm){
    let numStr = norm.toString();
    let reves = numStr.split('').reverse().join('');
    return reves;
}
const normal = prompt("Escribe un número: ");
document.write("El invertido es: ", inverso(normal));

document.write("<br><br>Ejercicio 6<br>");
function primo(num){
    let prim = true;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if(num % i === 0){
            prim = false;
            break;
        }
    }
    if(prim === true){
        document.write("Es primo.");
    }else{
        document.write("No es primo.");
    }
}
function frac(num){
    document.write(" La fracción inversa en decimal es: ", 1/num);
}
const numerito = prompt("Escribe un número entre 0 y 50");
primo(numerito);
frac(numerito);