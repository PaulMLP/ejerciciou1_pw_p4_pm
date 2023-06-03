const correcto = "excadrill";
let mensaje = "";
let intento = 0;
let puntaje = 0;

function seleccion(num) {
    let nombre = document.getElementById("boton" + num).textContent;
    intento++;
    if (nombre == correcto) {
        puntaje = (intento == 1) ? 5 : (intento == 2) ? 3 : (intento == 3) ? 1 : 0;
        mensaje = "Felicitaciones, has seleccionado la opción correcta";
        document.getElementById("pokemonImagen").src = "../img/pcolor.jpg";
    } else {
        mensaje = "Pokémon incorrecto, intentalo nuevamente";
        if (intento == 3) reiniciar();
    }

    document.getElementById("puntaje").textContent = puntaje;
    document.getElementById("intentos").textContent = intento;
    document.getElementById("mensajeContenedor").innerHTML = "<strong id='mensaje'>" + mensaje + "</strong>"
}

function reiniciar() {
    intento = 0;
    puntaje = 0;
    document.getElementById("mensaje").remove();
    document.getElementById("pokemonImagen").src = "../img/pnegro.jpg";
    document.getElementById("puntaje").textContent = 0;
    document.getElementById("intentos").textContent = 0;
}