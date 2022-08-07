//a random number from 1 - 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;


//dice1 - dice 6
var randomDiceImage = "dice" + randomNumber1 + ".png";


//images/dice1.png - images/dice6.png 
var randomImageScource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageScource);


//for image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageScource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageScource2);


//if player 1 wins
if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins !!!";
}
//if player 2 wins
else if (randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins !!!";
}
//if it's a draw
else
{
    document.querySelector("h1").innerHTML = "It's a DRAW !!!";
}