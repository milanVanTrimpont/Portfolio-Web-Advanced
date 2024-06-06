'use strict';

/*---Header---*/  

let headerTekst = "BMI Calculator";
document.getElementById("headerTekst").innerHTML = headerTekst;


/*---BMI---*/ 

const bmi_categorie = {
    ondergewicht: 18.5,
    gezond: 25,
    overgewicht: 30,
    obesitas: 35,
    ernstig_obees: 40
};

let bmiBerekenen = document.getElementById("bmi_berekenen");

bmiBerekenen.addEventListener("submit", (event) => 
{
    event.preventDefault();
    
    
    let leeftijd = bmiBerekenen["leeftijd"].value;
    let lengte = bmiBerekenen["lengte"].value;
    let gewicht = bmiBerekenen["gewicht"].value;
    var getal = /^[0-9]+$/;

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

    // BMI berekenen
    lengte = lengte / 100; 
    let bmi = gewicht / (lengte * lengte);
    
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
    let resultaat = document.getElementById("resultaat");
    resultaat.innerHTML = "Je hebt een BMI van: " + bmi.toFixed(1) + " en je valt in de categorie: " + categorie;

});

