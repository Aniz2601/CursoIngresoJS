function mostrar()
{
    var edad;
    //tomo la edad  
    edad = document.getElementById("edad").value;

    //forma separada
        /*if(edad > 18)
            {
                alert("la persona es mayor de edad");
            }

        if(edad >= 13 && edad <= 17)
            {
                alert("la persona es adolecente");
            }

        if(edad < 13)
            {
                alert("la persona es un niño"); 
            }*/

    if(edad >= 18)
        {
            alert("la persona es mayor de edad");
        }
        else
            if(edad >= 13 && edad <= 17)
                {
                    alert("la persona es adolecente");
                }
            else
                {
                    alert("la persona es un niño"); 
                }



}//FIN DE LA FUNCIÓN