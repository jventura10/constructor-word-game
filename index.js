var inquirer=require("inquirer");
var word=require("./word.js");

var tries=0;
var words=["javier","ventura"]
var wordChosen; 
var newWord;

function changeWord(){
   wordChosen= words[Math.floor(Math.random() * words.length)];
   newWord=new word(wordChosen);
   newWord.createObjs();
}

function takeGuess(){
    inquirer.prompt([
        {
            type:"input",
            message: "Enter Letter: ",
            name: "guess"
        }
    ]).then(function(inquirerResponse){
        tries++;
        newWord.lookGuess(inquirerResponse.guess);
        newWord.showWord();
        let hasWon=newWord.checkWin();
        if(hasWon===true){
            console.log("YOU WON!!!");
            replay();
        }
        else{
            mainGame();
        }
    });

}

function replay(){
    inquirer.prompt([
        {
            type: "confirm",
            message: "Play Again? ",
            name: "newGame"
        }
    ]).then(function(response){
        if(response.newGame===true){
            tries=0;
            changeWord();
            mainGame();
        }
        else{
            console.log("Thanks For Playing!!!");
        }
    });
}

function mainGame(){
    if(tries<10){
        takeGuess();
    }
    else{
        console.log("You Lost :( ");
        replay();
    }
}

changeWord();
mainGame();