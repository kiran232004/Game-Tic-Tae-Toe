let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgame=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;
let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turn0=true;
    count=0;
    enabledboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
}
box.disabled=true;
count++;

let iswinner =checkwinner();
if(count===9 && !iswinner){
    gamedraw();
}
    });
});

const gamedraw=()=>{
    msg.innerText="game was a draw";
    msgcontainer.classList.remove("hide");
    disabledboxes();
};
const disabledboxes=()=>{
    for(let box of boxes){
    box.disabled=true;
}
};

const enabledboxes=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
}
};
 const showWinner=(winner)=>{
    msg.innerText="Congrulations , Winner is "+winner;
    msgcontainer.classList.remove("hide");
    disabledboxes();
 };
const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
                return true;
            }
        }
    }
    return false;

};

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);