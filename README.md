# Memory Game Project

## Table of Contents

* [Overview](#Overview)
* [Rubric Points](#Rubric Points)

# Overview

This write-up was written as a partial fulfillment of the requirements for the Nano degree of "Front-End Web Developer Nanodegree" of the Udacity. The project implements the finding-pair-cards classic game which is played with the following rules:

- Cards should be shuffled on load or replay.
- Game should display the current number of moves a user has made.
- The game should show a star rating from one upto three based on the number of moves a user made.
- When a game starts, a timer should start and be displayed.
- When the player wins the game, a congratulations modal shoud open showing the moves, star rating, and the time elapsed.
- A replay button should shuffle the board, reset the timer, and initialize the star rating.

# Rubric Points

The rubric points are checked by providing the description in each step.

## Game Behavior

- The game randomly shuffles the cards. A user wins once all cards have successfully been matched. [Memory Game Logic]


- When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.[Congratulations Popup]

- A restart button allows the player to reset the game board, the timer, and the star rating.[Restart Button]

- The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1). The number of moves needed to change the rating is up to you, but it should happen at some point.[Star Rating]

- When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.[Timer]

- Game displays the current number of moves a user has made.[Move Counter]

## Interface Design

- - Application uses CSS to style components for the game.[Styling]

- All application components are usable across modern desktop, tablet, and phone browsers.[Usability]

## Documentation

- A README file is included detailing the game and all dependencies.[README]

- Comments are present and effectively explain longer code procedure when necessary. [Comments]

- Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.[Code Quality]

