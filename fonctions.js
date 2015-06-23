var nbRangees = 6;
var nbColonnes = 7;

var tabLocation = null;
var tabValeur = null;


var tourJoueur = 1;

function creerTableau(rangee, colonne) {
	var map = [];
	for (x = 0; x < nbRangees; x++) {
		map[x] = [];
		for (y = 0; y < nbColonnes; y++) {
			map[x][y] = 0;
		}
	}
	return map;
}

function demarerJeu() {
	document.getElementById("jeuLocation").style.backgroundColor = "#002adf";
	document.getElementById("jeuLocation").innerHTML = "";
	tabLocation = creerTableau(nbRangees, nbColonnes);
	tabValeur = creerTableau(nbRangees, nbColonnes);
	
	var location = 0;
	for (x = 0; x < nbRangees; x++) {
		for (y = 0; y < nbColonnes; y++) {
			tabLocation[x][y] = location;
			document.getElementById("jeuLocation").innerHTML += "<img src='0.png' id='" + location + "' onclick='jouerTour(" + location + ")'>";
			location++;
			//console.log(location);
		}
		document.getElementById("jeuLocation").innerHTML += "<br>";
	}
}

function jouerTour(location) {
	var locY = 0;

	for (x = 0; x < nbRangees; x++) {
		for (y = 0; y < nbColonnes; y++) {
			if (tabLocation[x][y] == location) {
				locY = y;
			}
		}
	}
	
	for (x = nbRangees - 1; x > -1; x--) {
		if (tabValeur[x][locY] == 0) {
			document.getElementById(tabLocation[x][locY]).src = tourJoueur + ".png";
			tabValeur[x][locY] = tourJoueur;
			verifierFinJeu(tourJoueur);
			
			if (tourJoueur == 1) {
				tourJoueur = 2;
			} else {
				tourJoueur = 1;
			}
			
			x = -2;
		}
	}
}

function verifierFinJeu(joueur) {
	var s1 = 0;
	var s2 = 0;
	var s3 = 0;
	var s4 = 0;
	var s5 = 0;
	var s6 = 0;

	for (i = 0; i < nbRangees; i++) {
		for (j = 0; j < nbColonnes; j++) {
			for (k = 1; k < 6; k++) {
				if (tabValeur[i][j] == joueur) {
					if ((i + k) < nbRangees && tabValeur[i][j] == tabValeur[i + k][j]) s1 += 1;
					if ((i - k) > 0 && tabValeur[i][j] == tabValeur[i - k][j]) s2 += 1;
					if ((j + k) < nbColonnes && tabValeur[i][j] == tabValeur[i][j + k]) s3 += 1;
					if ((j - k) >= 0 && tabValeur[i][j] == tabValeur[i][j - k]) s4 += 1;
					if ((i + k) < nbRangees && (j + k) < nbColonnes && tabValeur[i][j] == tabValeur[i + k][j + k]) s5 += 1;
					if ((i + k) < nbRangees && (j - k) >= 0 && tabValeur[i][j] == tabValeur[i + k][j - k]) s6 += 1;
				}
				
			}
			if (s1 == 4 || s2 == 4 || s3 == 4 || s4 == 4 || s5 == 4 || s6 == 4) {
				document.getElementById("jeuLocation").style.backgroundColor = "#FFFFFF";
				document.getElementById("jeuLocation").innerHTML = "Fin du jeu.<br>Gagnant : Joueur " + joueur;
			}
			s1 = 0;
			s2 = 0;
			s3 = 0;
			s4 = 0;
			s5 = 0;
			s6 = 0;	
		}
	}
}

function arreterJeu() {
	document.getElementById("jeuLocation").style.backgroundColor = "#FFFFFF";
	document.getElementById("jeuLocation").innerHTML = "Arr&ecirc;t du jeu. Voulez-vous sauvegarder la partie?<br>";
	document.getElementById("jeuLocation").innerHTML += "<button type='button' onclick='arretOui()'>Oui</button><button type='button' onclick='arretNon()'>Non</button>";
}

function arretOui() {
	document.getElementById("jeuLocation").innerHTML = "Partie sauvegard&eacute;e.";
}

function arretNon() {
	document.getElementById("jeuLocation").innerHTML = "Partie non sauvegard&eacute;e.";
}

function configurerJeu() {
document.getElementById("jeuLocation").style.backgroundColor = "#FFFFFF";
document.getElementById("jeuLocation").innerHTML = "<span style='text-align: left'> <p><strong>Type de Partie</strong><br> <input name='typeJoueur' type='radio' value='1' id='PvP'> Humain vs Humain&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' name='typeJoueur' value='2' id='PvC'> Humain vs Ordinateur </p> <p><strong>Premier Joueur</strong><br> <input type='radio' name='joueurOrdre' value='1' id='premier1'> Joueur 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' name='joueurOrdre' value='2' id='premier2'> Joueur 2 </p> <p> <strong>Dimensions du Jeu</strong><br> <label for='number'>Lignes :</label> <input name='number' type='number' id='nbLignes' max='20' min='5' value='"+nbRangees+"' oninput='salut()'><br> <label for='number'>Colonnes :</label> <input name='number' type='number' id='nbCol' max='20' min='5' value='"+nbColonnes+"' oninput='salut()'> </p> <p><strong>Style de Jeu</strong><br> <input type='radio' name='styleJeu' value='1' checked> Coulissant&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='radio' name='styleJeu' value='2'> Fixe </p> </span>";
}

function salut() {
	console.log(nbRangees);
}



















