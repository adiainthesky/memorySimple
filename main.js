//import $ from 'jquery';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/styles.css';
import Player from './js/game.js';
import dealCards from './js/table.js';
import assignCards from './js/table.js';

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
   $("#table").click(function(e) {
		let card1 = flipCard()
    // let div = e.target;
		// let color = div.getAttribute("data-color");
		// div.setAttribute("style", "background-color:" + color);
  });
};



//now we have a grid of cards. We have a click event handler on 21 when card is clicked. flip card, save color in some variable. see if variable is
//set, does it match with the current color. If matches, player gets a point. If not, wait for half a second, flip them over again. 
//have to make program flip back. set timeout is good use for this. 


















