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
    $('#image').css("background-color", "rgb(255, 136, 0)");
    $('#image').css("display", "flex");
    $('#image').css("flex-direction", "column");
    $('#image').css("align-items", "center");
})

//boutton mosaique
$('.mosaique').click(function() {
    $('#image').css("display", "block");
    $('#image').css("background-color", "white");
})

//bouton ajouter image
$(document).ready(function(){
    $("#addImage").click(function(){
      let recupUrl = $("#champsUrl").val();
      //alert(recupUrl);
      $('#image').prepend('<img src="' + recupUrl + '"/>')
    });
  });