
// Computer chocie
function computerchoice(){
    const choice = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}


//user choice
function userchoices(){
    let choice = prompt('Choose rock, paper, or scissors:');
    console.log('User choice:', choice);
    choice = choice.toLocaleLowerCase().trim();
    if (choice !== 'rock' && choice !== 'paper & choice !== scissors'){
        alert('invalid choice!! Plz choice again');
        return userchoice();
    }
    return choice;
}

// compare the choice 
function determinewinner(user, computer){
    if(user === computer){
        return "it's a tie!";
    }
    else if ((user == 'rock' && computer == 'scissors') ||
            (user == 'paper' && computer == 'rock') ||
            (user == 'scissors' && computer == 'paper')){
                return 'you wins!';
            }
            else{
                return 'computer wins';
            }
    
}

//play the game 
const user = userchoices();
const computer = computerchoice();
const result = determine(user, computer);
alter(`you chose ${user}. computer chose ${computer}. ${result}`);
