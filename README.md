# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **BIPIN PACHHAI**

Time spent: **7** hours spent in total

Link to project: https://glitch.com/edit/#!/island-darkened-bagpipe

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [x] Time limit is set very short in the beginning. As level progresses, timit limit changes to adjust number of clues that play in each progress.
* [x] The active clue plyaing is set to scale up 1.2 times so that the player can easily identify it, and will be helpful to memorize the pattern.
* [x] CSS properties have been added to the title, heading, and other div sections to make the game look beautiful and interactive.
* [x] Start and Stop buttons change background and text colors, and transform while hovering over them. 

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src="https://imgur.com/4ZVw7FY.gif" width = "800"><br>
<img src="https://imgur.com/sT7p1Qr.gif" width = "800"><br>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  * a)I used (https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) and W3School tutorials for the DOM manipulation. 
  * b) I used (https://programminghead.com/how-to-play-audio-in-html-using-javascript/) as a reference tutorial to insert and manage the audios used in the game.
  * c) I used some references from my previous projects(https://github.com/bipin-pachhai) for the CSS design.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

      [Adding timer to the game was a challenge for me. Since I had never used setInterval() and clearInterval() before, I had no concept about how they work. So, I went through 
      some of the questions asked on StackOver and w3school tutorials and learned how to implement them beforehand. Yet another challenge was to adjust the countdown on each progress 
      because as the game progresses, playing more clues takes more time. At first, I tried implementing setInterval() in startGame() function. However, it only gave me constant time 
      limit for all progresses. So, timer was no worth of challenge for the player. Since my goal was to change time limit on each progress to make it more challenging as the level 
      progresses, I had to work on time calculation and figure out the function where time constraint can be implemented so that timer adjust dynamically. So, I finally implemented it in the playSequence() function 
      where countdown timer will be reset depending on which level of progress the player is in. Yet another challenge was when to clear the interval. At first, I had used clearInterval() function only on startCountDown() function,
      which cleared the interval only after the player runs out of time. However, when I tested my code, time calibration did not work as expected. The problem was whenever playSequence() function was called, it kept 
      setting the time interval without clearing the previously set setInterval() function. So, I inserted clearInterval() at the start of the playSequence() function. The purpose was to clear the previously set time interval whenever playSequence() function is called
      to play the next sequence. After resolving above mentioned issues, I was able to achieve a dynamic and seamless countdown timer in the game. In this way, I overcame the timer challenge implemented in the game.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

      [In this game, we have registered our functions to the events like onmouseup, onmousedown, onclick etc. While going through the documentation related to Event Reference, I have also learned that there are already many browser events where 
      we can register our customized functions to be called when the specific event gets fired. However, I was curious about how we can define and create our own events. How can we register our own events which the browser can recognize? 
      Are events only created by the browser developer? Do different browsers recognize the same event differently?]
      
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    [If I had a few more hours to work on this project, I would have added following functionalities in the game:
    * a)	**Pause/Resume Button:** I would have added pause/resume button functionality in the game. Using the queue data structures, it will be possible to keep track of the history of the progress of the game. Since, queue works on the basis of first-in first-out, it will be easy to resume/pause the game at some point of game and resume it later at the same point. The paused point will always be at the first place in the queue and will advance forward according to the order of the values stored in the queue. 
    * b)	 **Timer:** I would have worked more on testing and calibrating the timer so that it would be adjustable with clueHoldTime and nextClueWaitTime constants, and yet challenging for the player. In this version of the game, the timer will count both the time computer takes to run the clues and the time player takes to make the correct guess. So, I would have worked on the timer which will only start  countdown on user’s turn after the computer finishes playing all the clues on the particular progress.
    * c)	**Dynamic Clues:** Since the number of clues to be displayed are always fixed (whatever the number is), I was also looking forward to adding more clues automatically as the level  of the increases. It would have made the game more challenging and the goal of adding clues dynamically would have been easily achieved by hiding the remaining clues and showing them only after the game reaches the certain level or progress.
    ]



## License

    Copyright [BIPIN PACHHAI]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
