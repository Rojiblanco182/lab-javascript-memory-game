var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {

  var newCards = [];
  var randomHero = 0;

  while (this.cards.length > 0) {
    randomHero = Math.floor(Math.random() * this.cards.length);
    newCards.push(this.cards[randomHero]);
    this.cards.splice(randomHero, 1);
  }
  this.cards = newCards;
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard == secondCard) {
    this.pairsGuessed++;
    return true;
  }
  else return false;
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsClicked == 0) return false;
  else if (this.pairsGuessed == this.cards.length / 2) return true;
  else return false;
};