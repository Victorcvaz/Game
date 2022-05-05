
function startGame() {

    let numRandom = Math.round(Math.random());
    let time = 10;
    let arrayCheck = [];
    arrayCheck.length = 9;
    function validacao() {
        let cont = arrayCheck.length
        for (let i = cont; i >= 0; i--) {
            if (arrayCheck[i] === "O" || arrayCheck[i] === "X") {
                arrayCheck.splice(arrayCheck[i]);
                return true;
            };
        };
        return false;
    };

    setInterval(myTimer, 1000);
    function myTimer() {
        document.querySelector(".btnTimer").innerHTML = time;
        time--;
        if (time < 0) {
            time = time + 11;
            turn = changeTurn(turn);
        } else {
            if (validacao() === true) {
                time = 10
            };
        };
    };

    function changeTurn(player) {
        if (player === 0) {
            document.querySelector(".p1").style.color = "rgb(29, 217, 29)"
            document.querySelector(".p2").style.color = "rgb(81, 9, 9)"
        } else {
            document.querySelector(".p2").style.color = "red"
            document.querySelector(".p1").style.color = "rgb(1, 48, 1)"
        };
        if (player === 0) {
            return 1;
        } else {
            return 0;
        };
    };

    let turn = changeTurn(numRandom);

    let num1 = document.querySelector(".field1").addEventListener("click", () => {
        if (num1 !== undefined) {
            alert("Escolha outro campo");
        } else if (turn === 0) {
            document.querySelector(".field1").innerHTML = "X";
            num1 = "X";
            arrayCheck[0] = num1;
            if (num1 === "X" && num4 === "X" && num7 === "X") {
                alert("Player2 Win");
            } else if (num1 === "X" && num2 === "X" && num3 === "X") {
                alert("Player2 Win");
            } else if (num1 === "X" && num5 === "X" && num9 === "X") {
                alert("Player2 Win");
            } else {
                turn = changeTurn(turn);
            };
        } else {
            document.querySelector(".field1").innerHTML = "O";
            num1 = "O";
            arrayCheck[0] = num1;
            if (num1 === "O" && num4 === "O" && num7 === "O") {
                alert("Player1 Win");
            } else if (num1 === "O" && num2 === "O" && num3 === "O") {
                alert("Player1 Win");
            } else if (num1 === "O" && num5 === "O" && num9 === "O") {
                alert("Player1 Win");
            } else {
                turn = changeTurn(turn);
            };
        };
    });
    let num2 = document.querySelector(".field2").addEventListener
        ("click", () => {
            if (num2 !== undefined) {
                alert("Escolha outro campo");
            } else if (turn === 0) {
                document.querySelector(".field2").innerHTML = "X";
                num2 = "X";
                arrayCheck[1] = num2;
                if (num2 === "X" && num5 === "X" && num8 === "X") {
                    alert("Player2 Win");
                } else if (num1 === "X" && num2 === "X" && num3 === "X") {
                    alert("Player2 Win");
                } else {
                    turn = changeTurn(turn);
                };
            } else {
                document.querySelector(".field2").innerHTML = "O";
                num2 = "O";
                arrayCheck[1] = num2;
                if (num2 === "O" && num5 === "O" && num8 === "O") {
                    alert("Player1 Win");
                } else if (num1 === "O" && num2 === "O" && num3 === "O") {
                    alert("Player1 Win");
                } else {
                    turn = changeTurn(turn);
                };
            };
        });
    let num3 = document.querySelector(".field3").addEventListener
        ("click", () => {
            if (num3 !== undefined) {
                alert("Escolha outro campo");
            } else if (turn === 0) {
                document.querySelector(".field3").innerHTML = "X";
                num3 = "X";
                arrayCheck[2] = num3;
                if (num3 === "X" && num6 === "X" && num9 === "X") {
                    alert("Player2 Win");
                } else if (num1 === "X" && num2 === "X" && num3 === "X") {
                    alert("Player2 Win");
                } else if (num3 === "X" && num5 === "X" && num7 === "X") {
                    alert("Player2 Win");
                } else {
                    turn = changeTurn(turn);
                };
            } else {
                document.querySelector(".field3").innerHTML = "O";
                num3 = "O";
                arrayCheck[2] = num3;
                if (num3 === "O" && num6 === "O" && num9 === "O") {
                    alert("Player1 Win");
                } else if (num1 === "O" && num2 === "O" && num3 === "O") {
                    alert("Player1 Win");
                } else if (num3 === "O" && num5 === "O" && num7 === "O") {
                    alert("Player1 Win");
                } else {
                    turn = changeTurn(turn);
                };
            };

        });
    let num4 = document.querySelector(".field4").addEventListener("click", () => {
        if (num4 !== undefined) {
            alert("Escolha outro campo");
        } else if (turn === 0) {
            document.querySelector(".field4").innerHTML = "X";
            num4 = "X";
            arrayCheck[3] = num4;
            if (num4 === "X" && num5 === "X" && num6 === "X") {
                alert("Player2 Win");
            } else if (num1 === "X" && num4 === "X" && num7 === "X") {
                alert("Player2 Win");
            } else {
                turn = changeTurn(turn);
            };
        } else {
            document.querySelector(".field4").innerHTML = "O";
            num4 = "O";
            arrayCheck[3] = num4;
            if (num4 === "O" && num5 === "O" && num6 === "O") {
                alert("Player1 Win");
            } else if (num1 === "O" && num4 === "O" && num7 === "O") {
                alert("Player1 Win");
            } else {
                turn = changeTurn(turn);
            };
        };
    });
    let num5 = document.querySelector(".field5").addEventListener("click", () => {
        if (num5 !== undefined) {
            alert("Escolha outro campo");
        } else if (turn === 0) {
            document.querySelector(".field5").innerHTML = "X";
            num5 = "X";
            arrayCheck[4] = num5;
            if (num4 === "X" && num5 === "X" && num6 === "X") {
                alert("Player2 Win");
            } else if (num2 === "X" && num5 === "X" && num8 === "X") {
                alert("Player2 Win");
            } else if (num1 === "X" && num5 === "X" && num9 === "X") {
                alert("Player2 Win");
            } else if (num3 === "X" && num5 === "X" && num7 === "X") {
                alert("Player2 Win");
            } else {
                turn = changeTurn(turn);
            };
        } else {
            document.querySelector(".field5").innerHTML = "O";
            num5 = "O";
            arrayCheck[4] = num5;
            if (num4 === "O" && num5 === "O" && num6 === "O") {
                alert("Player1 Win");
            } else if (num2 === "O" && num5 === "O" && num8 === "O") {
                alert("Player1 Win");
            } else if (num1 === "O" && num5 === "O" && num9 === "O") {
                alert("Player1 Win");
            } else if (num3 === "O" && num5 === "O" && num7 === "O") {
                alert("Player1 Win");
            } else {
                turn = changeTurn(turn);
            };
        };
    });
    let num6 = document.querySelector(".field6").addEventListener
        ("click", () => {
            if (num6 !== undefined) {
                alert("Escolha outro campo");
            } else if (turn === 0) {
                document.querySelector(".field6").innerHTML = "X";
                num6 = "X";
                arrayCheck[5] = num6;
                if (num6 === "X" && num5 === "X" && num4 === "X") {
                    alert("Player2 Win");
                } else if (num6 === "X" && num9 === "X" && num3 === "X") {
                    alert("Player2 Win");
                } else {
                    turn = changeTurn(turn);
                };
            } else {
                document.querySelector(".field6").innerHTML = "O";
                num6 = "O";
                arrayCheck[5] = num6;
                if (num4 === "O" && num5 === "O" && num6 === "O") {
                    alert("Player1 Win");
                } else if (num6 === "O" && num9 === "O" && num3 === "O") {
                    alert("Player1 Win");
                } else {
                    turn = changeTurn(turn);
                };
            };
        });
    let num7 = document.querySelector(".field7").addEventListener("click", () => {
        if (num7 !== undefined) {
            alert("Escolha outro campo");
        } else if (turn === 0) {
            document.querySelector(".field7").innerHTML = "X";
            num7 = "X";
            arrayCheck[6] = num7;
            if (num7 === "X" && num8 === "X" && num9 === "X") {
                alert("Player2 Win");
            } else if (num7 === "X" && num4 === "X" && num1 === "X") {
                alert("Player2 Win");
            } else if (num7 === "X" && num5 === "X" && num3 === "X") {
                alert("Player2 Win");
            } else {
                turn = changeTurn(turn);
            };
        } else {
            document.querySelector(".field7").innerHTML = "O";
            num7 = "O";
            arrayCheck[6] = num7;
            if (num7 === "O" && num8 === "O" && num9 === "O") {
                alert("Player1 Win");
            } else if (num7 === "O" && num4 === "O" && num1 === "O") {
                alert("Player1 Win");
            } else if (num7 === "O" && num5 === "O" && num3 === "O") {
                alert("Player1 Win");
            } else {
                turn = changeTurn(turn);
            };
        };
    });
    let num8 = document.querySelector(".field8").addEventListener("click", () => {
        if (num8 !== undefined) {
            alert("Escolha outro campo");
        } else if (turn === 0) {
            document.querySelector(".field8").innerHTML = "X";
            num8 = "X";
            arrayCheck[7] = num8;
            if (num8 === "X" && num5 === "X" && num2 === "X") {
                alert("Player2 Win");
            } else if (num8 === "X" && num9 === "X" && num7 === "X") {
                alert("Player2 Win");
            } else {
                turn = changeTurn(turn);
            };
        } else {
            document.querySelector(".field8").innerHTML = "O";
            num8 = "O";
            arrayCheck[7] = num8;
            if (num8 === "O" && num5 === "O" && num2 === "O") {
                alert("Player1 Win");
            } else if (num8 === "O" && num9 === "O" && num7 === "O") {
                alert("Player1 Win");
            } else {
                turn = changeTurn(turn);
            };
        };
    });
    let num9 = document.querySelector(".field9").addEventListener("click", () => {
        if (num9 !== undefined) {
            alert("Escolha outro campo");
        } else if (turn === 0) {
            document.querySelector(".field9").innerHTML = "X";
            num9 = "X";
            arrayCheck[8] = num9;
            if (num7 === "X" && num8 === "X" && num9 === "X") {
                alert("Player2 Win");
            } else if (num9 === "X" && num6 === "X" && num3 === "X") {
                alert("Player2 Win");
            } else if (num9 === "X" && num5 === "X" && num1 === "X") {
                alert("Player2 Win");
            } else {
                turn = changeTurn(turn);
            };
        } else {
            document.querySelector(".field9").innerHTML = "O";
            num9 = "O";
            arrayCheck[8] = num9;
            if (num7 === "O" && num8 === "O" && num9 === "O") {
                alert("Player1 Win");
            } else if (num9 === "O" && num6 === "O" && num3 === "O") {
                alert("Player1 Win");
            } else if (num9 === "O" && num5 === "O" && num1 === "O") {
                alert("Player1 Win");
            } else {
                turn = changeTurn(turn);
            };
        };
    });
};

document.querySelector(".btnStart").addEventListener("click", () => {
    startGame();
});

