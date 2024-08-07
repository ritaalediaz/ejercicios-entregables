import*as rls from"readline-sync";

//Ejercicio Potencia
let base : number = rls.questionInt("Ingrese un numero llamado base:");
let exponente : number = rls.questionInt("Ingrese un numero llamado exponente:");
let resultadoFuncion : number = base^exponente;

function calcularPotencia (base:number,exponente:number):number{
    let resultadoPotencia : number = base**exponente;
    if(exponente ==0){
    resultadoPotencia= 1;
    }else if (resultadoPotencia){
       resultadoFuncion= base**exponente 
    };
    return resultadoPotencia;
}
calcularPotencia(base,exponente);
console.log("El resultado es:" ,resultadoFuncion);