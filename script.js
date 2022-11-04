// setting global values

//Player class parent
class Player {
    constructor(name) {
        this.name = name;
    }
}

class FirstPlayer extends Player {
    constructor(name, isPlayerX) {
        super(name);
        this.isPlayerX = isPlayerX
    }
}

class SecondPlayer extends Player {
    constructor(name, isPlayerO) {
        super(name);
        this.isPlayerO = isPlayerO
    }
}

let player1 = new FirstPlayer("Player X", "X")
// console.log(player1.isPlayerX)
let player2 = new SecondPlayer("Player O", "O")
//  console.log(player2)


 // 1 is player1 turn at the start of the game. 0 is player2 turn. will alternate.
let turn = 1
//checks whos turn it is and based on that, the text will change
function whosTurn1() {

    if(turn == 1) {
        document.getElementById("block0").innerHTML = player1.isPlayerX;
        document.getElementById("block0").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("block0").innerHTML = player2.isPlayerO;
        document.getElementById("block0").disabled = true;
        turn = 1;
    }

}

function whosTurn2() {

    if(turn == 1) {
        document.getElementById("block1").innerHTML = player1.isPlayerX;
        document.getElementById("block1").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("block1").innerHTML = player2.isPlayerO;
        document.getElementById("block1").disabled = true;
        turn = 1;
    }

}

function whosTurn3() {

    if(turn == 1) {
        document.getElementById("block2").innerHTML = player1.isPlayerX;
        document.getElementById("block2").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("block2").innerHTML = player2.isPlayerO;
        document.getElementById("block2").disabled = true;
        turn = 1;
    }

}

function whosTurn4() {

    if(turn == 1) {
        document.getElementById("block3").innerHTML = player1.isPlayerX;
        document.getElementById("block3").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("block3").innerHTML = player2.isPlayerO;
        document.getElementById("block3").disabled = true;
        turn = 1;
    }

}

function whosTurn5() {

    if(turn == 1) {
        document.getElementById("block4").innerHTML = player1.isPlayerX;
        document.getElementById("block4").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("block4").innerHTML = player2.isPlayerO;
        document.getElementById("block4").disabled = true;
        turn = 1;
    }

}

function whosTurn6() {

    if(turn == 1) {
        document.getElementById("block5").innerHTML = player1.isPlayerX;
        document.getElementById("block5").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("block5").innerHTML = player2.isPlayerO;
        document.getElementById("block5").disabled = true;
        turn = 1;
    }

}

function whosTurn7() {

    if(turn == 1) {
        document.getElementById("block6").innerHTML = player1.isPlayerX;
        document.getElementById("block6").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("block6").innerHTML = player2.isPlayerO;
        document.getElementById("block6").disabled = true;
        turn = 1;
    }

}

function whosTurn8() {

    if(turn == 1) {
        document.getElementById("block7").innerHTML = player1.isPlayerX;
        document.getElementById("block7").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("block7").innerHTML = player2.isPlayerO;
        document.getElementById("block7").disabled = true;
        turn = 1;
    }

}

function whosTurn9() {

    if(turn == 1) {
        document.getElementById("block8").innerHTML = player1.isPlayerX;
        document.getElementById("block8").disabled = true;
        turn = 0;
    }
    else {
        document.getElementById("block8").innerHTML = player2.isPlayerO;
        document.getElementById("block8").disabled = true;
        turn = 1;
    }

}

//function to check if anyone has won.
function winningCombo() {
    let block0 = document.getElementById("block0");
    let block1 = document.getElementById("block1");
    let block2 = document.getElementById("block2");
    let block3 = document.getElementById("block3");
    let block4 = document.getElementById("block4");
    let block5 = document.getElementById("block5");
    let block6 = document.getElementById("block6");
    let block7 = document.getElementById("block7");
    let block8 = document.getElementById("block8");
    //Player X
    if(block0.innerText === player1.isPlayerX && block1.innerText === player1.isPlayerX && block2.innerText === player1.isPlayerX) {
        document.getElementById("displayMessage").innerText = "Player X WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    } 
    else if(block3.innerText === player1.isPlayerX && block4.innerText === player1.isPlayerX && block5.innerText === player1.isPlayerX) {
        document.getElementById("displayMessage").innerText = "Player X WON!";
        document.querySelectorAll(".item").disatrue;
        // window.alert("123")
    }
    else if(block6.innerText === player1.isPlayerX && block7.innerText === player1.isPlayerX && block8.innerText === player1.isPlayerX) {
        document.getElementById("displayMessage").innerText = "Player X WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    }
    else if(block0.innerText === player1.isPlayerX && block3.innerText === player1.isPlayerX && block6.innerText === player1.isPlayerX) {
        document.getElementById("displayMessage").innerText = "Player X WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    }
    else if(block1.innerText === player1.isPlayerX && block4.innerText === player1.isPlayerX && block7.innerText === player1.isPlayerX) {
        document.getElementById("displayMessage").innerText = "Player X WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    }else if(block2.innerText === player1.isPlayerX && block5.innerText === player1.isPlayerX && block8.innerText === player1.isPlayerX) {
        document.getElementById("displayMessage").innerText = "Player X WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    }
    else if(block0.innerText === player1.isPlayerX && block4.innerText === player1.isPlayerX && block8.innerText === player1.isPlayerX) {
        document.getElementById("displayMessage").innerText = "Player X WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    }
    else if(block2.innerText === player1.isPlayerX && block4.innerText === player1.isPlayerX && block6.innerText === player1.isPlayerX) {
        document.getElementById("displayMessage").innerText = "Player X WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    }
    //Player O 
    else if(block0.innerText === player2.isPlayerO && block1.innerText === player2.isPlayerO && block2.innerText === player2.isPlayerO) {
        document.getElementById("displayMessage").innerText = "Player O WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    } 
    else if(block3.innerText === player2.isPlayerO && block4.innerText === player2.isPlayerO && block5.innerText === player2.isPlayerO) {
        document.getElementById("displayMessage").innerText = "Player O WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    } 
    else if(block6.innerText === player2.isPlayerO && block7.innerText === player2.isPlayerO && block8.innerText === player2.isPlayerO) {
        document.getElementById("displayMessage").innerText = "Player O WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    }
    else if(block0.innerText === player2.isPlayerO && block3.innerText === player2.isPlayerO && block6.innerText === player2.isPlayerO) {
        document.getElementById("displayMessage").innerText = "Player O WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    } 
    else if(block1.innerText === player2.isPlayerO && block4.innerText === player2.isPlayerO && block7.innerText === player2.isPlayerO) {
        document.getElementById("displayMessage").innerText = "Player O WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    } 
    else if(block2.innerText === player2.isPlayerO && block5.innerText === player2.isPlayer8 && block2.innerText === player2.isPlayerO) {
        document.getElementById("displayMessage").innerText = "Player O WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    } 
    else if(block0.innerText === player2.isPlayerO && block4.innerText === player2.isPlayerO && block8.innerText === player2.isPlayerO) {
        document.getElementById("displayMessage").innerText = "Player O WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    } 
    else if(block2.innerText === player2.isPlayerO && block4.innerText === player2.isPlayer6 && block2.innerText === player2.isPlayerO) {
        document.getElementById("displayMessage").innerText = "Player O WON!";
        document.querySelectorAll(".item").disabled = true;
        // window.alert("123")
    }  
}





//reset button to clear the board
function resetButton() {
    location.reload();
    return false;
    // document.querySelectorAll(".restart").textContent = ''
}

// function resetButton() {
//     let highlight = document.querySelectorAll(".restart");
//     highlight.forEach(function(item){
//         item.value = ''
//     })
// }



