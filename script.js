let randomOne = Math.floor(Math.random() * 6) + 1;
let randomTwo = Math.floor(Math.random() * 6) + 1;


let dice1Img = "images/dice" + randomOne + ".png";
document.querySelector(".img1").setAttribute("src", dice1Img);

let dice2Img = "images/dice" + randomTwo + ".png";
document.querySelector(".img2").setAttribute("src", dice2Img);


if (randomOne > randomTwo) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomOne < randomTwo) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Refresh me!";
}