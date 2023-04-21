//Random Fact Generator

//Time the JWST has been in space

//Time until it gets to L2 and so on

//What did hubble see on your birthday? - Add a little snippet saying, what could webb see in the future? 
//https://www.nasa.gov/content/goddard/what-did-hubble-see-on-your-birthday

//Count down timer until Webb goes inoperable

function newFact() {
let randomNum = Math.floor(Math.random() * (facts.length));
document.getElementById("factDisplay").innerHTML = facts[randomNum];
}



let facts = [
    "It is 1000 times more powerful than the Hubble telescope and can see details on a U.S. penny at a distance of 24 miles away. It sees it all outside the visible spectrum — it sees infrared light.",
    "The James Webb Space Telescope is actually lighter than its predecessor, the Hubble Space Telescope.",
    "James Webb\’s mirrors are the lightest large telescope mirrors of all-time.",
    "Although they appear gold, James Webb\’s mirrors are actually made out of beryllium.",
    "The total amount of gold in the James Webb Space Telescope\’s mirrors is only 48 grams: less than 2 ounces.",
    "With active, cryogenic cooling, Webb will get all the way down to ~7 K.",
    "Unlike NASA\’s Spitzer, which transitioned to a “warm” mission when it ran out of coolant, James Webb should maintain its cold temperatures for its entire lifespan.",
    "When it runs out of fuel, its fate will be to permanently reside in a “graveyard orbit” around the Sun.",
    "Although it wasn\’t designed to be serviced and upgraded, it could potentially be robotically refueled to extend its life.",

]