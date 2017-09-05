var clicks = 0;
var firstChoice = 0;
var secondChoice = 0;
var isFlipped = false;
var cards = {};
cards[1] = "img/image1.jpeg";
cards[2] = "img/image2.jpg";
cards[3] = "img/image3.jpg";
cards[4] = "img/image4.jpg";
cards[5] = "img/image5.jpg";
cards[6] = "img/image1.jpeg";
cards[7] = "img/image2.jpg";
cards[8] = "img/image3.jpg";
cards[9] = "img/image4.jpg";
cards[10] = "img/image5.jpg";

// function random(concat)
// {
//    document.getElementById("demo").innerHTML = (concat);
// }
// for(var i = 0; i<cards.length; i++)
// {
//   var rand = Math.floor(Math.random(concat) * cards.length);
//
//   var concat = cards[rand];
// }
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
  else (clicks == 0)
  {
    firstChoice = card;
    clicks++;
  }
}
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
