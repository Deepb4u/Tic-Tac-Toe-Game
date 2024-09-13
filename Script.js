let boxes = document.querySelectorAll(".box"); // Changed to querySelectorAll to get all elements with the class 'box'
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newGame");
let Mesgdiv = document.querySelector(".Mesg");
let Mesgh1 = document.querySelector("#win");

let turn = 0;
let WiningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const newGame = () =>{
    let turn = 0;
    enabledboxes();
    Mesgdiv.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn==0){
            console.log();
            box.innerText="X";
            turn=1;
        }else{
            console.log(box);
            box.innerText="O";
            turn=0;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disabledboxes= () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enabledboxes= () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winne) => {
    Mesgh1.innerText=`congratulation winner is ${winne}`;
    Mesgdiv.classList.remove("hide");
    disabledboxes();
}
const checkwinner = () =>{
    for(let pattern of WiningPattern){

        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1===posval2 && posval2==posval3 ){
                showWinner(posval1);
            }
        }
    }
}

newbtn.addEventListener("click",newGame);
reset.addEventListener("click",newGame);


