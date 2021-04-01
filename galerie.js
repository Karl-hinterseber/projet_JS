//implementation d'image
nbImage = 0;
while (nbImage < 12) {
// créer variable image
let img = document.createElement("img");
//chemin de l'image
img.src = "images/r5.jpg";
img.id = nbImage;
//affichr image dans html
let insertimg = document.getElementById("image");
insertimg.appendChild(img);
nbImage = nbImage + 1;
}

//boutton colonne
$('.colonne').click(function() {
    $('#image').css("background-color", "#FF6140");
    $('#image').css("display", "flex");
    $('#image').css("flex-direction", "column");
    $('#image').css("align-items", "center");
})

//boutton mosaique
$('.mosaique').click(function() {
    $('#image').css("display", "block");
    $('#image').css("background-color", "white");
})
