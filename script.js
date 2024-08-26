let scoreX = 0;
let scoreO = 0;


let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let clearbtn = document.querySelector(".clear");
let xWin = document.querySelector(".score1");
let oWin = document.querySelector(".score2");



let turn1 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const newGame = () =>
{
    turn1 = true;
        enableBoxes();
        msgContainer.classList.add("hide");
};

const resetGame = () =>
    {
        turn1 = true;
        enableBoxes();
        msgContainer.classList.add("hide");

        xWin.innerText = "0";
        oWin.innerText = "0";
    };
 
const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
};   

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turn1) {
            box.innerText ="O";
            turn1=false;
        }
        else{
            box.innerText ="X";
            turn1=true;
        }
        box.disabled=true;
        checkWinner();
    });
});


const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

    if(Winner === "X")
    {
        scoreX++;
        xWin.innerText = scoreX;
    }
    else if(Winner === "O")
    {
        scoreO++;
        oWin.innerText = scoreO;
    }
};

const checkWinner = () =>{
    for(let pattern of winPatterns){  
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val === pos2val && pos2val=== pos3val)
                {
                    console.log("Winner",pos1val);
                    showWinner(pos1val);
                }
        }
    }
};



newGameBtn.addEventListener("click",newGame);
reset.addEventListener("click",resetGame);