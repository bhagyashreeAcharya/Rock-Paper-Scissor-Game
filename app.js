let userScore=0;
let compScore=0;

//lets access the choise 

const choices = document.querySelectorAll(".choice");

//lets access #msg in order to change messages dinamically 

const message= document.querySelector("#msg");

//lets access computer and user score paragraph of html

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () =>{
 const options = ["rock", "paper", "scissors"];
 const randIdx = Math.floor(Math.random() * 3);
 return options[randIdx];
}

const drawGame = () => {
   console.log("Game was Draw.");
   message.innerText = "Game was Draw. Play Again!";
   message.style.backgroundColor = "yellow" ;
   message.style.color = "blue" ;
   updateScoreColors();
}


const showWinner = (userWin, userChoice , compChoice) => {
// if userWin true print you win

  if(userWin){

    userScore++ ;
    userScorePara.innerText = userScore;
    console.log("You win!");
    //In order to change message as you win we will use innertext
    message.innerText = `You Win! Your ${userChoice} bits ${compChoice}`;
    message.style.backgroundColor = "green" ;
    message.style.color = "white" ;

  }
  else{

    compScore++ ;
    compScorePara.innerText = compScore;
    console.log("You lose");
    message.innerText = `You Lost!  ${compChoice} bits your ${userChoice}`;
    message.style.backgroundColor = "red" ;
    message.style.color = "white" ;
  }
  updateScoreColors();
 
}

const updateScoreColors = () => {
    if (userScore > compScore) {
        userScorePara.style.backgroundColor = "green";
        compScorePara.style.backgroundColor = "red";
    } else if (compScore > userScore) {
        userScorePara.style.backgroundColor = "red";
        compScorePara.style.backgroundColor = "green";
    } else {
        userScorePara.style.backgroundColor = "yellow";
        compScorePara.style.backgroundColor = "yellow";
    }
}


const playGame = (userChoice) =>{
    console.log("User Choice=", userChoice);

    //Generate Computer choice
    const compChoice = getCompChoice();
    console.log("Computer Choice=", compChoice);

    //cheque who is the winner 
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            //computer choice either scissor or paper

            userWin = compChoice === "paper" ? false : true;
        }

        else if(userChoice === "paper"){
            //computer choice either rock or scissor and scissor comp win

            userWin = compChoice === "scissors" ? false : true;
        }

        else{

            //user choic is scissors hence computer choice either rock or paper and it rock comp wins
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click" , () =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);// Call playgame with user choice
    });
});