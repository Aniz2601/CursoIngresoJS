/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dato;

	dato = prompt("Escribir el dato:");
	
	document.getElementById("elNombre").value = dato;
}

