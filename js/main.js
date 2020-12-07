let cards = [];
let playerOne;
let playerTwo;
let currentPlayer;

$(document).ready(function(){
  createDeck();
  console.log(cards);
  dealCards(cards);
  player1 = new Player(prompt("Please enter your name:"));
	player2 = new Player(prompt("Please enter your name:"));
	currentPlayer = player1;
  currentPlayer.turn();
});

function Player(name) {
  this.name = name;
  this.Score = 0;
  this.flip1 = 0;
  this.flip2 = 0;
};

Player.prototype.turn = function() {
  this.flipCard1();
  this.flipCard2();
  // flip2 = this.flip();
  // console.log(flip2);
};




Player.prototype.flipCard1 = function() {
  let flip1 = 0
  alert("Please select a card");
 
  $(".card").click(function(event){
    flip1 = event.target.getAttribute('number');
    // console.log(flip1)
    currentPlayer.flip1 = flip1

  }); 
};

Player.prototype.flipCard2 = function() {
  let flip2 = 0
  alert("Please select a card");
 
  $(".card").click(function(event){
    flip2 = event.target.getAttribute('number');
    // console.log(flip1)
    currentPlayer.flip2 = flip2
    
  }); 
};



// $('button').click(function(){
// player2 = new Player(prompt("Please enter your name:"));
// const answer1 = $("input:radio[name=question1]:checked").val(); 


// Player.prototype.turn = function() {
//   console.log(currentPlayer);
//   alert("Please select a card")
//   let flip1 = this.selectedCard()
//   let flip2 = this.selectedCard()
//     console.log(card.number)
// }; 


// Player.prototype.selectCard = function() {
//   $("#table").click(function() {
//   })
// };



// Player.prototype.turn = function() {
//   alert("Please select a card");
//   let flip1 = this.selectCard();
//   console.log(flip1);
//   alert("Please select another card");
//   let flip2 = this.selectCard();
//   if (flip1 === flip2)
//     return true;
// }


// table functions
function createDeck() {
  for(let card = 1; card <= 8; card++) {
    cards.push(card);
  }
  cards = cards.concat(cards);
  shuffleCards(cards);
};

function shuffleCards(cards) {
  for(let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    cards = [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function dealCards(cards) {
  cards.forEach(function(number) {
    $("#table").append("<div class='card' number =" + cards[number] + "></div>");
  })
};







//1. keep track of whose turns it is. 
//2. ask to select a card. 
//3. depending on card selected, save selected. 
//4. ask user to find match. If they do, user gets a point.
//5. If not, the two cards flip back.


//functions needed:
//switch turns
//ask to select a card
//save selected card. call select card function again.
//match cards
//add to total points





// let currentId = 0; 
// let player1;
// let player2;
// let currentPlayer;

// $(document).ready(function(){
//   dealCards(flipCard);
//   player1 = new Player(prompt("Please enter your name:"));
// 	player2 = new Player(prompt("Please enter your name:"));
// 	currentPlayer = player1;
//   currentPlayer.turn();
// });
  
// function turn() {
//   // alert("Please select a card");
//    $("#table").click(function() {


//   });
// };


//now we have a grid of cards. We have a click event handler on 21 when card is clicked. flip card, save color in some variable. see if variable is
//set, does it match with the current color. If matches, player gets a point. If not, wait for half a second, flip them over again. 
//have to make program flip back. set timeout is good use for this. 


