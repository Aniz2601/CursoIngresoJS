function mostrar()
{
	var nota;
	//Genero el número RANDOM entre 1 y 10 
	nota = Math.floor(Math.random() * 10) + 1;

	//Math.floor: quita las comas

	// alert(nota); //para probar

	if(nota == 10 || nota == 9 )
		{
			alert("EXCELENTE");
		}
	else
		{
			if(nota > 4)
				{
					alert("APROBRÓ");	
				}
			else
				{
					alert("Vamos, la proxima se puede");
				}
		}
	

}//FIN DE LA FUNCIÓN