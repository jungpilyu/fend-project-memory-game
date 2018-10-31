/*
 * Create a list that holds all of your cards
 */
let list = ["address-book","address-card", "building", "calendar",
"calendar-alt", "chart-bar", "copyright", "edit",
"address-book","address-card", "building", "calendar",
"calendar-alt", "chart-bar", "copyright", "edit"];

//"envelope","envelope-open","file","file-alt",
//"save", "sticky-note", "hdd", "keyboard"];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

let nMoves = 0;
let nOpen = 0;
let openedCard;
let deck;
let moves;
let star;
let timer;
let elapsedTime;
let elapsedTimeId;

function initDeck() {
  let shuffledList = list;// shuffle(list);
  let spin = '';//"fa-spin"
  let updatedHtml = '';
  for(let i = 0; i < shuffledList.length; i++) {
    updatedHtml +=`<li class='${shuffledList[i]} card'>
  <i class='fas ${spin} fa-2x fa-${shuffledList[i]}''></i>
</li>
`;
  }
  console.log(updatedHtml);
  deck.innerHTML = updatedHtml;
}

function updateTimer(e) {
  elapsedTime++;
  timer.innerText = elapsedTime;
}

function updateScorePanel() {
  moves.innerText = nMoves;
  const nStars = nMoves <= 5 ? 3 : (nMoves <= 10 ? 2 : 1);
  let starHtml = '';
  for(let i = 0; i < nStars; i++) {
    starHtml += '<li><i class="fas fa-2x fa-star"></i></li>';
  }
  stars.innerHTML = starHtml;// + ' Moves';
}

function init() {
  moves = document.querySelector('.moves');
  stars = document.querySelector('.stars');
  nMoves = 0;
  updateScorePanel();
  nOpen = 0;
  deck = document.querySelector('.deck');
  initDeck();
  timer = document.querySelector('.timer');
  elapsedTime = 0;
  elapsedTimeId = setInterval(updateTimer, 1000);
}

function callBackDeck(e) {
  let card = e.target.classList;
  // check if a user click a valid card
  if(e.target.nodeName != 'LI' || card[card.length-1] == 'match') {
    return;
  }
  // user clicked a valid card
  // then open the card
  nOpen++;
  if(nOpen >= 3) {
    return;
  }
  nMoves++;
  updateScorePanel();
  e.target.classList.add('open');
  e.target.classList.add('show');
  // if this is the first card, save its classList and return
  if(nOpen == 1) {
    openedCard = e.target.classList;
    return;
  }

  // Now, this is the second card. So check if two cards match
  console.log(openedCard[0]+' vs '+ e.target.classList[0])
  if(openedCard[0] != e.target.classList[0]) {
    // Cards do not match. So cards close in 1 second and return
    setTimeout(function (cardA, cardB) {
      cardA.remove('show');
      cardA.remove('open');
      cardB.remove('show');
      cardB.remove('open');
      nOpen = 0;
    }, 1000, openedCard, e.target.classList);
    return;
  }
  // Cards match. So tag cards as 'match' and check if all match
  setTimeout(function (cardA, cardB) {
    cardA.remove('show');
    cardA.replace('open', 'match');
    cardB.remove('show');
    cardB.replace('open', 'match');
    // check if all cards match
    let i;
    for(i = 0; i < deck.children.length; i++) {
      let last = deck.children[i].classList.length - 1;
      if(deck.children[i].classList[last] != 'match') {
        break;
      }
    }
    if(i == deck.children.length) {
      console.log('Congratulation!');
      window.open('result.html', 'Completed', 'width=400, height=600, left=50'+
              ', top=10, scrollbars=no, toolbars=no, location=no, status=no');
      clearInterval(elapsedTimeId);
    } else {
      console.log('Game continue!');
    }
    nOpen = 0;
  }, 0, openedCard, e.target.classList);
}


// Register call-back function
document.querySelector('.deck').addEventListener('click', callBackDeck);
document.querySelector('.restart').addEventListener('click', function(e) {
  init();
});


init();
