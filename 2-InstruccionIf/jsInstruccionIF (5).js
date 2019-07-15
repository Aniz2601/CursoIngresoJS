function mostrar()
{
    var edad;
    //tomo la edad  
    edad = document.getElementById("edad").value;


    //con dos if sin else
        if(edad < 13)
            {
                alert("la persona no es adolecente");
            }
        if(edad > 17)
            {
                alert("la persona no es adolecente");
            }

    //Manera un solo IF con else
        /*if(edad >= 13 && edad <= 17)
            {
                
            }
        else
            {
                alert("la persona no es adolencente");
            }*/

    //con dos if y con else    
        /*if(edad >= 13)
            {
                if(edad <= 17)
                    {
                    
                    }
                else
                    {
                        alert("la persona no es adolecente");
                    }
            }
        else
            {
                alert("la persona no es adolecente");
            }*/
            
}//FIN DE LA FUNCIÓN