/*Desarrollar un algoritmo que dado un número,ingresado por el usuario determine si el número es par 
o impar y le informe al usuario 
•En el caso de ser 0 (cero) el algoritmo deberá  informarlo*/

import * as rls from "readline-sync";

let  num: number = rls.questionInt("Ingresa un numero:");
   if (num==0) {//si el numero es =0 dira cero        
 console.log("El " + num+ " es cero"); 
} else if ( num% 2 == 0) {  //si es divisible por 2 sera PAR       
console.log("El " +num+ " es un numero par");   } 
else {    //si no es divisible por 2 sera IMPAR
console.log("El " + num+ " es un numero impar");   } 