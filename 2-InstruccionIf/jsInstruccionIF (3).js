function mostrar()
{
    var edad;
    //tomo la edad  
    edad = document.getElementById("edad").value;
    
    if(edad >= 18)
    {
        alert("la persona es mayor de edad"); 
    }
    if(edad < 18)
    {
        alert("la persona es menor de edad");
    }

}//FIN DE LA FUNCIÓN