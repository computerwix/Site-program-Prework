# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](http://g.recordit.co/rLY2KbUL6O.gif)
![](http://g.recordit.co/T2RwqkcWIo.gif)
![](http://g.recordit.co/yRhBNESicE.gif)
![](http://g.recordit.co/j5sQwTRDrP.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[YOUR ANSWER HERE]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
One of the challenges I encountered while creating this project was trying the implement the three strikes system. This most challenging part of this task was trying to create a function to show a strike when a player made a mistake in guessing the pattern sequence and developing a way to track the number of mistakes so after the player made three mistakes the loseGameStrikes() function could be called. First I created a container which held three buttons in the HTML code. I then added the hidden class to the buttons in this container, so the buttons would not be shown at the start of the game. Next, I had to position the buttons on the screen so they did not collide with the other elements on the screen. After researching style.css and playing around with it, the float: functionality really came in handy to help me position the container in a reasonable space. Then I created a function called showStrike() which removed the hidden class from a specific button in the container called “strikeArea”. Next, I created a function called addStrike() which  would reveal a strike on the screen if the player made a mistake. I accomplished this by creating a variable called strikeProgress and incrementing it by one ever time the function addStrike() was called. After incrementing the variable, I then added the setTimeout() function in the addStrike() function to call the function showStrike() after 0 milliseconds passing it the value of strikeProgress as an argument since the function showStrike() has a parameter. The value stored in strikeProgress is now used to remove the hidden class from the specific button in the container “strikeArea”. The buttons in “strikeArea  id’s are button#, so if the initial value of strikeProgress is zero and then the function addStrike is called, strikeProgress now contains a value of one and then passes this as an argument to the showStrike() function which then would remove the hidden class from the button’s id which is button1. Finally, I added the addStrike() function to the else statement in the guess() function proceeded by a setTimeout() function that called the playClueSequence() function after 2000 milliseconds. Lastly, I created another if condition in the guess() function which calls the loseGameStrikes() function if strikeProgress can be compared to three.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
