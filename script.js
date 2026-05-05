const imagenes = [
"https://th.bing.com/th/id/OIP.ieq3ublUxK8UXYdpo1fTAwHaHa?w=195&h=195&c=7&r=0&o=7&pid=1.7&rm=3",
"https://th.bing.com/th/id/OIP.Mn3IjXY3k-XzL4pSfnablgHaE8?w=292&h=195&c=7&r=0&o=7&pid=1.7&rm=3",
"https://th.bing.com/th/id/OIP.evNkD9_bU8X09BlRiMkH2QHaE8?w=293&h=195&c=7&r=0&o=7&pid=1.7&rm=3",
"https://th.bing.com/th/id/OIP.DFw4Etn4gvXnpUsu8pOynwHaE8?w=293&h=195&c=7&r=0&o=7&pid=1.7&rm=3",
"https://th.bing.com/th/id/OIP.R3CTKEN1VLaSdkHRZdkM4QHaE7?w=359&h=195&c=7&r=0&o=7&pid=1.7&rm=3"
];

let index = 0;

function abrirModal(i) {
    index = i;
    document.getElementById("modal").style.display = "flex";
    document.getElementById("imagenGrande").src = imagenes[index];
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function cambiar(n) {
    index += n;

    if (index < 0) index = imagenes.length - 1;
    if (index >= imagenes.length) index = 0;

    document.getElementById("imagenGrande").src = imagenes[index];
}
