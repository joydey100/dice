var random1 = Math.floor(Math.random() * 6)+ 1;

var imageRandom1 = "images/dice" + random1 + ".png";

var imageTarget = document.querySelector(".dice1");

imageTarget.setAttribute("src", imageRandom1);


var random2 = Math.floor(Math.random() * 6)+ 1;

var imageRandom2 = "images/dice" + random2 + ".png";

var imageTarget2 = document.querySelector(".dice2");

imageTarget2.setAttribute("src", imageRandom2);


if(random1>random2){
    document.querySelector("h4").innerHTML = "⛳ Player01 Wins!";
}
else if(random2 > random1){
    document.querySelector("h4").innerHTML = " Player02 Wins! ⛳";
}
else{
    document.querySelector("h4").innerHTML = "Draw";
}