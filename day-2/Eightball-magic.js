let username = 'Abhishek';
username ? console.log(`Hello, ${username}!`) : console.log('Hello!')

const userQuestion = "What will be my future?";
console.log(`${userQuestion}${username} let me predict`)

let randomNumber = (Math.floor(Math.random() * 8))
console.log("so your random number is", randomNumber ,":)");

let eightBall = '';
if (randomNumber === 0){
   eightBall = 'It is certain';
}
else if(randomNumber === 1){
   eightBall = 'It is decicely so';
}
else if(randomNumber === 2){
   eightBall = 'Realy hazy try again';
}
else if(randomNumber === 3){
   eightBall = 'Cannot predict now';
}
else if(randomNumber === 4){
   eightBall = 'Do not count on it';
}
else if(randomNumber === 5){
   eightBall = 'My sources say no';
}
else if(randomNumber === 6){
   eightBall = 'Outlook not so good';

}else if(randomNumber === 7){
   eightBall = 'Signs point to yes';
}
else{
  eightBall = 'unlucky!!'
}
console.log("Ho!! Here is your Luck: ", eightBall);