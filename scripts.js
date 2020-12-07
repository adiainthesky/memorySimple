let currentId = 0; 
let player1;
let player2;
let currentPlayer;


$(document).ready(function(){
  player1 = new Player(prompt("Please enter your name:"));
	player2 = new Player(prompt("Please enter your name:"));
  currentPlayer = player1;
  // dealCards(); 
  currentPlayer.turn();
});

function Player(name) {
  this.name = name;
  this.turnTaken = 0;
  this.total = 0;
};

const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "indigo"];
//double colors...
let rawPairs = colors.concat(colors);
//randomize...
let pairs = [];   //["green", "orange", "yellow", "purple", "pink", "indigo", ........."]
while (rawPairs.length){
  let randomIndex = Math.floor(Math.random() * rawPairs.length);
  let randomColor = rawPairs.splice(randomIndex, 1)[0];
  pairs.push(randomColor);
}
//create divs
for (let id=0; id<pairs.length; id++){
  //sixteen colors, randomly placed
  $("#table").append("<div class='card' id='card_" + id + "' data-color='" + pairs[id] + "'></div>");
}
//assign click handler
$("#table div").on("click", flipCard);  

function flipCard(e) {
  let div = e.target;
  let color = div.getAttribute("data-color");
  div.setAttribute("style", "background-color:" + color);
  return color;
};

Player.prototype.turn = function() {
  console.log(currentPlayer);
  alert("Please select a card")
  let card1 = flipCard();
  console.log(card1);
  console.log(color2);

//  if (this.flip() ==  this.flip()) {
//   return true;
// console.log(card1);
// console.log(card2);
// };

//   function flip2() {
//   alert("Please select another card");
//   $("#table").click(function(e) {
//     let div = e.target;
//     card2 = div.getAttribute("data-color");
//   console.log(card1);
//   console.log(card2);
//   });
// };
}; 

// this works--color saved (but cant get it out of this function into another var)
Player.prototype.flip = function(e) {   
  alert("Please select a card");
  $("#table").click(function() {
    let div = e.target;
    color = div.getAttribute("data-color");
    console.log(color)
    // return color;
  });

  //   alert("Please select a card");
  // $("#table").click(function(e) {
  //   let div = e.target;
  //   let card2 = div.getAttribute("data-color");  
  // });
  // if (card1 === card2){
  //   return true;
  };


  // console.log(card1);
  // console.log(card2);



Player.prototype.card2 = function() {
  alert("Please select a card");
   $("#table").click(function(e) {
		// let card1 = this.flipCard();
    let div = e.target;
    let color = div.getAttribute("data-color");
    return color;
});
};
// Player.prototype.flipCard = function(e) {
//   let div = e.target;
//   let color = div.getAttribute("data-color");
//   div.setAttribute("style", "background-color:" + color);
//   return color;
// };




//  $().on("click", clickCallback);

// Player.prototype.turn = function() {
//   // alert("Please select a card");
//    $("#table").click(function(e) {
// 		let card1 = flipCard()
//     // let div = e.target;
// 		// let color = div.getAttribute("data-color");
// 		// div.setAttribute("style", "background-color:" + color);
//   });
//
