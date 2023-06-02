let estilo1 = document.getElementById('estilo1');
let estilo2 = document.getElementById('estilo2');
let estilo3 = document.getElementById('estilo3');
let fondo = document.getElementById('fondo');
let encabezado = document.getElementById('encabezado');
let imagenes = document.getElementById ('imagenes');
let textos = document.getElementsByClassName('texto');
let boton = document.getElementById('boton');

estilo1.addEventListener('click', function(event){
    fondo.style.backgroundImage = "url(Fondo1.jpg)",
    fondo.style.fontFamily = 'Bebas Neue, sans-serif', 
    fondo.style.color = '#000000',
    encabezado.style.backgroundColor = 'navy';
    imagenes.setAttribute("src", "foto1.jpg");

    for(i = 0; i < textos.length; i++){
        textos[i].style.color = 'black';
    }

    boton.style.backgroundColor = 'navy';
});
   

estilo2.addEventListener('click', function(event){
    fondo.style.backgroundImage = "url(https://img.freepik.com/vector-gratis/fondo-invierno-acuarela-flores-azules_52683-78684.jpg?w=826&t=st=1685502444~exp=1685503044~hmac=1b91cb90ab6f3f443eacd23c48ce7076680d6672cb18300da25ba0ba45d2d4fa)",
    fondo.style.fontFamily = 'Jost', 'sans-serif', 
    fondo.style.color = '#000000',
    encabezado.style.backgroundColor = 'teal';
    imagenes.setAttribute("src", "foto3.jpg");

    for(i = 0; i < textos.length; i++){
        textos[i].style.color = 'black';
    }

    boton.style.backgroundColor = '#5009';
});

estilo3.addEventListener('click', function(event){
    fondo.style.backgroundImage = "url(https://img.freepik.com/vector-gratis/fondo-abstracto-azul-plano_23-2149325393.jpg?w=826&t=st=1685510388~exp=1685510988~hmac=ee9aa179ac1648d008d75291619aff0a0fbfd08fa1e4d17d38792a0586a07c63)",
    fondo.style.fontFamily = 'Pangolin', 'cursive',
    fondo.style.color = '#000000',
    encabezado.style.backgroundColor = '#1036A6';
    imagenes.setAttribute("src", "foto4.jpg");

    for(i = 0; i < textos.length; i++){
        textos[i].style.color = 'black';
    }
    boton.style.backgroundColor = 'aqua';
});

