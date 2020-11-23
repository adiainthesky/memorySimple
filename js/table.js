export default function dealCards() {   //clickCallback
  //clickCallback is an argument; it's a function to call when a div is clicked
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
  };
}


