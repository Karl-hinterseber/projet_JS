let reponse = ['pierre', 'papier', 'ciseaux'];

    //fonction retourn une valeur du tableau en random
    function getComputerChoice() {
        let demande = Math.floor(Math.random() * 3);
        $('#choixpc').text('Le pc à choisit ' + reponse[demande])
        return reponse[demande];
    }
    let playerChoice;
    let computerChoice;
    let scorepc = 0;
    let scorejoueur = 0;

    //fonction qui donne le résulat
    function findWinner(playerChoice, computerChoice) {
        if ((playerChoice === 'pierre' && computerChoice === 'ciseaux') || (playerChoice === 'papier' && computerChoice === 'pierre') || (playerChoice === 'ciseaux' && computerChoice === 'papier')) {
            //console.log("Won");
            $('#reponse').text('Vous avez gagné')
            scorejoueur = scorejoueur + 1;
            $('#scorePlayer').text('score joueur = ' + scorejoueur)
        } else if ((playerChoice === 'pierre' && computerChoice === 'pierre') || (playerChoice === 'papier' && computerChoice === 'papier') || (playerChoice === 'ciseaux' && computerChoice === 'ciseaux')) {
            //console.log("Tied");
            $('#reponse').text('égalité')
        } else if (playerChoice === 'bomb') {
            //console.log("Won"); //cheat code
            $('#reponse').text('Vous avez triché, c`est pas bien, donc vous avez gagné!!!!')
        } else {
            //console.log("Lost");
            $('#reponse').text('Vous avez perdu')
            scorepc = scorepc + 1;
            $('#scoreOrdi').text('score pc = ' + scorepc)
        }
    }
    //enchaînement du programme
    $('.choice').click(function (){
        let playerChoice = $(this).attr("alt")
        $('#choixjoueur').text('Vous avez choisit ' + playerChoice)
        computerChoice = getComputerChoice();
        findWinner(playerChoice, computerChoice);
          })

$('#imageJeux').css("display", "flex");
$('#imageJeux').css("justify-content", "space-between");
$('h1').css("display", "flex");
$('h1').css("justify-content", "center");