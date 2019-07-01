<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
 <h1>PRUEBA NUMERO 3</h1>

</body>
<script>
    //Declarar un array vacio de nombre amigos
var amigos=[];
//Crear un nuevo objeto de nombre Elena (con los mismos tres atributos de los objetos iniciales: nombre, edad, ciudad)
var elena={
    nombre:"elena",
    cuidad:"guayaquil",
    edad:21
}
// Declarar tres objetos de nombre Hugo, Paco y Luis.   Cada objeto debe tener estos atributos:  nombre, edad, ciudad.   Usted debe asignar edades y ciudades a cada objeto.
var hugo={
    nombre: "hugo",
    cuidad:"quito",
    edad: 18

}
var paco={
    nombre: "paco",
    cuidad:"guayaquil",
    edad: 19

}
var luis={
    nombre: "luis",
    cuidad:"quito",
    edad: 20

}
amigos.push(hugo.edad, hugo.cuidad, hugo.nombre);
amigos.push(paco.edad, paco.cuidad, paco.nombre);
amigos.push(luis.edad, luis.cuidad, luis.nombre);
//Imprimir en consola la longitud del array amigos
amigos.length
//Declarar una variable numeroDeAmigos y guardar el número de elementos que tiene el array (usando la propiedad que devuelve el número de elementos de un array).
var numeroDeAmigos= amigos.length;
//Hacer una función que se llame saludo, la función recibe como parámetro un objeto,  si la edad es par: imprime en consola “Saluton kaj bonvenon”.  Cuando la edad es impar imprime en consola “Hello moto”.
var year=luis.edad;
var saludo=function(year){
    if(year%2===0){
        console.log("“Saluton kaj bonvenon”");
    }else 
    {
        console.log("“Hello moto”")
    }
    
}
//Hacer una función de nombre arriba  que recibe un objeto por parámetro e imprime en consola desde el uno, de manera ascendente hasta el atributo edad del objeto recibido como parámetro.
var b=hugo.edad
var arriba=function (b){
    if(b===1){
    console.log(1)
    }else {
        
        arriba(b-1);
        console.log(b)
    }
}
//Hacer una función de nombre abajo  que recibe un objeto por parámetro e imprime en consola desde la edad del objeto hasta cero, de manera descendente.
var a=luis.edad;
var abajo=function(a){
    if (a === 0) {
        return 0;
    } else {
        console.log(a)
        return abajo(a-1)
        
    }
}
//Hacer una función de nombre edadTotal que recibe cuatro objetos como parámetros y escribe en consola la suma de las edades de los cuatro objetos recibidos.
var c=paco.edad;
var d= elena.edad;
var suma1;
var edadTotal= function(edad,edad,edad,edad){  
suma1=edad+edad+edad+edad
console.log(suma1);
}
</SCRIPT>
</html>
