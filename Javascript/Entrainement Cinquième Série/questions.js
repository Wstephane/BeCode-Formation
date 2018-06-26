/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
    // Ok
}
var remplaceECar = function (texte) {
    return texte.slice(1, 6);
   
}
var concatString = function (texte1, texte2) {
    return a = texte1 + texte2;
    // Ok
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
    // Ok
}
var afficher9Car = function (texte) {
    return texte.substr(0, 9);
    // Ok
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
    // Ok
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
    // Ok
}
var SupprEspaceString = function (texte) {
    return texte.trim();
    // Ok
}
var IsString = function (texte) {
    
}

var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
    // Ok
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length -1;
    // Ok
}
var InverseString = function (texte) {

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
    // Ok
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
    // Ok
}
var valeurAbsolueArray = function (array) {
    let result = [];
    for (i = 0 ; i < array.length ; i++) {
        result.push(Math.abs(array[i]));
    }
    return result;
}
var sufaceCercle = function (rayon) {

}
var hypothenuse = function (ab, ac) {

}
var calculIMC = function (poids, taille) {

}
