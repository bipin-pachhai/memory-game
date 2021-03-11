// global constants
  const cluePauseTime = 333; //how long to pause in between clues
  const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence 


//Global Variables
  var pattern = [];
      //assigning six random patterns
    for(let i =0; i <6 ; i++){
    pattern[i] = Math.floor(Math.random()*6 + 1);
   // console.log(pattern[i]);
    }
  var progress = 0; 
  var attemptsAvailable; // to store no. of attempts available for the player
  var countdown;// declare variable to store countdown
  var gamePlaying = false;
  var tonePlaying = false;
  var volume = 0.5;
  var guessCounter =0;
  var timelimit;// declare variable for setInterval() and clearInterval()
  var clueHoldTime = 2000; //how long to hold each clue's light/sound


function startGame(){
    //initialize game variables
    gamePlaying = true;
    progress = 0;
    attemptsAvailable = 3;

  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");
  playClueSequence();
}


function stopGame(){
  gamePlaying = false;
  clearInterval(timelimit); //clear interval if was set
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won.");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
  
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

//checks player guess with the pattern
function guess(btn){
   // console.log("user guessed: " + btn);
     if(!gamePlaying){
      return;
    }
  //if btn press matched the pattern[guessCounter]
    if(btn == pattern[guessCounter]){
        //check if guessCounter has not reached progress limit 
      if(guessCounter < progress){
         //check next guess
         guessCounter++;
       }
       else{
         //check if whole pattern is completed
            if(progress == pattern.length -1){
              //Game win
              winGame();
            }
            else{
            //All Guessess matched? >> Change progress
            progress++;
            playClueSequence();
            }
       }
    }
    //Guess was incorrect
    else{ 
      attemptsAvailable--;
      (attemptsAvailable <= 0)? loseGame(): alert(`Wrong Selection! Attempts available: ${attemptsAvailable}`);  //either loseGame() or notify users the remaining attempts
    }
  } 
//Timer Function to set timelimit
function startCountDown(){ 
  countdown = countdown -1 ; // decrease countdown by 1 everytime
  if(countdown <= -1){
    clearInterval(timelimit);
    stopGame();
    alert("Game Over! You ran out of Time.");
    return;
  }
  document.getElementById("timer").innerHTML= "Time Remaining: " + countdown + " secs";
   
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  clearInterval(timelimit);// clear previous setInterval()
  guessCounter = 0;
  countdown = 6*(progress+1); // change the countdown limit for each progress
  clueHoldTime = clueHoldTime - 15*progress;// decrease clueHoldTime on each progress; calculated such that hold time will be aproximately one second for the final round.
 // console.log(clueHoldTime);
  
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    //console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  timelimit = setInterval(startCountDown,1000);//set countdown for the specific playsequence   
}

function playTone(btn,len){ 
  //o.frequency.value = freqMap[btn]
  //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  document.getElementById("audio"+btn).play();
  tonePlaying = true;
  setTimeout(function(){
    stopTone(btn)
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    /*
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
    */
    document.getElementById("audio"+btn).play();
    tonePlaying = true;

  }
}
function stopTone(btn){
  document.getElementById("audio"+btn).pause();
  tonePlaying = false;
}


/*
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 505.1,
  6: 305
}



function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

*/


