let button = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let newGamebutton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0 ;
const winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
button.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; // isses user ek baar click krne ke baad useme click nhi kar payega.
        count ++;
       let isWinner = checkWinner();
       if(count === 9 && !isWinner){
        gameDraw();
       }
    });
});  
const gameDraw = ()=>{
    msg.innerText= `Game was a draw`;
    msgContainer.classList.remove("hide");
    disableBoxses();
};
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxses();
    msgContainer.classList.add("hide");
};
const enableBoxses = () => {
    for (let box of button) {
        box.disabled = false;
        box.innerText = "";
    }
};
const disableBoxses = () => {
    for (let box of button) {
        box.disabled = true;
    }
};
const showWinner = (Winner) => {
    msg.innerText = `Congratulations , Winner is  ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxses();
};
const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(button[pattern[0]].innerText,button[pattern[1]].innerText,button[pattern[2]].innerText);
        let post0Value = button[pattern[0]].innerText;
        let post1Value = button[pattern[1]].innerText;
        let post2Value = button[pattern[2]].innerText;
        if (post0Value != "" && post1Value != "" && post2Value != "") {
            if (post0Value === post1Value && post0Value === post2Value) {
                // console.log("Winner" , post0Value);
                showWinner(post0Value);
            }
        }
    }
};
newGamebutton.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);








