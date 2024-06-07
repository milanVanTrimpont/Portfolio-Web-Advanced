'use strict';

/*---Header---*/  

let headerTekst = "BMI Calculator";
document.getElementById("headerTekst").innerHTML = headerTekst;


/*---BMI---*/ 

const bmi_categorie = 
{   
    ernstig_ondergewicht: 12.5,
    ondergewicht: 18.5,
    gezond: 25,
    overgewicht: 30,
    obesitas: 35,
    ernstig_obees: 40
};

let bmiBerekenen = document.getElementById("bmi_berekenen");

/*BMI berekenen*/
bmiBerekenen.addEventListener("submit", async (event) => 
{
    event.preventDefault();
    
    // variabele aanmaken
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

        // BMI berekenen van de ingevoerde waardes via de functie
        const { bmi, categorie } = await bmiBerekening(lengte, gewicht);

            const resultaat = document.getElementById("resultaat");
            resultaat.innerHTML = "Je hebt een BMI van: " + bmi.toFixed(1) + " en je valt in de categorie: " + categorie;
            

    // De animatie-element selecteren
    const animateDiv = document.querySelector('.animate .kleur');
    animateDiv.className = 'kleur'; // Reset de class om animatie opnieuw te starten
    


    // De juiste kleur en breedte instellen op basis van de categorie
    if (categorie === 'Gezond gewicht') 
    {
        animateDiv.classList.add('groen', 'animate');
    } 
    else if (categorie === 'Ondergewicht' || categorie === 'Overgewicht') 
    {
        animateDiv.classList.add('geel', 'animate');
    } 
    else if (categorie === 'Obesitas') {
        animateDiv.classList.add('oranje', 'animate');
    } 
    else if (categorie === 'Ernstige obesitas' || categorie === 'Ernstig ondergewicht') 
        {
        animateDiv.classList.add('rood', 'animate');
    }
});
           
// BMI berekenen functie
async function bmiBerekening(lengte, gewicht) {
    lengte = lengte / 100; 
    const bmi = gewicht / (lengte * lengte);

    // Categorie bepalen
    let categorie = '';
    switch (true) {
        case (bmi < bmi_categorie.ernstig_ondergewicht):
            categorie = 'Ernstig ondergewicht';
            break;
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
        case (bmi > bmi_categorie.obesitas):
            categorie = 'Ernstige obesitas';
            break;
        default:
            categorie = 'Onbekend';
            break;
    }

    return { bmi, categorie };
}
    
    


