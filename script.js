// setting Global values
// 1 is player1 turn at the start of the game. 0 is player2 turn. will alternate.
let turn = 1
// currentPlayer is a blank string. It will either be "X" or "O" based on whos turn it is.
let currentPlayer = ""

let displayMessage = document.querySelector("#displayMessage");
// options is a blank array that will be filled in based on the index taken from clickedIndex inside of playGame().
//It will add an "X" or "O" based on the block that is clicked, the index is grabbed as well as currentPlayer.
// options[index] = currentPlayer
let options = ["", "", "", "", "", "", "", "", "",]
//This is all the winning possibilities in tic tac toe. It is an array of an array.
//It will be checked against the strings inside options to see if there is a winner based on if a == b && b == c 
//inside the winningCombo function.
let  winningArr = [
    //row
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //column
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diag
    [0,4,8],
    [2,4,6]
];
//Player class parent
class Player {
    constructor(name) {
        this.name = name;
    }
}
//FirstPlayer will be player X
class FirstPlayer extends Player {
    constructor(name, isPlayerX) {
        super(name);
        this.isPlayerX = isPlayerX
    }
}
//SecondPlayer will be player O
class SecondPlayer extends Player {
    constructor(name, isPlayerO) {
        super(name);
        this.isPlayerO = isPlayerO
    }
}

let player1 = new FirstPlayer("Player X", "X")

let player2 = new SecondPlayer("Player O", "O")




//checks whos turn it is and based on that, it will take displayMessage and update the text on who's turn it is
//from currentPlayer as well as change the turn from 1 to 0 or vice versa and disable the block that way it 
//cannot be clicked on again.
function whosTurn(blockElement){
    if(turn){
      blockElement.innerText = player1.isPlayerX;
      displayMessage.innerText = `${player2.name}'s turn`;
      blockElement.disabled = true; 
      currentPlayer = "X"
      turn = 0;
    }
    else{
        blockElement.innerText = player2.isPlayerO;
        displayMessage.innerText = `${player1.name}'s turn`;
        blockElement.disabled = true;
        currentPlayer = "O"
        turn = 1;
    }
}

// blocks -> This fetches the elements of id of block and provides it as an array of elements
let blocks = document.querySelectorAll("#block");
console.log(blocks)
//startGame is a for loop that takes each element inside of the array-> blocks 
//and adds an event listener to each block as the for loop runs. When the individual block is clicked, 
//it will run the event listener and activate functions -> whosTurn(clicked) and winningCombo(clickedIndex).
function startGame(){
    for (let i = 0; i < blocks.length; i++) {
        const element = blocks[i];
        element.addEventListener("click",function(event){
            let clicked = event.target;
            let clickedIndex = i
            whosTurn(clicked);
            winningCombo(clickedIndex)
        });
    }
}


//WinningCombo checks to see if anyone has won. function to check if anyone has won.
//"X" or "O" is added to the options array at the index parameter of clickedIndex which is i in blocks[i]
//for loops through WinningArr Array. for each subarray of the array, it is put into the innerWinningArr.
//Each subindex of the innerWinningArr is checked at the index of options and is put into an individual 
//variable to check if they are empty strings(then it will skip and continue the rest of the for loop) or
//filled in with either "X" or "O"(if they are all the same string then print winning message). 
// !options.includes("")-> If there's no strings left empty and a,b and c do not match "X" or "O" then print draw message.
function winningCombo(index) {
    options[index] = currentPlayer
    // console.log(options)
    for(let i = 0; i < winningArr.length; i++){
        innerWinningArr = winningArr[i];
        console.log(innerWinningArr)
        let a = options[innerWinningArr[0]];
        // console.log(a)
        let b = options[innerWinningArr[1]];
        // console.log(b)
        let c = options[innerWinningArr[2]];
        // console.log(c)
        if(a == "" || b ==  "" || c == ""){
            continue;
        }

        if(a == b && b == c){
            displayMessage.innerText = `Player ${currentPlayer} WINS!`;
            disableButtons(blocks)
            break;
        }
        if(!options.includes("")){
            displayMessage.innerText = "IT'S A DRAW";
        }
    }
}

//disables buttons by looping through blocks variable which is an array of nodelist for id of block.
//It applies the disabled property individually to each button as it loops through the array.
function disableButtons(elements){
    for (let i = 0; i < elements.length; i++) {
        elements[i].disabled = true; 
    }
}



//reset button to clear the board
function resetButton() {
    location.reload();
    return false;
}

//Invoking startGame() to setup addEventListener, whosTurn() and winningCombo() function.
startGame()

