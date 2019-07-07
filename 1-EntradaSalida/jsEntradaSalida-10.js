/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var resultado;
    var porcentaje;

    //tomo el valor del html
    importe = document.getElementById("importe").value;

    //lo transformo a entero
    importe = parseInt(importe);

    //tomo el 25% del valor ingresado
    porcentaje = importe * 0.25;

    //resto el valor ingresado y porcentaje
    resultado = importe - porcentaje;

    document.getElementById("resultado").value = resultado;
}
