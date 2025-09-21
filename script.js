let playerobj = {
    name: "Reda",
    chips: "200"
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let btn = document.getElementsByTagName("button")[0];
let messageEl = document.getElementsByTagName("p")[0];
let sumMessage = document.getElementsByTagName("p")[2];
let cardsEl = document.getElementsByTagName("p")[1];
let btn2 = document.getElementsByTagName("button")[1];
let playerMessage= document.getElementsByTagName("p")[3];
playerMessage.textContent= playerobj.name + ": $" + playerobj.chips
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10) {
        return 10
    }
    else if (randomCard === 1) {
        return 11
    }
    else {
        return randomCard;
    }
}
function startGame() {
isAlive = true;
let firstCard = getRandomCard();
let secondCard = getRandomCard();
cards = [firstCard, secondCard];
sum = firstCard + secondCard;
renderGame();
       
}
function renderGame () { 
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
        
    }
    
    sumMessage.textContent = "Sum: " + sum;
    if (sum <= 20) {    
        message = (`Do you want to draw a new card? 🙂`);
    }
    else if (sum === 21) {
        message = (`You've got Blackjack! 🥳`);
        hasBlackJack = true;
    }
    else {
        message = (`You're out of the game! 😭`);
        isAlive = false;
    }
    messageEl.textContent = message;
}
btn.addEventListener("click", startGame)
btn2.addEventListener("click", function newCard() {
  if (isAlive=== true || hasBlackJack===true) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();

  }
})