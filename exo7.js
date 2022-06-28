let couleurTexte = prompt("Saisissez une couleur pour le text");
let couleurFond = prompt("Saisissez une couleur pour le fond"); 

let lesDiv = document.getElementsByTagName('div');

lesDiv[0].style.color = couleurTexte;
lesDiv[1].style.color = couleurTexte;
lesDiv[2].style.color = couleurTexte;

lesDiv[0].style.backgroundColor = couleurFond;
lesDiv[1].style.backgroundColor = couleurFond;
lesDiv[2].style.backgroundColor = couleurFond;

