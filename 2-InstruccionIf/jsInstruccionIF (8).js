function mostrar()
{
    var edad;
    var estcivil;
    //tomo la edad  
    edad = document.getElementById("edad").value;
    //tomo el estado civil
    estcivil = document.getElementById("estadoCivil").value;

    //if not
    if(!(edad < 18))
        {
            if(!(estcivil !== "Soltero"))
                {
                    alert('Es soltero y no es menor.');
                }
        } 
     
    //if
    if(edad >= 18)
        {
            if(estcivil == "Soltero")
                {
                    alert('Es soltero y no es menor.');
                }
        }
    

}//FIN DE LA FUNCIÓN