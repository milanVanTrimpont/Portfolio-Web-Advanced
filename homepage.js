'use strict';

// constante maken voor de verschillende categorieen
const bmi_categorie = {
    ondergewicht: 18.5,
    gezond: 25,
    overgewicht: 30,
    obesitas: 35,
    ernstig_obees: 40
};

function validateForm() {
    let form = document.forms["bmi_berekenen"];
    let leeftijd = form["leeftijd"].value;
    let lengte = form["lengte"].value;
    let gewicht = form["gewicht"].value;
    var getal = /^[0-9]+$/;
    let resultaat = document.getElementById("resultaat");
    
    // kijken of alle waardes kloppen
    if (leeftijd === "" || lengte === "" || gewicht === "") 
    {
        alert("Je moet alle gegevens invullen");
        return false;
    } 
    
    if (!getal.test(lengte) || !getal.test(gewicht) || !getal.test(leeftijd))
    {
        alert("Voer alstublieft alleen getallen in.");
        return false;
    }

    if (leeftijd < 18) 
    {
        alert("Je moet 18 jaar of ouder zijn om deze berekening te maken");
        return false;
    }


    // BMI Berekening
    lengte = lengte / 100; 
    let bmi = gewicht / (lengte * lengte);
    // resultaat afkorten tot 1 cijfer achter de komma en weergeven
    

 // Categorie bepalen
    let categorie = '';
    switch (true) {
        case (bmi < bmi_categorie.ondergewicht):
            categorie = 'Ondergewicht';
            break;
        case (bmi <= bmi_categorie.gezond):
            categorie = 'Gezond gewicht';
            break;
        case (bmi <= bmi_categorie.overgewicht):
            categorie = 'Overgewicht';
            break;
        case (bmi <= bmi_categorie.obesitas):
            categorie = 'Obesitas';
            break;
        case (bmi > bmi_categorie.ernstig_obees):
            categorie = 'Ernstige obesitas';
            break;
        default:
            categorie = 'Onbekend';
            break;
    }
    resultaat.innerHTML = "Je hebt een BMI van: " + bmi.toFixed(1) + " en je valt in de categorie: " + categorie;

    // zorgen dat bmi getoont wordt
    return false;
}