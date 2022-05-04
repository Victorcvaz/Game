
function startGame(){

let numRandom = Math.round(Math.random());

document.querySelector(".btnTimer").innerHTML = "00";

function changeTurn(player){
    if(player === 0){
        document.querySelector(".p1").style.color = "greenyellow"
        document.querySelector(".p2").style.color = "green"
    }else{
        document.querySelector(".p2").style.color = "greenyellow"
        document.querySelector(".p1").style.color = "green"
    }
    if(player === 0){
        return 1;
    }else{
        return 0;
    };
};

let turn = changeTurn(numRandom);

let num1 = document.querySelector(".field1").addEventListener("click", () => {
    if(num1 !== undefined){
        alert("Escolha outro campo");
    }else if(turn === 0){
        document.querySelector(".field1").innerHTML = "X";
        num1 = "X";  
        if(num1 === "X" && num4 === "X" && num7 === "X"){
            alert("Player2 Win");
        }else if(num1 === "X" && num2 === "X" && num3 === "X"){
            alert("Player2 Win");
        }else if(num1 === "X" && num5 === "X" && num9 === "X"){
            alert("Player2 Win");
        }else{
            turn = changeTurn(turn); 
        };
    }else{
        document.querySelector(".field1").innerHTML = "O"; 
        num1 = "O";
        if(num1 === "O" && num4 === "O" && num7 === "O"){
            alert("Player1 Win");
        }else if(num1 === "O" && num2 === "O" && num3 === "O"){
            alert("Player1 Win");
        }else if(num1 === "O" && num5 === "O" && num9 === "O"){
            alert("Player1 Win");
        }else{
            turn = changeTurn(turn); 
        };
    };
});
let num2 = document.querySelector(".field2").addEventListener
("click", () => {
    if(num2 !== undefined){
        alert("Escolha outro campo");
    }else if(turn === 0){
        document.querySelector(".field2").innerHTML = "X";
        num2 = "X";  
        if(num2 === "X" && num5 === "X" && num8 === "X"){
            alert("Player2 Win");
        }else if(num1 === "X" && num2 === "X" && num3 === "X"){
            alert("Player2 Win");
        }else{
            turn = changeTurn(turn); 
        };
    }else{
        document.querySelector(".field2").innerHTML = "O"; 
        num2 = "O";
        if(num2 === "O" && num5 === "O" && num8 === "O"){
            alert("Player1 Win");
        }else if(num1 === "O" && num2 === "O" && num3 === "O"){
            alert("Player1 Win");
        }else{
            turn = changeTurn(turn); 
        };
    };
});
let num3 = document.querySelector(".field3").addEventListener
("click", () => {
    if(num3 !== undefined){
        alert("Escolha outro campo");
    }else if(turn === 0){
        document.querySelector(".field3").innerHTML = "X";
        num3 = "X";  
        if(num3 === "X" && num6 === "X" && num9 === "X"){
            alert("Player2 Win");
        }else if(num1 === "X" && num2 === "X" && num3 === "X"){
            alert("Player2 Win");
        }else if(num3 === "X" && num5 === "X" && num7 === "X"){
            alert("Player2 Win");
        }else{
            turn = changeTurn(turn); 
        };
    }else{
        document.querySelector(".field3").innerHTML = "O"; 
        num3 = "O";
        if(num3 === "O" && num6 === "O" && num9 === "O"){
            alert("Player1 Win");
        }else if(num1 === "O" && num2 === "O" && num3 === "O"){
            alert("Player1 Win");
        }else if(num3 === "O" && num5 === "O" && num7 === "O"){
            alert("Player1 Win");
        }else{
            turn = changeTurn(turn); 
        };
    };
});
let num4 = document.querySelector(".field4").addEventListener("click", () => {
    if(num4 !== undefined){
        alert("Escolha outro campo");
    }else if(turn === 0){
        document.querySelector(".field4").innerHTML = "X";
        num4 = "X";  
        if(num4 === "X" && num5 === "X" && num6 === "X"){
            alert("Player2 Win");
        }else if(num1 === "X" && num4 === "X" && num7 === "X"){
            alert("Player2 Win");
        }else{
            turn = changeTurn(turn); 
        };
    }else{
        document.querySelector(".field4").innerHTML = "O"; 
        num4 = "O";
        if(num4 === "O" && num5 === "O" && num6 === "O"){
            alert("Player1 Win");
        }else if(num1 === "O" && num4 === "O" && num7 === "O"){
            alert("Player1 Win");
        }else{
            turn = changeTurn(turn); 
        };
    };
});
let num5 = document.querySelector(".field5").addEventListener("click", () => {
    if(num5 !== undefined){
        alert("Escolha outro campo");
    }else if(turn === 0){
        document.querySelector(".field5").innerHTML = "X";
        num5 = "X";  
        if(num4 === "X" && num5 === "X" && num6 === "X"){
            alert("Player2 Win");
        }else if(num2 === "X" && num5 === "X" && num8 === "X"){
            alert("Player2 Win");
        }else if(num1 === "X" && num5 === "X" && num9 === "X"){
            alert("Player2 Win");
        }else if(num3 === "X" && num5 === "X" && num7 === "X"){
            alert("Player2 Win");
        }else{
            turn = changeTurn(turn); 
        };
    }else{
        document.querySelector(".field5").innerHTML = "O"; 
        num5 = "O";
        if(num4 === "O" && num5 === "O" && num6 === "O"){
            alert("Player1 Win");
        }else if(num2 === "O" && num5 === "O" && num8 === "O"){
            alert("Player1 Win");
        }else if(num1 === "O" && num5 === "O" && num9 === "O"){
            alert("Player1 Win");
        }else if(num3 === "O" && num5 === "O" && num7 === "O"){
            alert("Player1 Win");
        }else{
            turn = changeTurn(turn); 
        };
    };
});
let num6 = document.querySelector(".field6").addEventListener
("click", () => {
    if(num6 !== undefined){
        alert("Escolha outro campo");
    }else if(turn === 0){
        document.querySelector(".field6").innerHTML = "X";
        num6 = "X";  
        if(num6 === "X" && num5 === "X" && num4 === "X"){
            alert("Player2 Win");
        }else if(num6 === "X" && num9 === "X" && num3 === "X"){
            alert("Player2 Win");
        }else{
            turn = changeTurn(turn); 
        };
    }else{
        document.querySelector(".field6").innerHTML = "O"; 
        num6 = "O";
        if(num4 === "O" && num5 === "O" && num6 === "O"){
            alert("Player1 Win");
        }else if(num6 === "O" && num9 === "O" && num3 === "O"){
            alert("Player1 Win");
        }else{
            turn = changeTurn(turn); 
        };
    };
});
let num7 = document.querySelector(".field7").addEventListener("click", () => {
    if(num7 !== undefined){
        alert("Escolha outro campo");
    }else if(turn === 0){
        document.querySelector(".field7").innerHTML = "X";
        num7 = "X";  
        if(num7 === "X" && num8 === "X" && num9 === "X"){
            alert("Player2 Win");
        }else if(num7 === "X" && num4 === "X" && num1 === "X"){
            alert("Player2 Win");
        }else if(num7 === "X" && num5 === "X" && num3 === "X"){
            alert("Player2 Win");
        }else{
            turn = changeTurn(turn); 
        };
    }else{
        document.querySelector(".field7").innerHTML = "O"; 
        num7 = "O";
        if(num7 === "O" && num8 === "O" && num9 === "O"){
            alert("Player1 Win");
        }else if(num7 === "O" && num4 === "O" && num1 === "O"){
            alert("Player1 Win");
        }else if(num7 === "O" && num5 === "O" && num3 === "O"){
            alert("Player1 Win");
        }else{
            turn = changeTurn(turn); 
        };
    };
});
let num8 = document.querySelector(".field8").addEventListener("click", () => {
    if(num8 !== undefined){
        alert("Escolha outro campo");
    }else if(turn === 0){
        document.querySelector(".field8").innerHTML = "X";
        num8 = "X";  
        if(num8 === "X" && num5 === "X" && num2 === "X"){
            alert("Player2 Win");
        }else if(num8 === "X" && num9 === "X" && num7 === "X"){
            alert("Player2 Win");
        }else{
            turn = changeTurn(turn); 
        };
    }else{
        document.querySelector(".field8").innerHTML = "O"; 
        num8 = "O";
        if(num8 === "O" && num5 === "O" && num2 === "O"){
            alert("Player1 Win");
        }else if(num8 === "O" && num9 === "O" && num7 === "O"){
            alert("Player1 Win");
        }else{
            turn = changeTurn(turn); 
        };
    };
});
let num9 = document.querySelector(".field9").addEventListener("click", () => {
    if(num9 !== undefined){
        alert("Escolha outro campo");
    }else if(turn === 0){
        document.querySelector(".field9").innerHTML = "X";
        num9 = "X";  
        if(num7 === "X" && num8 === "X" && num9 === "X"){
            alert("Player2 Win");
        }else if(num9 === "X" && num6 === "X" && num3 === "X"){
            alert("Player2 Win");
        }else if(num9 === "X" && num5 === "X" && num1 === "X"){
            alert("Player2 Win");
        }else{
            turn = changeTurn(turn); 
        };
    }else{
        document.querySelector(".field9").innerHTML = "O"; 
        num9 = "O";
        if(num7 === "O" && num8 === "O" && num9 === "O"){
            alert("Player1 Win");
        }else if(num9 === "O" && num6 === "O" && num3 === "O"){
            alert("Player1 Win");
        }else if(num9 === "O" && num5 === "O" && num1 === "O"){
            alert("Player1 Win");
        }else{
            turn = changeTurn(turn); 
        };
    };
});

};

document.querySelector(".btnStart").addEventListener("click", () =>{
    startGame();
});

