// 2 El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // listado amigos
let nombresOcultos = true; // para ocultar o mostrar nombres

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert("Por favor, ingrese un nombre válido");
        return;
    }
    
    if (/^\d+$/.test(nombreAmigo)) {
        alert("No puede contener números, para el juego del amigo secreto");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Elige otro nombre, este nombre ya fue agregado");
        return;
    }

    amigos.push(nombreAmigo);
    actualizaLista();
    inputAmigo.value = "";
    inputAmigo.focus();
}

function actualizaLista() {
    const listaAmigoUL = document.getElementById("listaAmigos");
    listaAmigoUL.innerHTML = amigos.map((amigo, index) => 
        `<li>${nombresOcultos ? `Amigo Secreto ${index + 1}` : amigo}</li>`
    ).join("");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, ingrese nombre de amigos para sortear!");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}

// Función para mostrar nombres
function toggleVisibilidad() {
    nombresOcultos = !nombresOcultos;
    actualizaLista();
    document.getElementById("button-Mostrar").textContent = nombresOcultos ? "Mostrar Nombres" : "Ocultar Nombres";
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("button-Adicionar").addEventListener("click", agregarAmigo);
    document.getElementById("button-Sortear").addEventListener("click", sortearAmigo);
    document.getElementById("button-Mostrar").addEventListener("click", toggleVisibilidad);
});
