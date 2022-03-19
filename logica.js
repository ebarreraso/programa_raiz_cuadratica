'use strict'

function calcularPrimos(){

    document.getElementById('esPrimo').innerHTML = "";
    document.getElementById('posicionNumero').innerHTML = "";
    document.getElementById('multiXDigi').innerHTML = "";
    document.getElementById('condicion').innerHTML = "";

    //Valor ingresado por el usuario
    let numeroIngresado = document.getElementById('arrayPri').value;

    if(esPrimo(numeroIngresado)){
        document.getElementById('esPrimo').innerHTML = `<strong>El número ingresado ${numeroIngresado}: Es un numero primo</strong>`;
        document.getElementById('posicionNumero').innerHTML = `<strong>Posición del número ingresado dentro de los primos:  ${posicionEnPrimos(numeroIngresado)}</strong>`;
        document.getElementById('multiXDigi').innerHTML = `<strong>El producto de los números: ${separarNumero(numeroIngresado)}es: ${multiplicacionInterna(numeroIngresado)}</strong>`;
        document.getElementById('condicion').innerHTML = `<strong>El número primo Ingresado${numeroIngresado} ${condicion(numeroIngresado)}</strong>`;

        
     
    }else{
        document.getElementById('esPrimo').innerHTML = `<strong>El número ingresado ${numeroIngresado}: NO es un numero primo </strong>`;
    }

}

function esPrimo(numero) {

    let esPrimo = true;
    for(let i=(numero-1); i>=2; i--){
        if(numero % i === 0){
            esPrimo = false;
        }
    }
    return esPrimo;
}  


function posicionEnPrimos(numero) {

    let primos = [];
    for(let i=2; i<=numero; i++){
        if(esPrimo(i)){
            primos.push(i);
        }
    }

    return primos.length;
}  

function multiplicacionInterna(numero) {

    let resultado = 1;
    let numeros = numero.split("");
    for(let num of numeros){
        resultado = resultado * num;
    }

    return resultado;
} 

function separarNumero(numero){
    let numeroSeparado =  numero.split("");
    return numeroSeparado;
}

function condicion(numero){
    let resultadoConjetura = "";
    let numeSeparados = separarNumero(numero);
    let posicionNumero = posicionEnPrimos(numero);
    
    if(numeSeparados[0] * numeSeparados[1] == posicionNumero){
        return resultadoConjetura = "Cumple con la conjetura";
    }else{
        return resultadoConjetura = "No cumple con la conjetura";
    }

}

