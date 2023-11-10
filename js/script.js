document.getElementById('simplebutton').addEventListener('click', function() {
    var image = document.getElementById('luffydrip');
    var audio = document.getElementById('audiodrip');

    if (image.style.display === 'none') {

        //Muestra el contenido si está oculto
        image.style.display = 'block';
        audio.play();
    } else {
        //Oculta el contenido 
        image.style.display = 'none';
        audio.pause();
    }
});
