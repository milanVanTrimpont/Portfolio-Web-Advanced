'use strict';

/*---Header---*/  

let headerTekst = "BMI Calculator";
document.getElementById("headerTekst").innerHTML = headerTekst;


/* welcom bericht */
(function() 
{
    // Welkomstbericht
    const naam = prompt("Wat is je naam?");
    const welkomstTekst = `Welkome op mijn BMI calculator ${naam}`
    alert(welkomstTekst);
})
();

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


overgewicht(bmi_categorie);

function overgewicht({obesitas, ernstig_obees}) 
{
    const message = 'Je hebt obesitas als je BMI hoger is dan ' + obesitas + ' of ernstig obees als je ' + ernstig_obees + ' of meer hebt.';
  
    document.getElementById("obeesTekst").innerHTML = message;
}


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
            

            let toegevoegdTekst = document.getElementById("toegevoegdTekst");

            let data = 
            {
                leeftijd: leeftijd,
                lengte: lengte,
                gewicht: gewicht,
                bmi: bmi,
                categorie: categorie
            };
        
            let jsonData = JSON.stringify(data);
            //localStorage.setItem('data', jsonData);
        
            toegevoegdTekst.innerHTML = "De waardes zijn opgeslagen";
        
            // toon ook al deze waardes
            // nieuwe rij maken en gegevens tonen
            let tabel = document.getElementById("TabelGegevens");
            let nieuweRij = tabel.insertRow(-1); // Voeg een nieuwe rij toe aan het einde van de tabel

            let leeftijdCel = nieuweRij.insertCell(0);
            let lengteCel = nieuweRij.insertCell(1);
            let gewichtCel = nieuweRij.insertCell(2);
            let bmiCel = nieuweRij.insertCell(3);
            let categorieCel = nieuweRij.insertCell(4);

            leeftijdCel.innerHTML = data.leeftijd + " jaar";
            lengteCel.innerHTML = data.lengte + " cm";
            gewichtCel.innerHTML = data.gewicht + " kg";
            bmiCel.innerHTML = data.bmi.toFixed(1);
            categorieCel.innerHTML = data.categorie;
                
            




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



// standaard waarden man
localStorage.setItem('leeftijdM', 18);
localStorage.setItem('lengteM', 175);
localStorage.setItem('gewichtM', 70);
localStorage.setItem('bmiM', 22.9);
localStorage.setItem('categorieM', 'gezond gewicht');
//standaard waarden vrouw
localStorage.setItem('leeftijdV', 18);
localStorage.setItem('lengteV', 165);
localStorage.setItem('gewichtV', 60);
localStorage.setItem('bmiV', 22.0);
localStorage.setItem('categorieV', 'gezond gewicht');
//obesitas
localStorage.setItem('leeftijdO', 18);
localStorage.setItem('lengteO', 175);
localStorage.setItem('gewichtO', 100);
localStorage.setItem('bmiO', 32.7);
localStorage.setItem('categorieO', 'obesitas');


// ophalen van de waarden man
localStorage.getItem('leeftijdM');
localStorage.getItem('lengteM');
localStorage.getItem('gewichtM');
localStorage.getItem('bmiM');
localStorage.getItem('categorieM');

// ophalen van de waarden vrouw
localStorage.getItem('leeftijdV');
localStorage.getItem('lengteV');
localStorage.getItem('gewichtV');
localStorage.getItem('bmiV');
localStorage.getItem('categorieV');

// ophalen van de waarden obesitas
localStorage.getItem('leeftijdO');
localStorage.getItem('lengteO');
localStorage.getItem('gewichtO');
localStorage.getItem('bmiO');
localStorage.getItem('categorieO');
    
    
// weergeven als er op de knop gedrukt wordt
document.getElementById('standaardWaardenM').addEventListener('click', () => 
{   
    document.getElementById("leeftijd").innerHTML = "Leeftijd: " + localStorage.getItem('leeftijdM') + " jaar";
    document.getElementById("lengte").innerHTML = "Lengte: " + localStorage.getItem('lengteM') + " cm";
    document.getElementById("gewicht").innerHTML = "Gewicht: " + localStorage.getItem('gewichtM') + " kg";
    document.getElementById("bmi").innerHTML = "BMI: " + localStorage.getItem('bmiM');
    document.getElementById("categorie").innerHTML = "Categorie: " + localStorage.getItem('categorieM');
});

document.getElementById('standaardWaardenV').addEventListener('click', () => 
{   
    document.getElementById("leeftijd").innerHTML = "Leeftijd: " + localStorage.getItem('leeftijdV') + " jaar";
    document.getElementById("lengte").innerHTML = "Lengte: " + localStorage.getItem('lengteV') + " cm";
    document.getElementById("gewicht").innerHTML = "Gewicht: " + localStorage.getItem('gewichtV') + " kg";
    document.getElementById("bmi").innerHTML = "BMI: " + localStorage.getItem('bmiV');
    document.getElementById("categorie").innerHTML = "Categorie: " + localStorage.getItem('categorieV');
});

document.getElementById('obesitas').addEventListener('click', () => 
    {   
        document.getElementById("leeftijd").innerHTML = "Leeftijd: " + localStorage.getItem('leeftijdO') + " jaar";
        document.getElementById("lengte").innerHTML = "Lengte: " + localStorage.getItem('lengteO') + " cm";
        document.getElementById("gewicht").innerHTML = "Gewicht: " + localStorage.getItem('gewichtO') + " kg";
        document.getElementById("bmi").innerHTML = "BMI: " + localStorage.getItem('bmiO');
        document.getElementById("categorie").innerHTML = "Categorie: " + localStorage.getItem('categorieO');
    });





    // ophalen van de waarden
let verschil_Berekenen = document.getElementById("verschil_Berekenen");

/*BMI berekenen*/
verschil_Berekenen.addEventListener("submit", (event) => {
    event.preventDefault(); 

    // array maken van de waardes
    let eerste = [];
    eerste.push(verschil_Berekenen["lengte1"].value);
    eerste.push(verschil_Berekenen["gewicht1"].value);

    let tweede = [];
    tweede.push(verschil_Berekenen["lengte2"].value);
    tweede.push(verschil_Berekenen["gewicht2"].value);

    // samen voegen
    let beide = [...eerste, ...tweede];
    
    document.getElementById("alleGegevens").innerHTML = "Alle gegevens die u ingegeven heeft " + beide;


    // verschil berekenen
    let lengteVerschil = eerste[0] - tweede[0];
    let gewichtVerschil = eerste[1] - tweede[1];

    // negatief teken weghalen
    lengteVerschil = Math.abs(lengteVerschil);
    gewichtVerschil = Math.abs(gewichtVerschil);
    document.getElementById("verschil").innerHTML = "Het verschil in lengte is: " + lengteVerschil + " cm en het verschil in gewicht is: " + gewichtVerschil + " kg";
    

    
});
