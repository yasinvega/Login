//Datos para validar los campos

//obtener el valor de los datos introducidos en la ventana emergente
var tu_user = prompt("Establece el nombre de usuario");
var tu_pass = prompt("Establece la contraseña");

//añadir evento al boton Iniciar sesion
var boton_enviar = document.getElementById("comprobar").addEventListener("click", validar_campos);

//capturar la pulsacion de la tecla enter
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        validar_campos();
    }
});

function validar_campos(){
    //Obtener el valor del campo usuario y contraseña
    var campo_usuario = document.getElementById("usuario").value;
    var campo_contrasena = document.getElementById("pass").value;
    
    if((campo_usuario != tu_user) || (campo_contrasena != tu_pass)){
        document.getElementById("usuario").className = "cuadro_texto_mal";
        document.getElementById("pass").className = "cuadro_texto_mal";
        document.getElementById("fondo_card").className = "card_mal";
    }else{
        document.getElementById("usuario").className = "cuadro_texto";
        document.getElementById("pass").className = "cuadro_texto";
        document.getElementById("fondo_card").className = "card";
    }
}

