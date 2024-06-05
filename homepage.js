'use strict';


function validateForm() {
    let form = document.forms["bmi_berekenen"];
    let leeftijd = form["leeftijd"].value;
    let lengte = form["lengte"].value;
    let gewicht = form["gewicht"].value;
    var getal = /^[0-9]+$/;

    
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

    return true;
}