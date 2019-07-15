function mostrar()
{
    var edad;
    var estcivil;
    //tomo la edad  
    edad = document.getElementById("edad").value;
    //tomo el estado civil
    estcivil = document.getElementById("estadoCivil").value;

    if(edad < 18)
        {
            if(estcivil !== "Soltero")
                {
                    alert("Es muy pequeño para NO ser soltero.");
                }
        }
	


}//FIN DE LA FUNCIÓN