let player =
{
    name: "Per: ",
    chips: 45
}
let cards = [] //array
let sum = 0
let hasblackjack = false
let isAlive = true
let message = ""
let totcards = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-El")
playerEl.textContent = player.name + "$" + player.chips


// funtion to start main game
function startgame(){
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    rendergame()
}


function rendergame(){


    // cardsEl.textContent = "Cards: " + cards.join(" ")
    cardsEl.textContent = "Cards: "
       
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "} 

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Would you like to draw another card?"

    } else if (sum === 21) {
        message = "You've won the game!"
        hasblackjack = true;

    } else {
        message = "You're out." 
        isAlive = false;
    }

    messageEl.textContent = message;

}



//funtion to give new card
function newCard() {
   if(isAlive && !hasblackjack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        rendergame()    
   }    
}

function getRandomCard(){
    let rand =Math.floor(Math.random()*13)+1

    if(rand > 10){
        return 10
    }
    else if( rand === 1){
        return 11
    }

    else{
        return rand
    }
}