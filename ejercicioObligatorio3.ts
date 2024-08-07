/*Encontrar el elemento más grande del arreglo 52.Dado el siguiente arreglo 
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número más grande del arreglo e 
imprimirlo por consola
- Almacenar el número más grande en una variable global y pasarlo a una función 
para determinar si el número es par o impar*/

let num:number[]=new Array (12);
let i:number;
let numMax:number=0;
let indice:number=0;
num[0]=4;
num[1]=7;
num[2]=9;
num[3]=3;
num[4]=1;
num[5]=45;
num[6]=67;
num[7]=23;
num[8]=29;
num[9]=78;
num[10]=11;
num[11]=16;

for(i=0; i<=11;i++){
    if(num[i]>numMax)
        numMax=num[i];
}
console.log("El numero maximo es :"+numMax);
parImpar(numMax)

function parImpar(numMax:number){
   if(numMax%2 ==0){
   console.log("El numero:"+numMax + " es par");
   } else {
    console.log("El numero:"+numMax + "es impar");
     }
    }