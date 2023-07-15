
var numselected = null;
var tileselected = null;

var errors = 0; 

var board = [
"2-9---6--",
"-4-87--12",
"8---19-4-",
"-3-7--8-1",
"-65--8-3-",
"1---3---7",
"---6-7-89",
"6-4----2-",
"-8-3-145-",
]
// alert("hii")

var solution = [
    "219543678",
    "543876912",
    "876219345",
    "432765981",
    "765198234",
    "198432567",
    "321654789",
    "654987123",
    "987321456",
]
window.onload = function(){
makegame();
}
const digit = document.querySelector("#digit");
const numcontainer = document.querySelector("#board")
function makegame(){

    // setting number 1-9
    for(let i=1;i<=9;i++){
  
    let number = document.createElement("div");
    number.id = i
    number.innerText = i;
    number.addEventListener("click", choosenum)
  

// numselected = this
// numselected.classList.add("selected")
        
    
  
       number.classList.add("number");
digit.appendChild(number)
}
}


for(let i=0;i<9;i++){
    for(let k=0;k<9;k++){
        let tile = document.createElement("div");
        tile.id = i.toString() + "-" + k.toString();
       if(board[i][k] != "-"){
        tile.innerText = board[i][k]
        tile.classList.add("addshadow")
       }

       if(i == 2 || i == 5){
        tile.classList.add("harizontal");
       } if(k == 2 || k==5){
        tile.classList.add("vertical")
       }

        tile.classList.add("tile");
        numcontainer.appendChild(tile)
tile.addEventListener("click",setnumber);
    }
}

function choosenum(){
if(numselected != null){
    numselected.classList.remove("selected")
}
numselected = this;
numselected.classList.add("selected")
  let number = null
// if(number != null){
//     number.classList.remove("selected")
// }
// number = this
// number.classList.add("selected");
}

function setnumber(){
    if(numselected){
        if(this.innerText != ""){
            return;
        }
       

        let check =this.id.split("-");
        let i = parseInt(check[0]);
        let k = parseInt(check[1]);
        if(solution[i][k] == numselected.id){
            this.innerText = numselected.id
        }else{
            errors +=1;
            let mistake = document.querySelector("#errors")
            mistake.innerText =  errors;
        }

    }
}

