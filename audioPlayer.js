let musica = document.querySelector('#musica');
let btnPlay = document.querySelector('#play');
let barraVolume = document.querySelector('#barra');
let barraProgresso = document.querySelector('#rangeProgresso');

addEventListener('load',iniciar)

function iniciar(){
    musica.duration;
}

//play e pause

document.querySelector('#play').addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        btnPlay.src = './img/pause.png';
    } else {
        musica.pause();
        btnPlay.src = './img/play.png';
    }
});

//final


//volume

let volumeBaixo = document.querySelector('#baixo');

let volumeAlto = document.querySelector('#alto');


volumeBaixo.addEventListener('click', () => {
    musica.volume -= 0.1;
    barraVolume.style.width = 80 + 'px';

    if (musica.volume < 0.1) {
        document.querySelector('#btnVolume').src = './img/mute.png';
        musica.volume = 0.0;
        
    }
    console.log(musica.volume)
});

volumeAlto.addEventListener('click', () => {
    musica.volume += 0.1;

    if (musica.volume >= 0.1) {
        document.querySelector('#btnVolume').src = './img/volume.png';
    }

    console.log(musica.volume)

});


//final



//barra de volume
let numero = 80;

volumeBaixo.addEventListener('click', function () {
    numero -= 8;
    barraVolume.style.width = numero + 'px';


});


volumeAlto.addEventListener('click', function () {
    let widthBarra = barraVolume.style.width;

    numero += 10;
    barraVolume.style.width = 0 + 'px';
    barraVolume.style.width = numero + 'px';


    if (widthBarra > 80 + 'px') {
        alert('Volume alto pode causar perda auditiva');
        barraVolume.style.width = 80 + 'px';
    }

});


//final

//botão de mute

let id = document.querySelector('#btnVolume').id;

let array = []

document.querySelector('#btnVolume').addEventListener('click', () => {

    array.push(musica.volume);

    if (id == 'btnMute') {
        id = 'btnVolume';
        document.querySelector('#btnVolume').src = './img/volume.png'
        musica.volume = array[0];
    }
    else {
        id = 'btnMute';
        document.querySelector('#btnVolume').src = './img/mute.png';
        musica.volume = 0.0;
    }

    console.log(array)

})

//final


//Barra de progresso


function progresso(){

    barraProgresso.setAttribute('max',musica.duration);
    barraProgresso.setAttribute('value',musica.currentTime);

    let tempo = musica.currentTime;

    let horas = Math.floor(tempo / 3600);
    let minutos = Math.floor((tempo - (horas * 3600)) / 60);
    let segundos = Math.floor(tempo % 60);

    if (horas < 10) {
        horas = '0' + horas
    }
    if (minutos < 10) {
        minutos = '0' + minutos
    }
    if (segundos < 10) {
        segundos = '0' + segundos
    }

    document.querySelector('#tempo').innerHTML = horas + ':' + minutos + ':' + segundos;

};

setInterval(progresso,1000);

barraProgresso.addEventListener('input',()=>{


});

//final

// função pause e play e retomada da barra de progresso.
barraProgresso.addEventListener('mousedown', () => {

    musica.pause();

    barraProgresso.addEventListener('input', (e) => {
        musica.currentTime = e.target.value;
    });

});

barraProgresso.addEventListener('mouseup', () => {
    musica.play();

    function retomando() {
        let value = barraProgresso.getAttribute('value');

        barraProgresso.value = value;
    }
    setInterval(retomando,1000);
});
//final