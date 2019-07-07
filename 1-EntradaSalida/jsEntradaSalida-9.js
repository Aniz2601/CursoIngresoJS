/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    var porcentaje;

    //tomo el valor del html
    sueldo = document.getElementById("sueldo").value;

    //lo transformo a entero
    sueldo = parseInt(sueldo);

    //tomo el 10% del valor ingresado
    porcentaje = sueldo * 0.10;

    //sumo el valor ingresado y porcentaje
    resultado = sueldo + porcentaje;

    document.getElementById("resultado").value = resultado;
}
