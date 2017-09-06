var clicks = 0;
var firstChoice = 0;
var secondChoice = 0;
var isFlipped = false;
var cards = [];
cards[0] = "img/image1.jpeg";
cards[1] = "img/image2.jpg";
cards[2] = "img/image3.jpg";
cards[3] = "img/image4.jpg";
cards[4] = "img/image5.jpg";

randomImageGenerator = function()
{
	console.log("Amar " + cards.length);
   for(var i = 0; i<=cards.length; i++)
   {
	   console.log("Amar" + i);
     var rand = Math.floor(Math.random() * cards.length);
	 document.getElementById("demo").innerHTML += "<div class='card'>\
        <!--<input type='hidden' value='img/image1.jpg'>-->\
        <div class='front'>\
          <img src=" + cards[rand] + " class='image'>\
        </div>\
        <div class='back'>\
          <img src='img/backimage.png' class='image'>\
        </div>\
      </div>";
   }
};
function Memory(card1 , card2)
{
  this.card1 = card1;
  this.card2 = card2;
}

choose = function(card)
{
  console.log(clicks);
  if(clicks == 1)
  {
    secondChoice = card;
    clicks = 0;
    return (firstChoice == secondChoice);
  }
  else if(clicks == 0)
  {
    firstChoice = card;
    clicks++;
  }
};
Memory.prototype.matchCards = function(card1, card2)
{
  if(card1 === card2)
  {
    return true;
  }
  return false;
};

// Memory.prototype.matchCards = function(card1,card2)
// {
//   if (cardsSelected.length == 0)
//   {
//       // hide the current card
//       this.setVisible(false);
//       cardsSelected.push(this);
//   }
//   else if (cardsSelected.length == 1)
//   {
//       // hide the current card
//     this.setVisible(false);
//     cardsSelected.push(this);
//
//     // see if it matches the card that was already hidden
//     if (cardsSelected[0].val() == cardsSelected[1].val()))
//     {
//       cardsSelected.length = 0;
//     }
//     else
//     {
//       // no match, so show both cards again
//       cardsSelected[0].setVisible(true);
//       cardsSelected[1].setVisible(true);
//       cardsSelected.length = 0;
//     }
//   }
//};
exports.memoryModule = Memory;
exports.chooseModule = choose;
exports.randomModule = randomImageGenerator;