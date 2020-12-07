// import Player from './js/game.js';
// import dealCards from './js/table.js';
// import assignCards from './js/table.js';

let currentId = 0; 
let player1;
let player2;
let currentPlayer;

$(document).ready(function(){
  dealCards(flipCard);
  player1 = new Player(prompt("Please enter your name:"));
	player2 = new Player(prompt("Please enter your name:"));
	currentPlayer = player1;
  currentPlayer.turn();
});
  
function turn() {
  // alert("Please select a card");
   $("#table").click(function() {


  });
};



//now we have a grid of cards. We have a click event handler on 21 when card is clicked. flip card, save color in some variable. see if variable is
//set, does it match with the current color. If matches, player gets a point. If not, wait for half a second, flip them over again. 
//have to make program flip back. set timeout is good use for this. 


export default function Player(name) {
  this.name = name;
  this.turnTaken = 0;
  this.total = 0;
};

// Player.prototype.turn = function() {
//   alert("Please select a card");
//   let flip1 = this.selectCard();
//   console.log(flip1);
//   alert("Please select another card");
//   let flip2 = this.selectCard();
//   if (flip1 === flip2)
//     return true;
// };



//1. keep track of whose turns it is. 
//2. ask to select a card. 
//3. depending on card selected, save selected. 
//4. ask user to find match. If they do, user gets a point.
//5. If not, the two cards flip back.



// export default function dealCards() {   //clickCallback
//   //clickCallback is an argument; it's a function to call when a div is clicked
//   const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "indigo"];
//   //double colors...
//   let rawPairs = colors.concat(colors);
//   //randomize...
//   let pairs = [];   //["green", "orange", "yellow", "purple", "pink", "indigo", ........."]
//   while (rawPairs.length){
//   	let randomIndex = Math.floor(Math.random() * rawPairs.length);
//     let randomColor = rawPairs.splice(randomIndex, 1)[0];
//     pairs.push(randomColor);
//   }
//   //create divs
//   for (let id=0; id<pairs.length; id++){
//   	//sixteen colors, randomly placed
//     $("#table").append("<div class='card' id='card_" + id + "' data-color='" + pairs[id] + "'></div>");
//   }
//   //assign click handler
//   $("#table div").on("click", flipCard);  

// }














