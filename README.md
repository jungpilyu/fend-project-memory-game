# Memory Game Project

[//]: # (Image References)
[nexus1]: ./img/playing.png
[nexus2]: ./img/youwin.png
[ipad]: ./img/ipad.png

# Overview

This project was done as a partial fulfillment of the requirements for "Front-End Web Developer Nanodegree" of the Udacity. The project implements the card-matching classic game which is played with the following rules:

- Cards should be shuffled on load or replay.
- Game should display the current number of moves a user has made.
- The game should show a star rating from one upto three based on the number of moves a user made.
- When a game starts, a timer should start and be displayed.
- When the player wins the game, a congratulations modal shoud open showing the moves, star rating, and the time elapsed.
- A replay button should shuffle the board, reset the timer, and initialize the star rating.

# Rubric Points

The [rubric points](https://review.udacity.com/#!/rubrics/591/view) are checked by providing the description in each step.

## Game Behavior

#### 1. The game randomly shuffles the cards. A user wins once all cards have successfully been matched. [Memory Game Logic]
I used the random card-shuffling `function shuffle(array)` provided in [the project package](https://github.com/udacity/fend-project-memory-game). Whenever two cards match, javascript code examines if all cards match or not.

#### 2. When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.[Congratulations Popup]
Once all cards match, a dialog box pops up to show the required infomation and ask a replay as shown below.
![A modal][nexus2]

#### 3. A restart button allows the player to reset the game board, the timer, and the star rating.[Restart Button]
A restart button font was borrowed from a [Font Awesome](https://fontawesome.com/). Actually, all card images also came from the same font family. A event listener was set to call the `function init()` initializing the game board, the timer, and the star rating.

#### 4. The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. [Star Rating]
The three star is maintained until 25 moves. Then a star is slashed from 26. Another star-slashing happens from 46 moves. These thresholds are somewhat arbitrary but based on my play experience. The rating was implemented in `function updatedScorePanel()` in *app.js* where the number of moves is also updated as shown below. The star elements in *index.html* is dynamically constructed at this function call.
```javascript
function updateScorePanel() {
  moves.innerText = nMoves;
  const nStars = nMoves <= 25 ? 3 : (nMoves <= 45 ? 2 : 1);
  starHtml = '';
  for(let i = 0; i < nStars; i++) {
    starHtml += '<li><i class="fas fa-1x fa-star"></i></li>';
  }
  stars.innerHTML = starHtml;
}
```

#### 5. When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.[Timer]
A running timer was implemented by the web api [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) method.

#### 6. Game displays the current number of moves a user has made.[Move Counter]
Whenever the card deck event listener calls the `function callBackDeck`, the global varialbe nMoves increases. This function then calls the `function updateScorePanel()`(See the above code snippet) which updates the score panel including the number of moves. The `function callBackDeck` is the most important function in this project. Most of major game logic was implemented there. The [event delegation](https://javascript.info/event-delegation) technique simplified the card selection event calls in `updateScorePanel()`.

## Interface Design

#### 1. Application uses CSS to style components for the game.[Styling]
The use of a CSS file is indispensable in the project because quite a few CSS features implements the essential visual effect including card-showing.

#### 2.All application components are usable across modern desktop, tablet, and phone browsers.[Usability]
The game was designed to support phone, tablet, and desktop browsers using a media query.
The screen shots in Nexus5 phone and IPad browser emulation mode are shown below.
The break point in responsive design was set to **width = 700px**.
![Nexus5][nexus1]![IPad][ipad]

## Documentation

#### 1. A README file is included detailing the game and all dependencies.[README]
Done.

#### 2.Comments are present and effectively explain longer code procedure when necessary. [Comments]
Several inline and **jsdoc** comments were included in the *app.js* file.

#### 3. Code is formatted with consistent, logical, and easy-to-read formatting as described in the [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html).[Code Quality]
Done.

