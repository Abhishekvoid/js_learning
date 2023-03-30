let raceNumber = Math.floor(Math.random() * 1000);

let RegisterEarly = true;
const runnerAge = 20;

if ( runnerAge >= 18 && RegisterEarly){
   raceNumber += 1000;
}
if ( runnerAge >= 18 && RegisterEarly ){
   console.log(`your race time is 9:30 AM. Your race number is ${raceNumber}.`);
}
else if(runnerAge > 18 && !RegisterEarly){
  console.log(`your race time is 11:00 AM. Your race number is ${raceNumber}.`)
}
else if(runnerAge < 18){
  console.log(`your race time is 12:30 AM. your race number is ${raceNumber}.`)
}
else{
  console.log('plz!! check your registration desk')
}