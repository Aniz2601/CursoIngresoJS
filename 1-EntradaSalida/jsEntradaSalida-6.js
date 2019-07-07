/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var nro1;
    var nro2;
    var suma;

    nro1 = document.getElementById("numeroUno").value;
    nro2 = document.getElementById("numeroDos").value;

    nro1 = parseInt(nro1);
    nro2 = parseInt(nro2);

    suma = nro1+nro2;

    alert("La suma es " + suma);




}

