//feed

$(document).ready(function () {
    $.ajax({
        url: 'https://musing-ardinghelli-9cfa3b.netlify.app/v1.json',
        method: 'GET',
        dataType: 'json'
    }).done(function (reponse) {
        //reponse.foreach(function(element) {});
        reponse.forEach(element => 
            $('#api').append('<div>\
            <h1>'+ element.name +'</h1>\
            <img src="' + element.image + '"/>\
            <div>' + element.symbol + '</div></div>'));
        })
        .fail(function (erreur) {
            console.log("La requete a échoué" + JSON.stringify(erreur));
        })
        .always(function () {
            console.log("Requête effectuée");
        });
});


//dropdown

//quand l'utilisateur clique sur le bouton, le .toggle montre le contenu du menu
function functionDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// ferme le dropdown quand l'utilisateur clique en dehors du bouton
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//formulaire

function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    let recuptext = document.getElementById("in").value;
    // Afficher la valeur
    //alert(recuptext);
    let newDiv = document.createElement("div");
    let newimg = document.createElement("img");
    newimg.setAttribute("src", "images/xrp.png");
    newDiv.appendChild(newimg);
    let figcaption = document.createElement("figcaption")
    newDiv.appendChild(figcaption);
    let titlefeed = document.createElement("h1");
    figcaption.appendChild(titlefeed);
    titlefeed.innerHTML = recuptext;
    let parent = document.getElementById("image_accueil");

    // inserer newDiv avant premier enfant du parent
    parent.insertBefore(newDiv, parent.firstChild)
    // Ajouter le recuptext dans cet élément
    
    /*<div>
    <img src="images/btc.png" />
    <figcaption>
        <h1 id="outputbtc"></h1>
    </figcaption>
</div>*/
}

