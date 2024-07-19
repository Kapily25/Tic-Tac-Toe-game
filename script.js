let resetbtn = document.querySelector(".reset");
let msgcontainer = document.querySelector(".msgcontainer");
let newbtn = document.querySelector(".newbtn");
let msg = document.querySelector(".msg")
let turn0 = true;
const winpaterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetgame = () => {
    count = 0;
    turn0 = true;
    enablebox();
    msgcontainer.classList.add("hide");
}
let count = 0;

let boxs = document.querySelectorAll(".box");
boxs.forEach((box) => {

    box.addEventListener(("click"), () => {
        if (turn0) {
            box.innerText = "0";

            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        chekwinner();
    });
});

const disablbox = () => {
    for (let box of boxs) {
        box.disabled = true;
    }
};
const enablebox = () => {
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablbox();
    console.log(count);
}
const draw = () => {
    msg.innerText = 'Game is Draw';
    msgcontainer.classList.remove("hide");
    disablbox();
    // console.log(count);
    // console.log("game is draw");
}


const chekwinner = () => {
    for (let pattern of winpaterns) {
        let pos1val = boxs[pattern[0]].innerText
        let pos2val = boxs[pattern[1]].innerText
        let pos3val = boxs[pattern[2]].innerText
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);
            } else {
                if (count === 9) {
                    draw();
                }
            }
        }
    }
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);