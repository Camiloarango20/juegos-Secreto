
let numeroSecreto = 0;
console.log(numeroSecreto);
intentos = 0;

let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignacionTextoElemento (elemento,texto){
    let elementoHTML  = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



function verificarIntento (){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto){
            asignacionTextoElemento('p',`Acertantes el numero secreto en ${intentos} ${(intentos ==1) ? 'Vez' : 'Veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{// cuando el usuario no acierta el numero
            if(numeroUsuario > numeroSecreto){ 
                asignacionTextoElemento('p','El numero secreto es menor..')
            }else{
                asignacionTextoElemento('p','El numero secreto es mayor')
            }
            
  
        }
        intentos++;  
        limpiarCaja();  
        
    return;
}

function limpiarCaja (){
    document.getElementById('valorUsuario').value = '';
}


function generarNumeroSecreto (){
    let numerGenerado =  Math.floor(Math.random()*10+1)
    console.log(numerGenerado);
    console.log(listaNumerosSorteados);

    //numero maximo de oportunidades
    // ya se sortio todos los numero
    if(listaNumerosSorteados.length == numeroMaximo){
        asignacionTextoElemento('p', 'Ya se sortearon todos los numeros posibles....')      
    } else {
        if (listaNumerosSorteados.includes(numerGenerado)) {
            return generarNumeroSecreto();
        } else
            listaNumerosSorteados.push(numerGenerado);
        return numerGenerado;
    }
    

}

function condicionesInicales(){
    asignacionTextoElemento('h1','El juego del numero secreto..');
    asignacionTextoElemento('p',`Indica un nùmero del 1 al  ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    // limpiar juego 
    limpiarCaja();
    // Indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    // Inicializar el numero de intento
    condicionesInicales();
    //deshabilitar el botón juego

    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesInicales();


// function holaNomre(){
//     console.log('Hola, mundo')
// }
// holaNomre();

// function mostrarNombre(nombre){

//     console.log(`hola ${nombre}`)
// }

// mostrarNombre('camilo')



// function doblarNumero(dobleNum) {
//     return dobleNum * 2 ;
// }

// let numeroresult = doblarNumero(5)
// console.log(numeroresult);

// function promedio(numero1,numero2,numero3){
//     return (numero1+numero2+numero3) / 2;
// }

// let result = promedio(1,7,1)
// console.log(result);

// function mayor(a,b){
//     return a > b ? a : b;
// }



// ^

// function img(kg,altura){
//  let calculoPersona = (kg/(altura^2))
//  console.log(typeof(calculoPersona));
  
//  return calculoPersona; 
// }

// let valorFinal = img(80,1.70);
// console.log(valorFinal);

// function valorPeso (peso){
//     let pesoColombiano = peso * 4100
//     return pesoColombiano;
// }

// let cambioPeso = valorPeso(5);
// console.log(cambioPeso);

// contador = 0;
// function tableDeMultiplicar (numero){
//     console.log(`La tabla de Multiplicar del Numero ${numero}` );
//     while(contador <= 10){
//         let tablaNumero = numero * contador;
        
//         console.log(`${numero} X ${contador} = ${tablaNumero}`)
//         contador++;
//     }
// }

// tableDeMultiplicar (5);