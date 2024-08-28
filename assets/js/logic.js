// Función para obtener la elección del computador
function obtenerEleccionComputador(){
    const opciones = ["Piedra", "Papel", "Tijera"];
    const indice = Math.floor(Math.random()*3);
    return opciones[indice];
}
// Función para determinar el ganador
function determinarGanador(eleccionUsuario, eleccionComputadora) {
    if (eleccionUsuario === eleccionComputadora) {
        return "Empate";
    } else if (
        (eleccionUsuario === "Piedra" && eleccionComputadora === "Tijera") ||
        (eleccionUsuario === "Papel" && eleccionComputadora === "Piedra") ||
        (eleccionUsuario === "Tijera" && eleccionComputadora === "Papel")
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}
// Función principal para ganar el cachipún
function jugarCachipun() {
    const veces = parseInt(prompt("¿Cuántas veces deseas jugar?"));
    for (let i = 0; i < veces; i++) {
        // Generar un número aleatorio entre 1 y 3
        const numAleatorio = Math.floor(Math.random()*3) + 1;

        // Asignar la elección de la computadora según el número aleatorio
        let eleccionComputadora;
        if (numAleatorio === 1) {
            eleccionComputadora = "Piedra";
        } else if (numAleatorio === 2) {
            eleccionComputadora = "Papel";
        } else {
            eleccionComputadora = "Tijera";
        }

        const eleccionUsuario = prompt("Elige: Piedra, Papel o Tijera");
        const eleccionComputadora = prompt("Elige: Piedra, Papel o Tijera");
        
        const resultado = determinarGanador(eleccionUsuario, eleccionComputadora);
        alert(`Tú elegiste: ${eleccionUsuario}\nLa computadora eligió: ${eleccionComputadora}\nResultado: ${resultado}`);
    }
}
// Inicia el juego
jugarCachipun();
