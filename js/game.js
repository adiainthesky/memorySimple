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

Player.prototype.flipCard = function() {
  let div = e.target;
  let color = div.getAttribute("data-color");
  div.setAttribute("style", "background-color:" + color);
  return color;
};
    // div.setAttribute("data-match", false);
    
// function selectCard() {
//   // alert("Please select a card");
//    $("#table").click(function(e) {
//     let div = e.target;
//     let color = div.getAttribute("data-color");
//     console.log(color);
//     return color;
//   });
// };


// function turnOver(e){
// 	//a card has been clicked
//   	//e is the click event object
//   	//e.target is the element clicked (div)
//   	//e.target.getAttribute("data-color") gets the color of the element (div)
// 		let div = e.target;
// 		let color = div.getAttribute("data-color");
// 		div.setAttribute("data-match", false);
// 		div.setAttribute("style", "background-color:" + color);
// }

//1. keep track of whose turns it is. 
//2. ask to select a card. 
//3. depending on card selected, save selected. 
//4. ask user to find match. If they do, user gets a point.
//5. If not, the two cards flip back.