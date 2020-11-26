var randomNumber1;
var x = 6*(Math.random());
randomNumber1 = Math.floor(x+1);

var randomDiceImage1 = "images/" + "dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src" , randomDiceImage1);




var randomNumber2;
var x = 6*(Math.random());
randomNumber2 = Math.floor(x+1);

var randomDiceImage2 = "images/" + "dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src" , randomDiceImage2);



if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins !";
}
else if(randomNumber1==randomNumber2)
{
  document.querySelector("h1").innerHTML = "Draw !";
}
else
{
  document.querySelector("h1").innerHTML = "Player 2 Wins ! 🚩";
}
