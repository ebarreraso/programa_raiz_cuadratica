'use strict'

// function calcular(){
//     let a = document.getElementById("valorA").value;
//     let b = document.getElementById("ValorB").value;
//     let c = document.getElementById("ValorC").value;

//     let operacion = Math.pow(b,2)-4*a*c;
//     let p,q,x1,x2;

//     if(operacion<0){
//         alert("Sin raiz real");
//     }else{
//         p = -b/(2*a);
//         q = Math.sqrt(operacion)/(2*a);
//         x1 = p+q;
//         x2 = p-q;
//         document.write("Las dos raíces son:" + x1 + "," + x2);

//         console.log(p);
//         console.log(q);
//         console.log(x1);
//         console.log(x2);
//     }
// }

let numeros = [];
let numerosPrimos = [];
let totalPrimosCreados = [];
let numeroPrimo;
let cantidadPrimos;


function calcularPrimos(){

    for(let i=2; i<1000; i++){
        numeros = [i];
    }
    cantidadPrimos = document.getElementById('arrayPri').value;
    
     //crea la cantida de primos que se requiera
     for(let o=0; o<cantidadPrimos; o++){
        if(validaPrimos(o)){
            totalPrimosCreados.push(o);
        }
    }

    //Pone la clase si no la tiene y la quita si lo tiene
    document.getElementById('tamanoPrimos').classList.toggle('hidden');
    document.getElementById('btnTamanoPrimos').classList.toggle('hidden');
    document.getElementById('numeroEspecial').classList.toggle('hidden');
    document.getElementById('buscarEspecial').classList.toggle('hidden');
    document.getElementById('cantidadPrimos').classList.toggle('hidden');
    document.getElementById('cantidadPrimos').innerHTML = `numeros primos resultanes de el valor ingresado ${cantidadPrimos} <br> ${totalPrimosCreados}`;
}

function buscarNumEspecial(){

    let numeroUnico = document.getElementById("numSpecial").value;

   

   let j = totalPrimosCreados.find(c => c == numeroUnico);

    console.log(j);

    

    // if(validaPrimos(numeroUnico)){
    //     numerosPrimos.push(numeroUnico);
    //     console.log(numerosPrimos);
    // }

    // document.getElementById('listaPrimos').innerHTML = `${numerosPrimos}`;
}

function validaPrimos(numero){
    for(let j = 2; j<numeros; j++){
        if(numero % j === 0){
            return false;
        }
        return numero !== 1;
    }
}