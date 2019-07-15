function mostrar()
{
    var edad;
    //tomo la edad  
    edad = document.getElementById("edad").value;

    //Manera un solo IF
    /*if(edad >= 13 & edad <= 17)
    {
        alert("la persona es adolecente");
    }*/

    if(edad >= 13)
    {
        if(edad <= 17)
        {
            alert("la persona es adolecente");
        }
    }
        
}//FIN DE LA FUNCIÓN