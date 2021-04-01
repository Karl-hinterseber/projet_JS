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

//bouton colonne
$('.colonne').click(function () {
    $('#image').css("background-color", "rgb(255, 136, 0)");
    $('#envoyerImage').css("background-color", "rgb(255, 136, 0)");
    $('#image').css("display", "flex");
    $('#envoyerImage').css("display", "flex");
    $('#image').css("flex-direction", "column");
    $('#envoyerImage').css("flex-direction", "column");
    $('#image').css("align-items", "center");
    $('#envoyerImage').css("align-items", "center");
})

//bouton mosaique
$('.mosaique').click(function () {
    $('#image').css("display", "block");
    $('#envoyerImage').css("display", "block");
    $('#image').css("background-color", "white");
    $('#envoyerImage').css("background-color", "white");
})

//ici je créé une variable initialisée à 1 qui me servira pour incrémenter les id
let i = 1;
//bouton ajouter image
    $("#addImage").click(function () {
        let recupUrl = $("#champsUrl").val();
        //alert(recupUrl);
        $('#envoyerImage').append(
            '<div id="imgAjoute' + i + '">\
        <button onclick="supprimerImage(' + i + ')">supprimer image</button>\
        <img src="' + recupUrl + '"/>\
        </div>')
        i++
    });

//bouton supprimer image
    function supprimerImage(i) {
        $('#imgAjoute' + i).remove();
    }