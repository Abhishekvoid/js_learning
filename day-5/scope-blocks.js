const city = 'New York City';
function logCitySkyline(){
  let skyscraper = 'Empire State Building';
return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

// global scope

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky(){
return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())

//block scope

function logVisibleLightWaves(){
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }
  
  logVisibleLightWaves();
  // console.log(lightWaves); will provide error


//scope pollution

const satellitE = 'The Moon';
const galaxY = 'The Milky Way';
let starS = 'North Star';

const callMyNightSkY = () => {
  
   starS = 'Sirius';
	return 'Night Sky: ' + satellitE + ', ' + starS + ', ' + galaxY;
};

console.log(callMyNightSkY());
console.log(starS);
