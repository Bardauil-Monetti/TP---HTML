let imagenes = [
    {
        "src": "https://media.discordapp.net/attachments/1060741172546523147/1376191405256609802/image.png?ex=68346d9f&is=68331c1f&hm=113231a3340ecdb5308b898cd833fde69582fa97d046a73838e9d4ce537a422a&=&format=webp&quality=lossless&width=1093&height=1006",
        "nombre": "Ojos animatrónicos"
    },
    {
        "src": "https://media.discordapp.net/attachments/1060741172546523147/1376189508651061408/image.png?ex=68346bdb&is=68331a5b&hm=f2b722b1c8ecb5a11dbf599fd931608db95c4f0f75ad5020208913ef8e854b72&=&format=webp&quality=lossless",
        "nombre": "R.A.D.: Registro de Asistencia Digital",
        "archivo": "Informe_proyecto_R.A.D._feria_de_ciencias_2024_-_Mewtronics[1][1].pdf"
    },
    {
        "src": "cyclops.jpeg",
        "nombre": "Dron Submarino (work in progress)",
        "archivo": "Informe Proyecto Submarino Microcontrolado - Monatajes III - 6ºA.docx"
    }
];
let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let imagen = document.getElementById("ojos");
let puntos = document.getElementById("puntos");
let actual = 0;

function mostrarImagen() {
    imagen.innerHTML = `<img src="${imagenes[actual].src}" alt="${imagenes[actual].nombre}" loading="lazy"><h3>${imagenes[actual].nombre}</h3>`;
    posCarrusel();
}

atras.addEventListener("click", function() {
    actual -= 1;
    if (actual < 0){
        actual = imagenes.length - 1;
    }
    mostrarImagen();
});
adelante.addEventListener("click", function() {
    actual += 1;
    if (actual >= imagenes.length){
        actual = 0;
    }
    mostrarImagen();
});
function posCarrusel(){
    if (!puntos) return;
    puntos.innerHTML = "";
    for(let i = 0; i < imagenes.length; i++){
        if (i == actual){
            puntos.innerHTML += '<span class="bold">●</span>';
        } else {
            puntos.innerHTML += '<span>○</span>';
        }
    }
}

// Inicializa el carrusel al cargar
mostrarImagen();