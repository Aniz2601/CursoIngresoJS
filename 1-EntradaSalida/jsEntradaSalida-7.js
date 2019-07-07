/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var nro1;
var nro2;

function sumar()
{	
    var suma;

    nro1 = document.getElementById("numeroUno").value;
    nro2 = document.getElementById("numeroDos").value;

    nro1 = parseInt(nro1);
    nro2 = parseInt(nro2);

    suma = nro1+nro2;

    alert("La suma es " + suma);
}

function restar()
{
    var resta;

    nro1 = document.getElementById("numeroUno").value;
    nro2 = document.getElementById("numeroDos").value;

    nro1 = parseInt(nro1);
    nro2 = parseInt(nro2);

    resta = nro1-nro2;

    alert("La resta es " + resta);
}

function multiplicar()
{ 
	var multiplo;

    nro1 = document.getElementById("numeroUno").value;
    nro2 = document.getElementById("numeroDos").value;

    nro1 = parseInt(nro1);
    nro2 = parseInt(nro2);

    multiplo = nro1*nro2;

    alert("La multiplicacion es " + multiplo);
}

function dividir()
{
	var division;

    nro1 = document.getElementById("numeroUno").value;
    nro2 = document.getElementById("numeroDos").value;

    nro1 = parseInt(nro1);
    nro2 = parseInt(nro2);

    division = nro1/nro2;

    alert("La division es " + division);
}

